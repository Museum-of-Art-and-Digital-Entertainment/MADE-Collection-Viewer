const router = require("express").Router();
// Require controller modules
const adminController = require('../controllers/adminController');

/* GET admin home page. */
router.get('/admin', adminController.index);

/* GET admin home page - to authenticate */
router.get('/admin/signin', adminController.signinGet);

/* GET admin home page - to authenticate */
router.get('/admin/signup', adminController.signupGet);

/* POST admin home page - to authenticate */
router.post('/admin/signin', adminController.signinPost);

/* POST admin home page - to authenticate */
router.post('/admin/signup', adminController.signupPost);

/* GET get all games */
router.get('/admin/games', adminController.gamesGet);

/* POST hit api and update database. */
router.post('/admin/game/updatedb', adminController.updatedbPost);

/* POST create a game */
router.post('/admin/games/create', adminController.createPost);

/* GET get a game to update/delete */
router.get('/admin/game/:id', adminController.gameGet);

/* POST update a game */
router.post('/admin/game/:id/update', adminController.updatePost);

/* POST delete a game */
router.post('/admin/game/:id/delete', adminController.deletePost);


module.exports = router;
