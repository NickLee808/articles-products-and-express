//jshint esversion:6

const cn = {
    host: 'localhost',
    port: 5433,
    database: 'my-database-name',
    user: 'user-name',
    password: 'user-password'
};

const db = pgp(cn);

module.exports = db;

/*const products = require ('./db/products');
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

app.listen(3000, () => {
  console.log('Listening on port 3000');
});

module.exports = app;*/