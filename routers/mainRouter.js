let express = require('express');
let router = express.Router();

let mainControllers = require('../controllers/mainControllers')

router.get('/', mainControllers.home)

router.get('/login', mainControllers.login)

router.get('/register', mainControllers.register)
router.post('/register', mainControllers.processRegister) // Esta todavia no hace nada


router.get('/productdetail', mainControllers.productdetail)

router.get('/carritodecompra', mainControllers.carritodecompra)


// router.use('/products', productsRouter)
// router.use('/users', usersRouter)
// router.use('/admin', adminRouter)


module.exports = router