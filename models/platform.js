const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const PlatformSchema = new Schema({
	theGamesDBId: {
		type: Number,
		unique: true,
		sparse: true
	},
	name: {
		type: String,
	},
	alias: {
		type: String,
	},
	collected: {
		type: Boolean,
	},
	copies: {
		type: Number,
	},
	downloaded: {
		type: Boolean,
		default: false,
	}
}, { timestamps: true });

const Platform = mongoose.model("Platform", PlatformSchema);

// Export the Platform model
module.exports = Platform;