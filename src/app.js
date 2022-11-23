//---REQUIRE'S---//
const express = require('express');
const app = express();
const path = require('path');
const mainRouter = require('./routers/mainRouter');
const productsRouter = require('./routers/productsRouter');

app.listen (3000, ()=>{
    console.log('Server Ok')
});

app.use(express.static(path.join(__dirname, '../public')));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

app.use('/', mainRouter);
app.use('/detail', productsRouter);





