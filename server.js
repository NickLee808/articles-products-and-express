// jshint esversion:6

const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('hello world');
});

app.listen(3000, _ => {
  console.log('Listening on port 3000');
});