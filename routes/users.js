var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Has entrado en la pagina de usuario');
});

module.exports = router;
