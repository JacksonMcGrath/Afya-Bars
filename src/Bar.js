const mongoose = require('mongoose');

const barSchema = new mongoose.Schema({
	name: {type: String, required: true},
	ingredients: {type: Array, required: true},
	user: {type: String, required: true}
})

// create model -- follow capitalization carefully

const Bar = mongoose.model('Bar', barSchema);

module.exports = Bar;