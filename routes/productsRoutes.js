//jshint esversion:6

const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const productsModel = require('../db/products');

router.get('/', (req, res) => {
  productsModel.getAllProducts()
    .then(products => {
      console.log(products);
      res.end();
    });
});

router.get('/:id', (req, res) => {
  productsModel.getProductById(req.params.id)
    .then(products => {
      console.log(products);
    });
});

router.post('/', (req, res) => { 
  let clientPostObj = req.body;
  productsModel.createNewProduct(clientPostObj)
    .then(products => {
      console.log(products);
      res.redirect('/products');
    });
});

router.put('/:id', (req, res) => {
  productsModel.updateProductById(req.body);
  res.redirect('/products');
});

router.delete('/:id', (req, res) => {
  productsModel.deleteProductById(req.params.id)
    .then(products => {
      console.log(products);
    });
});

module.exports = router;