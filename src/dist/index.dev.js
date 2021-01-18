"use strict";

var express = require('express');

var morgan = require('morgan');

var path = require('path');

var handlebars = require('express-handlebars');

var app = express();
var port = 3000;
app.use(express["static"](path.join(__dirname, 'public')));
app.use(express.urlencoded({
  extended: true
}));
app.use(express.json()); // HTTP logger
// app.use(morgan('combined'));
// template engine

app.engine('hbs', handlebars({
  extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resourses/views')); // route

app.get('/', function (req, res) {
  res.render('home');
});
app.get('/news', function (req, res) {
  res.render('news');
});
app.get('/search', function (req, res) {
  res.render('search');
});
app.post('/search', function (req, res) {
  console.log(req.body);
  res.send();
});
app.listen(port, function () {
  console.log("Example app listening at http://localhost:".concat(port));
});