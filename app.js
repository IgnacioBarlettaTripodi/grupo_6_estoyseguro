const express = require('express');
const app = express();
const path = require('path');
const mainRouter = require('./routers/mainRouter');
const adminRouter = require('./routers/adminRouter');


app.listen (3000, ()=>{
    console.log('Server Ok')
});

app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs')

app.use('/', mainRouter)
app.use('/admin', adminRouter)


