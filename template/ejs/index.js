// Import packages
const express = require('express');

// Import routes
const routes = require('./routes/routes');

// Initiate the app
const app = express();

// Set Port
const PORT = process.env.PORT || 3000;

// Set view engine
app.set('view engine', 'ejs');

// Mount routes
app.use('/', routes);

// Start app
app.listen(PORT);
