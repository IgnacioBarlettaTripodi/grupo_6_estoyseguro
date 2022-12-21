const express = require('express');
const app = express();
const path = require('path');
const methodOverride =  require('method-override'); // Pasar poder usar los métodos PUT y DELETE

const mainRouter = require('./src/routers/mainRouter');
const productsRouter = require('./src/routers/productsRouter')
const userRouter = require('./src/routers/userRouter')


app.listen (3000, ()=>{
    console.log('Server Ok')
});

app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride('_method')); // Pasar poder pisar el method="POST" en el formulario por PUT y DELETE
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


app.set('view engine', 'ejs')
app.set('views', './src/views'); // Seteo de la ubicación de la carpeta "views"

app.use('/', mainRouter)
app.use('/products', productsRouter)
app.use('/user', userRouter)


