"use strict";

var express = require('express');

var router = express.Router();

var courseController = require('../app/controllers/CourseController');

router.post('/store', courseController.store);
router.get('/create', courseController.create);
router.put('/:id', courseController.update);
router.patch('/:id/restore', courseController.restore);
router.get('/:id/edit', courseController.edit);
router.post('/handle-form-action', courseController.handleFormAction);
router["delete"]('/:id', courseController.destroy);
router["delete"]('/:id/force', courseController.forceDestroy);
router.get('/:slug', courseController.show);
module.exports = router;