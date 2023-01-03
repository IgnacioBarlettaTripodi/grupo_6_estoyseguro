let express = require('express');
let router = express.Router();
const authMiddleware = require('../middlewares/authMiddleware')

let productsControllers = require('../controllers/productsControllers')


// OBTENER TODOS LOS PRODUCTOS
router.get('/', productsControllers.products)
// OBTENER TODOS LOS PRODUCTOS FILTRADOS POR TIPO DE SEGURO
router.get('/filter/:type', productsControllers.filter)

// OBTENER EL DETALLE DE UN PRODUCTOS
router.get('/detail/:id', productsControllers.detail)


// CREAR UN PRODUCTO NUEVO 
router.get('/create/', authMiddleware,productsControllers.create)
router.post('/create', productsControllers.store)


// EDITAR UN PRODUCTO
router.get('/edit/:id', productsControllers.edit);
router.put('/edit/:id', productsControllers.update);

//ELIMINAR UN PRODUCTO EN PARTICULAR
router.delete('/:id', productsControllers.delete)





module.exports = router