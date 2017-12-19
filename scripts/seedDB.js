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

controllers.data.getGamesDB()
	.then(result => {
		// console.log(JSON.stringify(result, null, 2));
		process.exit();
	})
	.catch(err => {
		process.exit();
	});


