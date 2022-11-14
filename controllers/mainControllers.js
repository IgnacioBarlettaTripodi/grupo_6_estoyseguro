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
    productDetail: (req, res) => {
        res.render('productDetail')
    },
    carritodecompra: (req, res) => {
        res.render('carritodecompra')
    },
    header: (req, res) => {
        res.render('header')
    },
    footer: (req, res) => {
        res.render('footer')
    }
}



module.exports = mainControllers