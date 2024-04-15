const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(express.json());


const productsRouter = require('./routes/products');
const cartsRouter = require('./routes/carts');
const PORT = 8080;

app.use('/routes/products', productsRouter)
app.use('/routes/carts', cartsRouter)

app.listen(PORT, () => {
    console.log(`Servidor express escuchando en http://localhost:${PORT}`);
});