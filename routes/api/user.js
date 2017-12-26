const router = require("express").Router();

// Require controller modules
const controllers = require('../../controllers');

/* GET catalog home page. */
router.get('/', controllers.user.index);

/* GET searched/filtered games. */
router.get('/search', controllers.admin.getAllGames);

/* GET game details. */
router.get('/game/:id', controllers.user.gameGet);

module.exports = router;
