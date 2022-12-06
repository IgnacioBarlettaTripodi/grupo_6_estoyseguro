let express = require('express');
let router = express.Router();

let adminControllers = require('../controllers/adminControllers');

router.get('/productcreate', adminControllers.create);

router.get('/productdetail/:id/', adminControllers.productdetail);

module.exports = router