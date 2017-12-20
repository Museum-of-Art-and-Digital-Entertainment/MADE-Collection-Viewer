const router = require("express").Router();

// Require controller modules
const userController = require('../../controllers/userController');

/* GET catalog home page. */
router.get('/', userController.index);

/* GET searched/filtered games. */
router.get('/search', userController.searchGet);

/* GET game details. */
router.get('/game/:id', userController.gameGet);

module.exports = router;
