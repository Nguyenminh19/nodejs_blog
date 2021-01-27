"use strict";

var newsRouter = require('./news');

var siteRouter = require('./site');

var coursesRouter = require('./courses');

var meRouter = require('./me');

function route(app) {
  app.use('/news', newsRouter);
  app.use('/courses', coursesRouter);
  app.use('/me', meRouter); // app.use('/search1',siteRouter)

  app.use('/', siteRouter);
}

module.exports = route;