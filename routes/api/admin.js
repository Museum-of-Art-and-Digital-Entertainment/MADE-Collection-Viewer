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

/* GET count of all games with or without search query */
/* works the same ast the games route */
router.get('/games/count', controllers.admin.getGameCount);

/* GET all games with or without a strict name or id search*/
router.get('/platforms', controllers.admin.getPlatforms);

/* GET hit api and update database with thegamesDB.net info. */
router.get('/games/updatedb', controllers.admin.updateDB);

/* POST create a game */
router.post('/games/create', controllers.admin.createGame);

/* GET get info on a single game game with matching database id */
router.get('/game/:id', controllers.admin.getGame);

/* GET the details on a game from thegamesdb.net api */
router.get('/game/download/:id', controllers.admin.downloadGame);

/* POST update a game */
router.put('/game/update/:id', controllers.admin.updateGame);

/* POST delete a game */
router.post('/game/:id/delete', controllers.admin.deleteGame);

module.exports = router;
