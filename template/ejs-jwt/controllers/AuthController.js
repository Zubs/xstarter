/*
	All authentication routes are handled here
*/

// Import Model
const User = require('../models/User');

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
	} catch(e) {

		// Log error
		console.log(e);
		res.status(400).send("Error, Unable To Create User At This Time");
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
