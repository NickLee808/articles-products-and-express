//jshint esversion:6

const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const productsStore = require('../db/products');

router.get('/', (req, res) => {
  res.send(productsStore.getAllProducts());
  console.log('hi');
});

router.post('/', (req, res) => { 
  let clientPostObj = req.body;
  productsStore.createNewProduct(clientPostObj);
  console.log('clientPostObj', clientPostObj);
  res.redirect('/products');
});

router.put('/', (req, res) => {
  res.redirect('/products/:id');
});

module.exports = router;