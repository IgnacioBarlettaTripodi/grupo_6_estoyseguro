const path = require ('path');

let adminControllers = {
    productedit: (req,res) => {
        res.render('product-create-form')
    }
}

module.exports = adminControllers