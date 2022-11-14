let express = require('express');
let router = express.Router();

let mainControllers = require('../controllers/mainControllers')

router.get('/', mainControllers.home)
router.get('/login', mainControllers.login)
router.get('/register', mainControllers.register)
router.get('/productDetail', mainControllers.productDetail)
router.get('/carritodecompra', mainControllers.carritodecompra)
router.get('/register', mainControllers.header)
router.get('/register', mainControllers.footer)


module.exports = router