let express = require('express');
let router = express.Router();

const path = require('path')
const multer = require('multer')

const {body} = require('express-validator')

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './public/images/avatars')
    },
    filename: (req, file, cb) => {

        let fileName = file.fieldname + '-' + Date.now() + path.extname(file.originalname)
        cb(null, fileName)
    }
})
const uploadFile = multer({ storage: storage })
let userControllers = require('../controllers/userControllers')


const validations = [
    body('name').notEmpty().withMessage('Tienes que escribir un nombre'),
    body('tax').notEmpty().withMessage('Tienes que escribir un documento'),
    body('country').notEmpty().withMessage('Tienes que ingresar un pais'),
    body('phone').notEmpty().withMessage('Tienes que ingresar un numero de telefono'),
    body('email').notEmpty().withMessage('Tienes que escribir un email').bail()
                 .isEmail().withMessage('Debes escribir una direccion valida'),
    body('password').notEmpty().withMessage('Tienes que escribir una contrasena'),
    body('avatar').custom((value,{req})=>{
        let file = req.file
        if(!file){
            throw new Error ('Tienes que subir una imagen')
        }
        return true
    })
]

// FORMULARIO DE LOGIN
router.get('/login', userControllers.login)

// FORMULARIO DE REGISTRO
router.get('/register', userControllers.register)

// PROCESAMIENTO DEL FORMULARIO DE REGISTRO
router.post('/register', uploadFile.single('avatar'), validations ,userControllers.processRegister)


module.exports = router