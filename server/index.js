const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
const productController = require('./product_controller')
require('dotenv').config();
const app = express();
app.use(bodyParser.json());

massive(process.env.CONNECTION_STRING).then(database =>{
    app.set('db', database);
}).catch(error=>{
    console.error('error connecting to database', error)
})

app.get('/api/products', productController.getAll);
app.get('/api/products/:product_id', productController.getOne);
app.post('/api/products', productController.create);
app.put('/api/products/:product_id', productController.update);
app.delete('/api/products/:product_id', productController.delete);



const SERVER_PORT = 3000;
app.listen(SERVER_PORT, ()=>{
    console.log(`I am listening on port ${SERVER_PORT} 👾👾👾 `)
})
