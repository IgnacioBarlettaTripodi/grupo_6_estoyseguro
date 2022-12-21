const path = require ('path');
const fs = require ('fs');

const productsFilePath = path.join(__dirname, '../../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));


let productsControllers = {

    products: (req,res) => {
        res.render('products',{products})
    },
    filter:(req,res)=> {
        let type = req.params.type
        let newProducts = products.filter(product => type == product.type)

        res.render('products',{products: newProducts})
    },
    detail: (req,res) => {
        let product = products.find(product=>product.id == req.params.id)
        res.render('product-detail-form', {product: product})
    
    },
    create: (req,res)=>{
        res.render('product-create-form')
    },
    store: (req,res)=>{

        let newProduct = {
            'id': products[products.length-1].id +1,
            'type':req.body.type,
            'name': req.body.name,
            'price': req.body.price,
            'duration': req.body.duration,
            'category': req.body.category,
            'description': req.body.description,
        };
        products.push(newProduct);
        //Ahora tenemos que volver a convertirlo en JSON para sobreescbibir el JSON

        fs.writeFileSync(productsFilePath, JSON.stringify(products,null,'\t'))

        res.render('products', {products})
    },
    edit: (req, res) => {
		let product = products.find(product => product.id == req.params.id)
		res.render('product-edit-form', {product})
    },
    update:(req,res) => {
        let productToEdit = products.find(product => product.id == req.params.id)
        let productEdited = {
			'id': productToEdit.id,
            'type': productToEdit.type,
			'name': req.body.name,
			'price': req.body.price,
			'duration': req.body.duration,
			'category': req.body.category,
			'description': req.body.description
		};
        let newProducts = products.map(product => {
			if(productToEdit.id == product.id){ 
				return product = productEdited
            }else{
                return product
            }
		})
        fs.writeFileSync(productsFilePath, JSON.stringify(newProducts,null,'\t'))

        res.render('product-detail-form', {product:productEdited})

    },
    delete: (req,res)=>{
        let id = req.params.id
        let newProducts = products.filter(product => product.id != id)

        fs.writeFileSync(productsFilePath, JSON.stringify(newProducts,null,'\t'))
        res.render('products',{products: newProducts})

    }

}

module.exports = productsControllers