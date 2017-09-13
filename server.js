// server.js
const express = require('express');
const app = express();
// Run the app by serving the static files
// in the dist directory
app.use(express.static(__dirname + '/dist'));
// Start the app by listening on the default
// Heroku port
app.listen(process.env.PORT || 4200);

app.get("/api/gametype", function(req, res) {
    var gameTypes = [
        { id: 1, name: 'Tournament' },
        { id: 2, name: 'Cash Game' },
        { id: 3, name: 'Other' }
    ];

    res.send(gameTypes);
});
