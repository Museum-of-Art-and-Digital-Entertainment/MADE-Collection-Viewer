const db = require("../models");

// Controller for handling the collection
module.exports = {

  index = (req, res) => {
      res.send('NOT IMPLEMENTED: Admin Home Page');
  },

  // Signup Admin
  signinGet = (req, res) => {
      res.send('NOT IMPLEMENTED: Admin signin');
  },

  // Signup Admin
  signupGet = (req, res) => {
      res.send('NOT IMPLEMENTED: Admin  signup: ');
  },

  // Signup Admin
  signinPost = (req, res) => {
      res.send('NOT IMPLEMENTED: Admin signin');
  },

  // Signup Admin
  signupPost = (req, res) => {
      res.send('NOT IMPLEMENTED: Admin  signup: ');
  },

  // get all games
  gamesGet = (req, res) => {
      res.send('NOT IMPLEMENTED: Admin  signup: ');
  },

  // hit api and update database.
  updatedbPost = (req, res) => {
      res.send('NOT IMPLEMENTED: updatedb');
  },

  // create a game
  createPost = (req, res) => {
      res.send('NOT IMPLEMENTED: create game ');
  },

  // get one game for update/delete
  gamesGet = (req, res) => {
      res.send('NOT IMPLEMENTED: get game ',+ req.params.id);
  },

  // update a game
  updatePost = (req, res) => {
      res.send('NOT IMPLEMENTED: update a game',+ req.params.id);
  },

  // delete a game
  deletePost = (req, res) => {
      res.send('NOT IMPLEMENTED: delete a game ',+ req.params.id);
  },



}
