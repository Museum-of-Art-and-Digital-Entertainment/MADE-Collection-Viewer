const escapeRegex = require('../Utils').escapeRegex;
const db = require("../models");
const data = require('./dataController.js');

const makeQuery = ask => {
  let query = {}
  if (ask.title) {
    const regex = new RegExp(escapeRegex(ask.title), 'gi');
    query.title = regex;
  }
  if (ask.platform) {
    if (parseInt(ask.platform)) {
      query.platformId = parseInt(ask.platform);
    } else {
      query.platform = ask.platform;
    }
  }
  if (ask.id) {
    query.id = escapeRegex(ask.id);
  }
  if (ask._id) {
    query._id = ask._id;
  }
  if (ask.collected) {
    query.collected = ask.collected;
  }
  return query;
};

// Controller for handling the collection
module.exports = {

  index: (req, res) => {
    res.send(req.user);
    console.log("profile", req.user);
  },

  // get all games with or without search criteria
  getAllGames: (req, res) => {
    let query = makeQuery(req.query);
    const limit = parseInt(req.query.limit) || 50;
    const offset = parseInt(req.query.offset) || 0;
    const sort = (req.query.sort) ? { [req.query.sort[0]]: parseInt(req.query.sort[1]) } : { title: 1 };
    db.Game.find(query)
      .sort(sort)
      .skip(offset)
      .limit(limit)
      .then(foundGames => {
        res.json(foundGames);
      })
      .catch(err => console.log(err));
  },

  getGameCount: (req, res) => {
    let query = makeQuery(req.query);
    db.Game.find(query).count()
      .then(count => res.json(count))
      .catch(err => {
        console.log(err);
        res.sendStatus(400);
      });
  },

  // get all platforms
  getPlatforms: (req, res) => {
    let query = {};
    const sort = (req.query.sort) ? { [req.query.sort[0]]: parseInt(req.query.sort[1]) } : { alias : 1 };
    db.Platform.find(query)
      .sort(sort)
      .then(foundPlatforms => res.json(foundPlatforms))
      .catch(err => {
        console.log(err);
        res.sendStatus(400);
      });
  },

  // hit api and update database.
  updateDB: (req, res) => {
    const time = req.query.time || 4*60*60
    data.updateGamesDB(time)
      .then(result => {
        console.log('Updated game ids', result || 'none');
        if (result) {
          // res.write(`Updating ${result.length} games. It could take as long as ${result.length * 5} seconds.`);
          return new Promise(resolve => data.updateList(result, resolve));
        } else {
          return new Promise(resolve => resolve([]));
        }
      })
      .then(result => res.json(result))
      .catch(err => {
        console.log(err);
        res.sendStatus(400);
      });
  },


  // Download game info from thegamesDB.net
  downloadGame: (req, res) => {
    data.getGameData(req.params)
      .then(game => {
        console.log('downloaded', game);
        res.json(game);
      })
      .catch(err => {
        console.log(err);
        res.sendStatus(400);
      });
  },

  // create a game
  createGame: (req, res) => {
    delete req.body._id;
    delete req.body.theGamesDBId;
    const game = new db.Game(req.body);
    game.save()
      .then(game => res.json(game))
      .catch(err => {
        console.log(err)
        res.sendStatus(400)
      });
  },

  // get one game for update/delete
  getGame: (req, res) => {
    db.Game.findOne({ _id: req.params.id })
      .then(game => res.json(game))
      .catch(err => {
        console.log(err);
        res.sendStatus(400);
      });
  },

  // update a game
  updateGame: (req, res) => {
    db.Game.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
      .then(game => res.json(game))
      .catch(err => {
        console.log(err);
        res.sendStatus(400);
      });
  },

  // delete a game
  deleteGame: (req, res) => {
    res.send('NOT IMPLEMENTED: delete a game ', +req.params.id);
  },



}