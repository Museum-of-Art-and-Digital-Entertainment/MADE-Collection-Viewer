const db = require("../models");
const request = require("request");
const convert = require('xml-js');
const moment = require('moment');
// Controller for handling the collection 
module.exports = {
	getPlatformsGamesDB: function () {
		return new Promise((resolve, reject) => {
			request("http://thegamesdb.net/api/GetPlatformsList.php", function(err, response, xml) {
					if (err) {
						reject(err);
					}

					const result = convert.xml2js(xml, {compact: true, ignoreDeclaration: true});
					let platforms = result.Data.Platforms.Platform;
					const size = platforms.length;
					console.log('Number of platforms found', size);
					let count = size;
					for (let i = 0; i < size; i++) {
						let platform = {
							id: parseInt(platforms[i].id._text),
							name: platforms[i].name._text,
						}
						if (platforms[i].alias) {
							platform.alias = platforms[i].alias._text;
						} else {
							platform.alias = platforms[i].name._text.toLowerCase().replace(" ", "-");
						}
						platforms[i] = platform;
					}
					return Promise.all(platforms.map(platform => {
						return db.Platform.findOneAndUpdate({id: platform.id}, platform, {upsert: true, new: true})
							.catch(err => console.log(err));
					}))
						.then(res => resolve(platforms))
						.catch(err => reject(err));
				});
		});
	},

	getGamesByPlatform: function(platform) {
		return new Promise((resolve, reject) => {
			request("http://thegamesdb.net/api/GetPlatformGames.php?platform="+platform.id, function(err, response, xml) {
				if (err) {
					reject(err);
				}
				console.log(`Looking for ${platform.name} games.`);
				console.log(xml);
				const result = convert.xml2js(xml, {compact: true, ignoreDeclaration: true});
				let games = result.Data.Game;
				if(Array.isArray(games)) {
					const size = games.length;
					console.log(`Number of ${platform.name} games found is`, size);
					let count = size;
					for (let i = 0; i < size; i++) {
						let game = {
							id: parseInt(games[i].id._text),
							title: games[i].GameTitle._text,
							release: (games[i].ReleaseDate)? moment.utc(games[i].ReleaseDate._text, ["MM/DD/YYYY", "YYYY"]) : null,
						}
						games[i] = game;
					}
					return Promise.all(games.map(game => {
						return db.Game.findOneAndUpdate({id: game.id}, game, {upsert: true, new: true})
							.catch(err => console.log(err));
					}))
						.then(res => resolve(games))
						.catch(err => reject(err));
				} else if (games) {
					let game = {
						id: parseInt(games.id._text),

					}
				} else {
					resolve();
				}
				
			});
		});
	},

	getGameData: function(search) {
		return new Promise((resolve, reject) => {
			request("http://thegamesdb.net/api/GetGame.php?id="+search.id, function(err, response, xml) {
				if (err) {
					reject(err);
				}
				const result = convert.xml2js(xml, {compact: true, ignoreDeclaration: true});
				resolve('Success');
				const gameRes = result.Data.Game;
				let game = {
					id: gameRes.id._text,
					title: gameRes.GameTitle._text,
					platformId: gameRes.PlatformId._text,
					platform: gameRes.Platform._text,
					release: (gameRes.ReleaseDate)? moment.utc(gameRes.ReleaseDate._text, ["MM/DD/YYYY", "YYYY"]): null,
					esrb: (gameRes.ESRB)? gameRes.ESRB._text: null,
					overview: (gameRes.Overview)? gameRes.Overview._text: null,
					publisher: (gameRes.Publisher)? gameRes.Publisher._text: null,
					developer: (gameRes.Developer)? gameRes.Developer._text: null,
					players: (gameRes.Players)? gameRes.Players._text: null,
				}

				if(gameRes.Images) {
					if(gameRes.Images.boxart) {
						gameRes.Images.boxart.map((image, i) => {
							if(image._attributes.side === 'back'){
								game.boxartBack = "http://thegamesdb.net/banners/" + gameRes.Images.boxart[i]._text;
							}
							if(image._attributes.side === 'front'){
								game.boxartFront = "http://thegamesdb.net/banners/" + gameRes.Images.boxart[i]._text;
							}
						});
					};
				};

				if (gameRes.Genres) {
					if (Array.isArray(gameRes.Genres)) {
						game.genres = gameRes.Genres.map(genre => genre._text);
					} else {
						game.genres = [gameRes.Genres.genre._text];
					}
				}

				if(gameRes.Similar) {
					if (Array.isArray(gameRes.Similar.Game)) {
						game.similar = gameRes.Similar.Game.map(similar => similar.id._text)
					} else {
						game.similar = [gameRes.Similar.Game.id._text]
					}
				}

				db.Game.findOneAndUpdate({id: game.id}, game)
					.then(res => resolve(game))
					.catch(err => console.log(err));
			})
		})
	},

	getGamesDB: function () {
		return new Promise((resolve, reject) => {
			this.getPlatformsGamesDB()
				.then(platforms => {
					console.log("Getting games by platform");
					return Promise.all(platforms.map((platform, i) => {
						return this.getGamesByPlatform(platform);
					}));
				})
				.then(res => resolve(res))
				.catch(err => {
					reject(err); 
				});
		});	
	},
}