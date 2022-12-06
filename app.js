const express = require('express');
const app = express();
const path = require('path');
const methodOverride =  require('method-override'); // Pasar poder usar los métodos PUT y DELETE

const mainRouter = require('./routers/mainRouter');
const adminRouter = require('./routers/adminRouter');
const productsRouter = require('./routers/productsRouter')


app.listen (3000, ()=>{
    console.log('Server Ok')
});

app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride('_method')); // Pasar poder pisar el method="POST" en el formulario por PUT y DELETE
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


app.set('view engine', 'ejs')

app.use('/', mainRouter)
app.use('/admin', adminRouter)
app.use('/products', productsRouter)


