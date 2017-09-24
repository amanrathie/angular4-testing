const express = require('express');
const router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;

// Connect
const connection = (closure) => {
    return MongoClient.connect(process.env.MONGODB_URI, (err, db) => {
        if (err) return console.log(err);

        closure(db);
    });
};

// Generic error handler used by all endpoints.
function handleError(res, reason, message, code) {
  console.log("ERROR: " + reason);
  res.status(code || 500).json({"error": message});
}


// game API

router.post("/game", (req, res) => {
  var newGame = req.body;

  connection((db) => {
    db.collection('game')
      .insertOne(newGame, (err, doc) => {
        if (err) {
          handleError(res, err.message, "Failed to create new game.");
        } else {
          res.status(201).json(doc.ops[0]);
        }
      });
  })
});

// gameType API
router.get("/gametype", (req, res) => {
  connection((db) => {
    db.collection('gametype')
      .find()
      .toArray()
      .then((gametypes) => {
          res.json(gametypes);
      })
      .catch((err) => {
          sendError(err, res);
    });
  });
});

router.delete("/gametype/:id", (req, res) => {
  connection((db) => {
    db.collection('gametype')
      .deleteOne({_id:new ObjectID(req.params.id)})
      .then((result) => {
        res.status(200).json(req.params.id);
      })
      .catch((err) => {
          sendError(err, res);
      });
  });
});

module.exports = router;
