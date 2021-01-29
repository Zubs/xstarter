// Import packages
const mongoose = require('mongoose');
const { isEmail } = require('validator');

// Create Schema
const userSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, "Please Provide A Name"],
	},
	email: {
		type: String,
		required: [true, "Please Provide Email"],
		unique: true,
		validate: [isEmail, "Please Provide Valid Email"]
	},
	password: {
		type: String,
		required: [true, "Please Provide Password"],
		minlength: [8, "Password Can Be At Least 8 Characters"],
		maxlength: [21, "Password Can Be Less Than 22 Characters"]
	}
});

// Make model from schema
const User = mongoose.model('user', userSchema);

// Make code available globally
module.exports = User;
