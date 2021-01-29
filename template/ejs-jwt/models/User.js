// Import packages
const mongoose = require('mongoose');

// Create Schema
const userSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, "Please Provide A Name"],
	},
	email: {
		type: String,
		required: [true, "Please Provide Email"],
		unique: [true, "Email Is Taken Already"],
		validate: [() => {}, "Please Provide Valid Email"]
	},
	password: {
		type: String,
		required: [true, "Please Provide Password"],
		minLength: [8, "Password Can Be At Least 8 Characters"],
		maxLength: [21, "Password Can Be Less Than 22 Characters"]
	}
});

// Make model from schema
const User = mongoose.model('user', userSchema);

// Make code available globally
module.exports = User;
