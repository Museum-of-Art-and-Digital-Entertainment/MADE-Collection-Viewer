const escapeRegex = require('../Utils').escapeRegex;
const db = require("../models");

// Controller for handling the collection
module.exports = {

  index: (req, res) => {
      res.send('NOT IMPLEMENTED: Admin Home Page');
  },

  // Signup Admin
  signinGet: (req, res) => {
      res.send('NOT IMPLEMENTED: Admin signin');
  },

  // Signup Admin
  signupGet: (req, res) => {
      res.send('NOT IMPLEMENTED: Admin  signup: ');
  },

  // Signup Admin
  signinPost: (req, res) => {
      res.send('NOT IMPLEMENTED: Admin signin');
  },

  // Signup Admin
  signupPost: (req, res) => {
      res.send('NOT IMPLEMENTED: Admin  signup: ');
  },

  // get all games with or without search criteria
  getAllGames: (req, res) => {
    let query = {};
    if (req.query.title) {
       const regex = new RegExp(escapeRegex(req.query.title), 'gi');
       query.title = regex;
    }
    if (req.query.id) {
      query.id = escapeRegex(id);
    }
    if (req.query._id) {
      query._id = _id; 
    }
    const limit = parseInt(req.query.limit) || 50;
    const offset = parseInt(req.query.offset) || 0;
    db.Game.find(query)
        .skip(offset)
        .limit(limit)
        .then(foundGames => {
            res.json(foundGames);
        })
        .catch(err => console.log(err));
  },

  // get all platforms
  getPlatforms: (req, res) => {
    let query = {};
    if (req.query.name) {
      query.name = req.query.name; 
    }
    if (req.query.id) {
      query.id = req.query.title;
    }
    db.Platform.find(query)
      .then(foundPlatforms => res.json(foundPlatforms))
      .catch(err => {
        console.log(err)
        res.sendStatus(400); 
      });
  },

  // hit api and update database.
  updateDB: (req, res) => {
      res.send('NOT IMPLEMENTED: updatedb');
  },

  // create a game
  createGame: (req, res) => {
      res.send('NOT IMPLEMENTED: create game ');
  },

  // get one game for update/delete
  getGame: (req, res) => {
      res.send('NOT IMPLEMENTED: get game ',+ req.params.id);
  },

  // update a game
  updateGame: (req, res) => {
      res.send('NOT IMPLEMENTED: update a game',+ req.params.id);
  },

  // delete a game
  deleteGame: (req, res) => {
      res.send('NOT IMPLEMENTED: delete a game ',+ req.params.id);
  },



}
