var express = require('express');
var router = express.Router();

var videoController = require('../controllers/videos_controller');
//cuidado esto habra que cambiarse

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Lista De Reproduccion'});

});


/*Get Videos page */
router.get('/videos', videoController.index);
// cuidado esto habrá que cambiarlo

module.exports = router;
