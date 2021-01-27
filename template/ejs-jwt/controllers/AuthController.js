/*
	All authentication routes are handled here
*/

// Display Login Page
const Login = (req, res) => {
	res.render('login', { title: "Login" });
};

// Process Login
const PostLogin = (req, res) => {
	
	// Get user details
	const { email, password } = red.body;
};

// Display Register Page
const Register = (req, res) => {
	res.render('register', { title: "Register" });
};

// Process Register
const PostRegister = (req, res) => {
	
	// Get user details
	const { name, email, password, cPassword } = req.body;
};

// Display Forgot Password Page
const ForgotPassword = (req, res) => {
	res.render('forgot-password', { title: "Forgot Password" });
};

// Process ForgotPassword
const PostForgotPassword = (req, res) => {
	// Code will go here
};

// Process Logout
const Logout = (req, res) => {
	// Code will go here
};

// Make functions global
module.exports = { Login, PostLogin, Register, PostRegister, ForgotPassword, PostForgotPassword, Logout };
