"use strict";

var newsRouter = require('./news');

var siteRouter = require('./site');

var coursesRouter = require('./courses');

function route(app) {
  app.use('/news', newsRouter);
  app.use('/courses', coursesRouter); // app.use('/search1',siteRouter)

  app.use('/', siteRouter);
}

module.exports = route;