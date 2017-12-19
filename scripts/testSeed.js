const mongoose = require("mongoose");
const db = require("../models");
const controllers = require("../controllers");
mongoose.Promise = global.Promise;


mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/GameCollection",
  {
    useMongoClient: true
  }
);

controllers.data.getGamesByPlatform({id: 58, name: 'Nintendo 64', alias: 'nintendo-64'})
	.then(result => {
		console.log(`There are ${result.length} games`);
		return Promise.all(result.map((game, i) => {
			return db.Game.findOne({id: game.id})
				.then(response => {
					(!response)? 
						console.log(i, "Game Not Found", game):
						console.log(i, "Game Found", response.title);
					return Promise.resolve(response);
				})
		}))
	})
	.then(res => {
		process.exit();
	})
	.catch(err => {
		console.log(err);
		process.exit();
	});
