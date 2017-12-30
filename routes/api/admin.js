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

router.get('/games/count',  controllers.admin.getGameCount);

/* GET all games with or without a strict name or id search*/
router.get('/platforms', controllers.admin.getPlatforms);

/* POST hit api and update database. */
router.post('/game/updatedb', controllers.admin.updateDB);

/* POST create a game */
router.post('/games/create', controllers.admin.createGame);

/* GET get a game to update/delete */
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
