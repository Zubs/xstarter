// Import packages
const express = require('express');
const path = require('path');
const morgan = require('morgan');
const terminalLink = require('terminal-link');
const chalk = require('chalk');

// Import routes
const routes = require('./routes/web');

// Initiate the app
const app = express();

// Using morgan to log
app.use(morgan('dev'));

// Set Port
const PORT = process.env.PORT || 3000;

// Set view engine
app.set('view engine', 'ejs');

// Set static files
app.use(express.static(path.join(__dirname, 'public')));

// Mount routes
app.use('/', routes);

// Handle 404
app.use('*', (req, res) => {
	res.render('404');
});

// Start app
app.listen(PORT, console.log("Application Started At PORT " + PORT + "\nApplication can be found at " + terminalLink(chalk.yellow.bold('http://localhost:' + PORT), 'http://localhost:' + PORT)));
