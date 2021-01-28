"use strict";

var express = require('express');

var router = express.Router();

var meController = require('../app/controllers/meController');

router.get('/stored/courses', meController.storeCourses);
router.get('/trash/courses', meController.trashCourses);
module.exports = router;