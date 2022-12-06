const path = require ('path');
const fs = require ('fs');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));


let productsControllers = {

    products: (req,res) => {
        res.render('products',{products})
    },
    detail: (req,res) => {
        let product = products.find(product=>product.id == req.params.id)
        res.render('product-detail-form', {product: product})
    
    },
    create: (req,res)=>{
        res.render('product-create-form')
    },
    edit: (req, res) => {
		let product = products.find(product => product.id == req.params.id)
		res.render('product-edit-form', {product})
    }
}

module.exports = productsControllers