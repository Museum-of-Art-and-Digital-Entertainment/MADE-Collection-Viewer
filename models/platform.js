const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const PlatformSchema = new Schema({
	id: {
		type: Number,
		index: true,
		unique: true
	},
	name: {
		type: String,
	},
	alias: {
		type: String,
	}
}, { timestamps: true });

const Platform = mongoose.model("Platform", PlatformSchema);

// Export the Platform model
module.exports = Platform;