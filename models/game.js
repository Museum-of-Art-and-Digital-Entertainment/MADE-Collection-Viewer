const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const GameSchema = new Schema({
	id: {
		type: Number,
		index: true,
		unique: true,
		required: true
	},
	title: {
		type: String,
		default: ''
	},
	platformId: {
		type: Number,
		ref: "Platform"
	},
	platform: {
		type: String,
		default: ''
	},
	release: {
		type: Date,
		default: undefined
	},
	overview: {
		type: String,
		default: ''
	},
	esrb: {
		type: String,
		default: ''
	},
	players: {
		type: String,
		default: ''
	},
	coop: {
		type: Boolean,
		default: ''
	},
	publisher: {
		type: String,
		default: ''
	},
	developer: {
		type: String,
		default: ''
	},
	genres: [
		{
			type: String
		}
	],
	boxartFront: {
		type: String,
		default: ''
	},
	boxartBack: {
		type: String,
		default: ''
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