// Get the required packages 
const express = require('express');
const router = express.Router();

// Import controller
const PagesController = require('../controllers/PagesController');

// Respond to /
router.get('/', PagesController.Home);

// Make code global
module.exports = router;
