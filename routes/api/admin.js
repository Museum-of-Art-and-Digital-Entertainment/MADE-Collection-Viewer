const router = require("express").Router();
// Require controller modules
const controllers = require('../../controllers');

/* GET admin home page. */
router.get('/', controllers.admin.index);

/* GET admin home page - to authenticate */
router.get('/signin', controllers.admin.signinGet);

/* GET admin home page - to authenticate */
router.get('/signup', controllers.admin.signupGet);

/* POST admin home page - to authenticate */
router.post('/signin', controllers.admin.signinPost);

/* POST admin home page - to authenticate */
router.post('/signup', controllers.admin.signupPost);

/* GET all games with or without fuzzy search query*/
/* Search Example /api/admin/games/?title=[title to search for]*/
/* Or send query object with title paramater */
router.get('/games', controllers.admin.getAllGames);

/* POST hit api and update database. */
router.post('/game/updatedb', controllers.admin.updateDB);

/* POST create a game */
router.post('/games/create', controllers.admin.createGame);

/* GET get a game to update/delete */
router.get('/game/:id', controllers.admin.getGame);

/* POST update a game */
router.post('/game/:id/update', controllers.admin.updateGame);

/* POST delete a game */
router.post('/game/:id/delete', controllers.admin.deleteGame);


module.exports = router;
