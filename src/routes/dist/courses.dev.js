"use strict";

var express = require('express');

var router = express.Router();

var courseController = require('../app/controllers/CourseController');

router.get('/:slug', courseController.show);
module.exports = router;