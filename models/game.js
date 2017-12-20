const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const GameSchema = new Schema({
	id: {
		type: Number,
		index: true,
		unique: true,
	},
	title: {
		type: String,
	},
	platformId: {
		type: Number,
		ref: "Platform"
	},
	platform: {
		type: String,
	},
	release: {
		type: Date,
	},
	overview: {
		type: String,
	},
	esrb: {
		type: String,
	},
	players: {
		type: String,
	},
	coop: {
		type: Boolean,
	},
	publisher: {
		type: String,
	},
	developer: {
		type: String,
	},
	genres: [
		{
			type: String
		}
	],
	boxartFront: {
		type: String,
	},
	boxartBack: {
		type: String,
	},
	similar: [
		{
			type: Number,
			ref: "Game"
		}
	],
	copies: {
		type: Number,
		default: 0
	},
	collected: {
		type: Boolean,
		default: false
	},
	popularity: {
		type: Number,
		default: 0
	},
	downloaded: {
		type: Boolean,
		default: false
	}
}, { timestamps: true });

const Game = mongoose.model("Game", GameSchema);

// Export the Game model
module.exports = Game;