let express = require('express');
let router = express.Router();

const guestMiddleware = require('../middlewares/guestMiddleware')
const authMiddleware = require('../middlewares/authMiddleware')


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
let userControllers = require('../controllers/userControllers');
const { route } = require('express/lib/application');


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
router.get('/login', guestMiddleware,userControllers.login)

// PROCESAMIENTO DEL LOGIN
router.post('/login', userControllers.processLogin)

// PERFIL DEL USUARIO
router.get('/userProfile',authMiddleware, userControllers.profile)

// FORMULARIO DE REGISTRO
router.get('/register', guestMiddleware, userControllers.register)

// PROCESAMIENTO DEL FORMULARIO DE REGISTRO
router.post('/register', uploadFile.single('avatar'), validations ,userControllers.processRegister)

// LOGOUT
router.get('/logout',userControllers.logout)


module.exports = router