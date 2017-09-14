// server.js
const express = require('express');
const bodyParser = require('body-parser');
var path = require("path");
const app = express();

// Parsers
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

// Run the app by serving the static files
// in the dist directory
app.use(express.static(__dirname + '/dist'));

const api = require('./server/routes/api');

// API location
app.use('/api', api);

// Send all other requests to the Angular app
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});

// Start the app by listening on the default
// Heroku port
app.listen(process.env.PORT || 3000);
