const {validationResult} = require('express-validator')
const bcryptjs = require('bcryptjs')
const user = require('../models/Users')

let userControllers = {

    login: (req, res) => {
        res.render('login')
    },
    register: (req, res) => {
        res.render('register')
    },
    processRegister: (req,res) => {
        const resultValidation = validationResult(req)
        if(resultValidation.errors.length > 0){
            return res.render('register', {
                errors: resultValidation.mapped(),
                oldData: req.body
            })
        }
        let userInDB = user.findByField('email', req.body.email)

        if(userInDB){
            return res.render('register', {
                errors: {
                    email: {msg: 'Este email ya esta registrado'}
                },
                oldData: req.body
            })
        }
        let userToCreate = {
            ...req.body,
            password: bcryptjs.hashSync(req.body.password, 10),
            avatar: req.file.filename
        }
        let userCreated = user.create(userToCreate)
        res.redirect('login')
    }
}




module.exports = userControllers