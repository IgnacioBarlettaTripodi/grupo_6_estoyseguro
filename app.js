const express = require('express');
const app = express();

let PORT = 3000

const path = require('path');

app.listen(PORT, console.log('Listen on port 3000'));

app.use(express.static("public"));

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname,"./views/home.html"))
})
app.get('/header', (req, res) => {
    res.sendFile(path.resolve(__dirname,"./views/header.html"))
})
