"use strict";

var express = require('express');

var router = express.Router();

var courseController = require('../app/controllers/CourseController');

router.post('/store', courseController.store);
router.get('/create', courseController.create);
router.put('/:id', courseController.update);
router.get('/:id/edit', courseController.edit);
router["delete"]('/:id', courseController.destroy);
router.get('/:slug', courseController.show);
module.exports = router;