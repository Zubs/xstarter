// Get the required packages 
const express = require('express');
const router = express.Router();

// Import controllers
const PagesController = require('../controllers/PagesController');
const AuthController = require('../controllers/AuthController');

// Respond to /
router.get('/', PagesController.Home);

// Respond to /home
router.get('/home', PagesController.Dashboard);

// Respond to /login
router.get('/login', AuthController.Login);

// Respond to /register
router.get('/register', AuthController.Register);

// Respond to /forgot-password
router.get('/forgot-password', AuthController.ForgotPassword);

// Handle post to /login
router.post('/login', AuthController.PostLogin);

// Handle post to /register
router.post('/register', AuthController.PostRegister);

// Handle post to /forgot-password
router.post('/forgot-password', AuthController.PostForgotPassword);

// Make code global
module.exports = router;
