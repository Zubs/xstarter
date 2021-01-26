// Display Landing page
const Home = (req, res) => {
	res.render('index');
};

const Dashboard = (req, res) => {
	res.render('home');
}

// Make function global
module.exports = { Home, Dashboard };
