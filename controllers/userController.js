const db = require("../models");

// Controller for handling all of the games
module.exports = {

  index: (req, res) => {
      res.send('NOT IMPLEMENTED: Site Home Page');
  },

  // Get list of searched games
  searchGet: (req, res) => {
    db.Game
    console.log("_______");
      console.log("request",req)
      .find(req.query)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
      // res.send('NOT IMPLEMENTED: Search Game');
  },

  // Get detail for a specific game
  gameGet: (req, res) => {
    db.Game
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
      // res.send('NOT IMPLEMENTED: Game detail: ' + req.params.id);
  }
};
