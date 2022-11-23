const path = require ('path');

let mainControllers = {
    home: (req, res) => {
        res.render(path.resolve(__dirname, "../views/home.ejs"))
    },
    login: (req, res) => {
        res.render(path.resolve(__dirname, "../views/login.ejs"))
    },
    register: (req, res) => {
        res.render(path.resolve(__dirname, '../views/register.ejs'))
    },
    carritodecompra: (req, res) => {
        res.render(path.resolve(__dirname, '../views/carritodecompra.html'))
    },
    head: (req, res) =>{
        res.render(path.resolve(__dirname, '../views/partials/head'))
    },
    header: (req, res) => {
        res.render(path.resolve(__dirname, '../views/partials/header'))
    },
    footer: (req, res) => {
        res.render(path.resolve(__dirname, '../views/partials/footer'))
    },
}

module.exports = mainControllers