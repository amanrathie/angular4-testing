const express = require('express');
const router = express.Router();

router.get("/gametype", (req, res) => {
    var gameTypes = [
        { id: 1, name: 'Tournament' },
        { id: 2, name: 'Cash Game' },
        { id: 3, name: 'Other' }
    ];

    res.send(gameTypes);
});

module.exports = router;
