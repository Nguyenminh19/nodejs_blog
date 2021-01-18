"use strict";

var express = require('express');

var morgan = require('morgan');

var app = express();
var port = 3000;
app.use(morgan('combined')); // route

app.get('/', function (req, res) {
  res.send('Hello World!');
});
app.listen(port, function () {
  console.log("Example app listening at http://localhost:".concat(port));
});