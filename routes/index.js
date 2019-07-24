let express = require('express');
let router = express.Router();



/* GET home page. */
router.get('/', function (req, res) {       
    res.render('index') 
});

router.get('/scores', function (req, res) {
    res.render('index/scores')
});

router.get('/standings', function (req, res) {
    res.render('index/standings')
});

router.get('/tickets', function (req, res) {
    res.render('index/tickets')
});


router.get('/teams', function (req, res) {
    res.render('index/teams')
});


module.exports = router;


