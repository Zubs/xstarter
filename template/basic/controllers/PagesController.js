// Import packages
const path = require('path');

// Display Landing page
const Home = (req, res) => {
	res.sendFile(path.join(__dirname, '../views', 'index.html'));
};

// Make function global
module.exports = { Home };
