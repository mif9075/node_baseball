let express = require('express');
let router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/scores', function (req, res, next) {
    res.render('scores/scores')
})

module.exports = router;
