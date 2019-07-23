let express = require('express');
let router = express.Router();



/* GET home page. */
router.get('/', function (req, res) {       
    res.render('index') 
});

router.get('/scores', function (req, res) {
    res.render('index/scores.ejs')
});

router.get('/standings', function (req, res) {
    res.render('index/standings.ejs')
});

router.get('/tickets', function (req, res) {
    res.render('index/tickets.ejs')
});

router.get('/scores', function (req, res) {
    res.render('index/scores.ejs')
});

router.get('/teams', function (req, res) {
    res.render('index/teams.ejs')
});




module.exports = router;


