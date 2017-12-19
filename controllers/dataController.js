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
					Promise.all(platforms.map(platform => {
						db.Platform.findOneAndUpdate({id: platform.id}, platform, {upsert: true, new: true})
							.then(res => {})
							.catch(err => reject(err));
					}))
						.then(res => resolve(platforms))
						.catch(err => reject(err));
				});
		});
	},

	getGamesByPlatform: function(platform) {
		return new Promise((resolve, reject) => {
			request("http://thegamesdb.net/api/PlatformGames.php?platform="+platform.name, function(err, response, xml) {
				if (err) {
					reject(err);
				}
				const result = convert.xml2js(xml, {compact: true, ignoreDeclaration: true});
				let games = result.Data.Game;
				const size = games.length;
				console.log(`Number of ${platform.name} games found is`, size);
				let count = size;
				for (let i = 0; i < size; i++) {
					let game = {
						id: parseInt(games[i].id._text),
						title: games[i].GameTitle._text,
						release: moment.utc(games[i].ReleaseDate._text, "MM/DD/YYYY")
					}
					games[i] = game;
				}
				Promise.all(games.map(game => {
					db.Game.findOneAndUpdate({id: game.id}, game, {upsert: true, new: true})
						.then(res => {})
						.catch(err => reject(err));
				}))
					.then(res => resolve(games))
					.catch(err => reject(err));
			});
		});
	},

	getGameData: function(game) {
		return new Promise((resolve, reject) => {
			request("http://thegamesdb.net/api/GetGame.php?id="+game.id, function(err, response, xml) {
				if (err) {
					reject(err);
				}
				const result = convert.xml2js(xml, {compact: true, ignoreDeclaration: true});
				console.log(result);
				resolve('Success');
			})
		})
	},

	getGamesDB: function () {
		return new Promise((resolve, reject) => {
			this.getPlatformsGamesDB()
				.then(platforms => {
					console.log(platforms[58]);
					let count = platforms.length;
					console.log("Getting games by platform");
					return this.getGamesByPlatform(platforms[58]);
				})
				.then(games => {
					console.log("Getting game data");
					return this.getGameData(games[224]);
				})
				.then(res => resolve('Success'))
				.catch(err => {
					reject(err); 
				});
		});	
	},
}