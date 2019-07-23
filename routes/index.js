let express = require('express');
let router = express.Router();



/* GET home page. */
router.get('/', function (req, res) {       
    res.render('index') 
});

router.get('/scores', function (req, res) {
    res.render('scores/scores.ejs')
});

module.exports = router;


