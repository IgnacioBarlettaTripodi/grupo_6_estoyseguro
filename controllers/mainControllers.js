const path = require ('path');

let mainControllers = {
    home: (req, res) => {
        res.render('home')
    },
    login: (req, res) => {
        res.render('login')
    },
    register: (req, res) => {
        res.render('register')
    },
    processRegister: (req,res) => {
        res.send ('viniste por Post REy')
    },
    productdetail: (req, res) => {
        res.render('productdetail')
    },
    carritodecompra: (req, res) => {
        res.render('carritodecompra')
    }
}

module.exports = mainControllers