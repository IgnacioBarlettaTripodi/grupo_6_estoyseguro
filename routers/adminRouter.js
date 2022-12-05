let express = require('express');
let router = express.Router();

let adminControllers = require('../controllers/adminControllers');

router.get('/productedit', adminControllers.productedit)

module.exports = router