// jshint esversion:6

const products = require ('./db/products');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const productsRoutes = require('./routes/productsRoutes');

app.use(bodyParser.urlencoded({extended: true}));

app.use('/products', productsRoutes);

app.get('/', (req, res) => {
  res.send('u r in teh root');
});

app.listen(3000, _ => {
  console.log('Listening on port 3000');
});