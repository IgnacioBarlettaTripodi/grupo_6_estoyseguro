let express = require('express');
let router = express.Router();

let mainControllers = require('../controllers/mainControllers')

router.get('/', mainControllers.home)
router.get('/login', mainControllers.login)
router.get('/register', mainControllers.register)
router.get('/carritodecompra', mainControllers.carritodecompra)



module.exports = router