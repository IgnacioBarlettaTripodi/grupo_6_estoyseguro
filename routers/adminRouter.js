let express = require('express');
let router = express.Router();

let adminControllers = require('../controllers/adminControllers');

router.get('/productcreate', adminControllers.productcreate);

router.get('/productdetail', adminControllers.productdetail);

module.exports = router