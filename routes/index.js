let express = require('express');
let router = express.Router();



/* GET home page. */
router.get('/', function (req, res) {       
    res.render('index') 
});

router.get('/scores', function (req, res) {
    res.render('index')
});

router.get('/statcast', function (req, res) {
    res.render('index/statcast')
});

router.get('/tickets', function (req, res) {
    res.render('index/tickets')
});


router.get('/teams', function (req, res) {
    res.render('index/teams')
});


module.exports = router;


