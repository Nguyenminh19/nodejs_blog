"use strict";

var express = require('express');

var morgan = require('morgan');

var path = require('path');

var handlebars = require('express-handlebars');

var app = express();
var port = 3000;

var route = require('./routes');

var db = require('./config/db'); // Connect to DB


db.connect();
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
app.set('views', path.join(__dirname, 'resourses/views')); // route init

route(app);
app.listen(port, function () {
  console.log("App listening at http://localhost:".concat(port));
});