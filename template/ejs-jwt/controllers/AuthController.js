/*
	All authentication routes are handled here
*/

// Display Login Page
const Login = (req, res) => {
	res.render('login');
};

// Process Login
const PostLogin = (req, res) => {
	// Code will come here
};

// Display Register Page
const Register = (req, res) => {
	res.render('register');
};

// Process Register
const PostRegister = (req, res) => {
	// Code will come here
};

// Display Forgot Password Page
const ForgotPassword = (req, res) => {
	res.render('forgot-password');
};

// Process ForgotPassword
const PostForgotPassword = (req, res) => {
	// Code will go here
};


// Make functions global
module.exports = { Login, PostLogin, Register, PostRegister, ForgotPassword, PostForgotPassword };
