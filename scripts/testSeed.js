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

var wait = 
    ms => new Promise(
        r => setTimeout(r, ms)
    );

var repeat = 
    (ms, func) => new Promise(
        r => (
            intervalID = setInterval(func, ms), 
            wait(ms).then(r)
        )
    );

var myfunction = 
    () => new Promise(
        r => r(console.log('repeating...'))
    );

var stopAfter5Secs = 
    () => new Promise(
        r => r(setTimeout(() => { 
                    clearInterval(intervalID);
                    console.log('repeat end');
                    process.exit(); 
               } , 60000))
    );

repeat(5000, () => Promise.all([myfunction()])) // 1000 miliseconds = 1 second
.then(stopAfter5Secs())  // starts timer to end repetitions
.then(console.log('repeat start')); // informs that all actions were started correctly and we are waiting for them to finish