//jshint esversion:6

const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const productsStore = require('../db/products');

router.post('/', (req, res) => { 
  let clientPostObj = req.body;
  productsStore.createNewProduct(clientPostObj);
  res.send('u r in teh routes');
});

module.exports = router;