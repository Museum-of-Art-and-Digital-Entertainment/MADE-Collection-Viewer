const mongoose = require("mongoose");
const db = require("../models");
const controllers = require("../controllers");
mongoose.Promise = global.Promise;
require('dotenv').config();


mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/GameCollection",
  {
    useMongoClient: true
  }
);

// controllers.data.getGamesByPlatform({id: 58, name: 'Nintendo 64', alias: 'nintendo-64'})
// 	.then(result => {
// 		console.log(`There are ${result.length} games`);
// 		return Promise.all(result.map((game, i) => {
// 			return db.Game.findOne({id: game.id})
// 				.then(response => {
// 					(!response)? 
// 						console.log(i, "Game Not Found", game):
// 						console.log(i, "Game Found", response.title);
// 					return Promise.resolve(response);
// 				})
// 		}))
// 	})
// 	.then(res => {
// 		process.exit();
// 	})
// 	.catch(err => {
// 		console.log(err);
// 		process.exit();
// 	});

// db.Game.findOne({id: 1184})
// 	.then(res => {
// 		console.log(res)
// 		process.exit();
// 	})
// 	.catch(err => {
// 		console.log(err);
// 		process.exit();
// 	});

controllers.data.getGiantBombGames()
    .then(res => {
        process.exit();
    })
    .catch(err => {
        console.log(err);
        process.exit();
    })