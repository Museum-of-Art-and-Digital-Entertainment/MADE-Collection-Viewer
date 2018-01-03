const router = require("express").Router();
// Require controller modules
const passport = require('passport');
const controllers = require('../../controllers');

// themaid.org check for production
router.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

router.get('/auth/google/callback', passport.authenticate('google', {
  successRedirect: '/admin',
  failureRedirect: '/admin/login',
}));

router.get('/logout', function(req, res) {
  req.logout();
  res.redirect('/admin/login');
});

/* GET admin home page. */
router.get('/', controllers.admin.index);


/* GET all games with or without fuzzy search query*/
/* Search Example /api/admin/games/?title=[title to search for]*/
/* Or send query object with title paramater */
router.get('/games', controllers.admin.getAllGames);


/* GET count of all games with or without search query */
/* works the same ast the games route */
router.get('/games/count', controllers.admin.getGameCount);


/* GET all games with or without a strict name or id search*/
router.get('/platforms', controllers.admin.getPlatforms);


/* GET hit api and update database with thegamesDB.net info. */
router.get('/games/updatedb', controllers.admin.updateDB);

/* POST create a game */
router.post('/game/create', controllers.admin.createGame);

/* GET get info on a single game game with matching database id */
router.get('/game/:id', controllers.admin.getGame);

/* GET the details on a game from thegamesdb.net api */
router.get('/game/download/:id', controllers.admin.downloadGame);

/* POST update a game */
router.put('/game/update/:id', controllers.admin.updateGame);

/* POST delete a game */
router.post('/game/:id/delete', controllers.admin.deleteGame);


module.exports = router;

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated())
      return next();
  res.redirect('/admin/login');
}
