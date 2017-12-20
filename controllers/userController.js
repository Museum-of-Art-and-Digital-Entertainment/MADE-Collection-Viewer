const db = require("../models");

// Controller for handling all of the games
module.exports = {

  index = (req, res) => {
      res.send('NOT IMPLEMENTED: Site Home Page');
  },

  // Display list of all books
  searchGet = (req, res) => {
      res.send('NOT IMPLEMENTED: Search Game');
  },

  // Display detail page for a specific book
  gameGet = (req, res) => {
      res.send('NOT IMPLEMENTED: Game detail: ' + req.params.id);
  }

};
