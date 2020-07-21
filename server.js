//Passport
const passport = require("./config/passport");

//Env variables
const path = require('path');
const PORT = process.env.PORT || 3001;

//Routes
const routes = require('./routes');
const db = require('./models');

//Express
const express = require('express');
const app = express();

const session = require('express-session');

//Session and error handling scripts from boilerplate
const initSession = require('./scripts/initSession');
const errorHandler = require('./scripts/errorHandler');

//Sessions
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
//Secret key for session
app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
//Passport
app.use(passport.initialize());
app.use(passport.session());

// Serve static assets
if (process.env.NODE_ENV === 'production') {
	app.use(express.static('client/build'));
}

// API routes.
app.use(routes);

// Send every "lost" request to the React app.
// !Define any API routes before this runs.
app.get('*', function (req, res) {
	res.sendFile(path.join(__dirname, './client/build/index.html'));
});

// Error handler from boilerplate
app.use((err, req, res, next) => errorHandler(err, req, res, next));

//Sync database

db.sequelize.sync().then(async () => {
	console.log('connected');
	app.listen(PORT, () => {
		console.log(`\n🌎 ==> API server now on http://localhost:${PORT}\n`);
	});
});
