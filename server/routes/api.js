const express = require('express');
const router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;

// API
router.get("/games", getGame);
router.post("/games", addGame);
router.put("/games/:id", editGame);
router.delete("/games/:id", deleteGame)
router.get("/gametypes", getGameType);
router.delete("/gametypes/:id", deleteGameType);

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

function getGame(req, res) {
  connection((db) => {
    db.collection('games')
      .find()
      .sort({date:-1})
      .toArray()
      .then((games) => {
        res.json(games);
      })
      .catch((err) => {
        handleError(res, err.message, "Failed to get games");
      });
  });
}

function addGame(req, res) {
  var newGame = req.body;

  connection((db) => {
    db.collection('games')
      .insertOne(newGame)
      .then((doc) => {
        res.status(201).json(doc.ops[0]);
      })
      .catch((err) => {
        handleError(res, err.message, "Failed to create new game");
      });
  });
}

function editGame(req, res) {
  var updateGame = req.body;
  delete updateGame._id;

  connection((db) => {
    db.collection('games')
    .updateOne({_id:new ObjectID(req.params.id)}, updateGame)
    .then((result) => {
      updateGame._id = req.params.id;
      res.status(200).json(updateGame);
    })
    .catch((err) => {
      handleError(res, err.message, "Failed to update game");
    });
  });
}

function deleteGame(req, res) {
  connection((db) => {
    db.collection('games')
    .deleteOne({_id:new ObjectID(req.params.id)})
    .then((result) => {
      res.status(200).json(req.params.id);
    })
    .catch((err) => {
      handleError(res, err.message, "Failed to delete game");
    });
  })
}

function getGameType(req, res) {
  connection((db) => {
    db.collection('gametypes')
      .find()
      .toArray()
      .then((gametypes) => {
        res.json(gametypes);
      })
      .catch((err) => {
        handleError(res, err.message, "Failed to get gametypes");
      });
  });
}

function deleteGameType(req, res) {
  connection((db) => {
    db.collection('gametypes')
      .deleteOne({_id:new ObjectID(req.params.id)})
      .then((result) => {
        res.status(200).json(req.params.id);
      })
      .catch((err) => {
        handleError(res, err.message, "Failed to delete gametype");
      });
  });
}

module.exports = router;
