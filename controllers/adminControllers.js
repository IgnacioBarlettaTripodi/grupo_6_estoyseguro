const path = require ('path');

let adminControllers = {
    productcreate: (req,res) => {
        res.render('product-create-form')
    },

    productdetail: (req,res) => {
        res.render('product-detail-form')
    }
}

module.exports = adminControllers