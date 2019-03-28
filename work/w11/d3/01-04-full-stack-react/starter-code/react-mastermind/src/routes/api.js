var express = require('express');
var router = express.Router();
var scoresCtrl = require('../controllers/scores');

router.post('/scores', scoresCtrl.create);
// use 'limit' querystring 
router.get('/highscores', scoresCtrl.highScores);

module.exports = router;