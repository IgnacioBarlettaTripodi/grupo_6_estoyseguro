let express = require('express');
let router = express.Router();

let productsControllers = require('../controllers/productsControllers')


// OBTENER TODOS LOS PRODUCTOS
router.get('/', productsControllers.products)

// OBTENER EL DETALLE DE UN PRODUCTOS
router.get('/detail/:id', productsControllers.detail)

// CREAR UN PRODUCTO NUEVO 
router.get('/create', productsControllers.create)

// EDITAR UN PRODUCTO
router.get('/edit/:id', productsControllers.edit);




module.exports = router