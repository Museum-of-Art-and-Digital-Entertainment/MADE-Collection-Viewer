const db = require("../models");

// Controller for handling all of the games
module.exports = {

  index: (req, res) => {
      res.send('NOT IMPLEMENTED: Site Home Page');
  },
  
  // Get detail for a specific game
  gameGet: (req, res) => {
    console.log("ID", req.params.id)
    db.Game
      .findById(req.params.id)
      .then(foundGame => res.json(foundGame))
      .catch(err => res.status(422).json(err));
      // res.send('NOT IMPLEMENTED: Game detail: ' + req.params.id);
  }
};
