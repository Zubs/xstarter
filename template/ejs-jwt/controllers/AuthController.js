/*
	All authentication routes are handled here
*/

// Import Model
const User = require('../models/User');

// Error Handler
const handleError = (errors) => {

	// Define object to be returned
	let error = {
		email: "",
		password: "",
		name: ""
	};

	// Duplicate Email
	if (errors.code === 11000) {

		// Set email message
		error.email = "Email Is Taken Already";

		// Exit function
		return error;
	}

	// Be sure we're handling user validation errors
	if (errors.message.includes('user validation failed')) {

		// Loop over errors
		Object.values(errors.errors).forEach(({ properties }) => {

			// Set error to appropriate field
			error[properties.path] = properties.message;
		})
	} else {};

	return error;
};

// Display Login Page
const Login = (req, res) => {
	res.render('login', { title: "Login" });
};

// Process Login
const PostLogin = async (req, res) => {
	
	// Get user details
	const { email, password } = req.body;

	// Try log user in
	try {
		
		const user = await; //
	} catch(e) {
		// statements
		console.log(e);
	}
};

// Display Register Page
const Register = (req, res) => {
	res.render('register', { title: "Register" });
};

// Process Register
const PostRegister = async (req, res) => {
	
	// Get user details
	const { name, email, password, cPassword } = req.body;

	// Try create a new user
	try {
		
		// Create the user
		const user = await User.create({ name, email, password });

		// Send response
		res.status(201).json(user);
	} catch(error) {

		// Handle error
		const errors = handleError(error);
		res.status(400).json({ errors });
	}
};

// Display Forgot Password Page
const ForgotPassword = (req, res) => {
	res.render('forgot-password', { title: "Forgot Password" });
};

// Process ForgotPassword
const PostForgotPassword = (req, res) => {
	
	// Get user details 
	const { email } = req.body;
};

// Process Logout
const Logout = (req, res) => {
	// Code will go here
};

// Make functions global
module.exports = { Login, PostLogin, Register, PostRegister, ForgotPassword, PostForgotPassword, Logout };
