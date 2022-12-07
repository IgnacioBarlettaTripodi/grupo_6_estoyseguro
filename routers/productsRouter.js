let express = require('express');
let router = express.Router();

let productsControllers = require('../controllers/productsControllers')


// OBTENER TODOS LOS PRODUCTOS
router.get('/', productsControllers.products)

// OBTENER EL DETALLE DE UN PRODUCTOS
router.get('/detail/:id', productsControllers.detail)


// CREAR UN PRODUCTO NUEVO 
router.get('/create/', productsControllers.create)
router.post('/create', productsControllers.store)


// EDITAR UN PRODUCTO
router.get('/edit/:id', productsControllers.edit);
router.put('/edit/:id', productsControllers.update);

//ELIMINAR UN PRODUCTO EN PARTICULAR
router.delete('/:id', productsControllers.delete)





module.exports = router