let express = require('express');
let router = express.Router();

let adminControllers = require('../controllers/adminControllers');

router.get('/', adminControllers.home)


module.exports = router