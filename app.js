const express = require('express');
const app = express();
const path = require('path');

let PORT = 3000

let mainRouter = require('./routers/mainRouter')

app.listen(PORT, console.log('Listen on port 3000'));

app.use(express.static("public"));

app.set('view engine', 'ejs')

app.use('/', mainRouter)


