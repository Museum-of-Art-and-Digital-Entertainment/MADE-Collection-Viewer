const db = require("../models");

// Controller for handling all of the games
module.exports = {

  index: (req, res) => {
      res.send('NOT IMPLEMENTED: Site Home Page');
  },

  // Get list of searched games
  searchGet: (req, res) => {
      res.send('NOT IMPLEMENTED: Search Game');
  },

  // Get detail for a specific game
  gameGet: (req, res) => {
      res.send('NOT IMPLEMENTED: Game detail: ' + req.params.id);
  }

};
