const express = require('express');
const router = express.Router();
const scoresCtrl = require('../../controllers/scores');
const express = require('express');
const router = express.Router();
const scoresCtrl = require('../../controllers/scores');

router.get('/', scoresCtrl.highScores);

/*---------- Protected Routes ----------*/
// Process the token for only the routes below
router.use(require('../../config/auth'));
router.post('/', scoresCtrl.create);

router.get('/', scoresCtrl.highScores);
router.post('/', scoresCtrl.create);
router.use(require('../../config/auth'));
router.post('/', checkAuth, scoresCtrl.create);

/*----- Helper Functions -----*/
function checkAuth(req, res, next) {
  if (req.user) return next();
  return res.status(401).json({msg: 'Not Authorized'});
}



function highScores(req, res) {
    console.log(req.user);
    
    // existing code below
    const scores = await Score.find({})
module.exports = router;