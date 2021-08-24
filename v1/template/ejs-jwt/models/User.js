// Import packages
const mongoose = require('mongoose');
const { isEmail } = require('validator');
const bcrypt = require('bcrypt');

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

// Hash passwords before storing them
userSchema.pre('save', async function (next) {

	// Generate salt
	const salt = bcrypt.genSalt();

	// Hash and update password
	this.password = bcrypt.hash(this.password, salt);
	
	// Proceed to save
	next();
});

// Make model from schema
const User = mongoose.model('user', userSchema);

// Make code available globally
module.exports = User;
