const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
	// Root - Show all products
	index: (req, res) => {
		let product= products.find(product=>product.id == req.params.id);
		res.render('home', ({products}))
	},

	// Detail - Detail from one product
	detail: (req, res) => {
		let product= products.find(product=>product.id == req.params.id);
		res.render('detail', ({product}))
	},
}

module.exports = controller;