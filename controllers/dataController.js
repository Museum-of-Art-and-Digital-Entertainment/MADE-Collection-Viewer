const db = require("../models");
const request = require("request");
const convert = require('xml-js');
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
					for (let i = 0; i < size; i++) {
					console.log(i, platforms[i].id, platforms[i].name, platforms[i].alias);
						let platform = {
							id: parseInt(platforms[i].id._text),
							name: platforms[i].name._text,
						}
						if (platforms[i].alias) platform.alias = platforms[i].alias._text;
						platforms[i] = platform;
					}
					db.Platform.insertMany(platforms, {upsert: true})
						.then(res => {
							console.log(res)
							resolve(platforms);
						})
						.catch(err => {
							console.log(err);
							reject(err);
						});
				});
		});
	},

	getGamesDB: function () {
		return this.getPlatformsGamesDB();
	},
}