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

// Response handling
let response = {
    status: 200,
    data: [],
    message: null
};

router.get("/gametype", (req, res) => {
  connection((db) => {
        db.collection('gametype')
            .find()
            .toArray()
            .then((gametypes) => {
                response.data = gametypes;
                res.json(response);
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
        response.data = req.params.id;
        res.status(200).json(response);
      })
      .catch((err) => {
          sendError(err, res);
      });
  });
});

module.exports = router;
