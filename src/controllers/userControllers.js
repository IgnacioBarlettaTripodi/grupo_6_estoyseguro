const { validationResult, buildCheckFunction } = require('express-validator')
const bcryptjs = require('bcryptjs')
const user = require('../models/Users')

let userControllers = {

    login: (req, res) => {
        res.render('login')
    },
    processLogin: (req, res) => {
        let userToLogin = user.findByField('email', req.body.email)
        if (userToLogin) {
            let isOkThePassword = bcryptjs.compareSync(req.body.password, userToLogin.password)
            if (isOkThePassword) {
                req.session.userLogged = userToLogin
                // el siguiente if hace que si el usuario tildo la opcion de recordar usuario, cuando cierra el navegador sigue en sesion
                if(req.body.recordar_usuario){
                    res.cookie('userEmail', req.body.email,{maxAge:(1000*60)*2})
                }
                res.redirect('userProfile')
            }else{
            res.render('login', {
                errors: {
                    email: {
                        msg: 'Las credenciales son invalidas'
                    }
                }
            })}
        } else {
            res.render('login', {
                errors: {
                    email: {
                        msg: 'No se encuentra el email registrado en la base de datos'
                    }
                }
            })
        }
    },
    profile: (req, res) => {
        res.render('userProfile', { user: req.session.userLogged })
    },
    register: (req, res) => {
        res.render('register')
    },
    processRegister: (req, res) => {
        const resultValidation = validationResult(req)
        if (resultValidation.errors.length > 0) {
            return res.render('register', {
                errors: resultValidation.mapped(),
                oldData: req.body
            })
        }
        let userInDB = user.findByField('email', req.body.email)

        if (userInDB) {
            return res.render('register', {
                errors: {
                    email: { msg: 'Este email ya esta registrado' }
                },
                oldData: req.body
            })
        } else {
            let userToCreate = {
                ...req.body,
                password: bcryptjs.hashSync(req.body.password, 10),
                avatar: req.file.filename
            }
        }
        let userCreated = user.create(userToCreate)
        res.redirect('login')
    },
    logout: (req,res)=>{
        res.clearCookie('userEmail')
        req.session.destroy()
        res.redirect('/')
    }
}




module.exports = userControllers