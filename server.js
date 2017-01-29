//jshint esversion:6

/*const cn = {
    host: 'localhost',
    port: 5433,
    database: 'my-database-name',
    user: 'user-name',
    password: 'user-password'
};

const db = pgp(cn);

module.exports = db;
*/

const express = require('express');
const bodyParser = require('body-parser');
const products = require ('./db/products');
const app = express();
const PORT = process.env.PORT || 3000;
const productsRoutes = require('./routes/productsRoutes');
const articlesRoutes = require('./routes/articlesRoutes');

app.use(bodyParser.urlencoded({extended: true}));

app.use('/products', productsRoutes);

app.use('/articles', articlesRoutes);

app.get('/', (req, res) => {
  res.send('u r in teh root');
});

if(!module.parent){
  app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });
}

module.exports = app;