var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'MCFreelancer' });
});

router.use('/auth', require('./auth').router);

exports.router = router;