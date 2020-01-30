var express = require('express');
var router = express.Router();
var EscalaController = require('../src/controllers/EscalaController');
var SearchController = require('../src/controllers/SearchController');

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express'});
});
router.post('/escala', EscalaController.store);
router.get('/escala', EscalaController.index);
router.get('/search', SearchController.index);

module.exports = router;
