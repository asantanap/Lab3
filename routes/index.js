var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Bienvenido a mi pagina web' });
});

module.exports = router;

//var videoController = require('../controllers/videos_controller');
/*Get Videos page */
//router.get('/videos', videoController.index);


//module.exports = router;
