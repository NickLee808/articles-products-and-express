//jshint esversion:6

const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const articlesStore = require('../db/articles');

router.post('/articles', (req, res) => {
  let clientPostObj = req.body;
  console.log(clientPostObj);
});

module.exports = router;