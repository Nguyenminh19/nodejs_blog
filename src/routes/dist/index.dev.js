"use strict";

var newsRouter = require('./news');

var siteRouter = require('./site');

function route(app) {
  app.use('/news', newsRouter);
  app.use('/search', siteRouter);
  app.use('/', siteRouter);
}

module.exports = route;