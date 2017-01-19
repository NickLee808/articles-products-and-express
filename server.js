//jshint esversion:6

const products = require ('./db/products');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const productsRoutes = require('./routes/productsRoutes');
const articlesRoutes = require('./routes/articlesRoutes');

app.use(bodyParser.urlencoded({extended: true}));

app.use('/products', productsRoutes);

app.use('/articles', articlesRoutes);

app.get('/', (req, res) => {
  res.send('u r in teh root');
});

/*app.post('/testRoute', (req, res) => {
  res.send(req.body.name);
});*/

app.listen(3000, () => {
  console.log('Listening on port 3000');
});

module.exports = app;