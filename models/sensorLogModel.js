const mongoose = require("mongoose");

const sensorLogSchema = new mongoose.Schema({
	ph: Number,
	gasLeak1: Number,
	gasLeak2: Number,
	gasFlow: Number,
	gasLevel: Number,

	createdAt: {
		type: Date,
		default: Date.now,
	},
});

module.exports = mongoose.model("SensorLog", sensorLogSchema);
