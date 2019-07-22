let express = require('express');
let router  = express.Router();

let Cart    = require('./models/Cart');
let User    = require('../users/models/User');

let cartController = require('./controllers/cartController');

router.get('/', cartController.getUserShoppingCart);

router.post('/product', cartController.addProductToCart);

router.delete('/remove', cartController.removeProduct);

module.exports = router;
