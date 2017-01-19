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
  res.redirect('/products');
});

router.put('/:id', (req, res) => {
  productsStore.updateProductById(req.body);
  res.redirect('/products');
});

router.delete('/:id', (req, res) => {
  productsStore.deleteProductById(req.body);
  res.redirect('/products');
});

module.exports = router;