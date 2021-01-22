"use strict";

var express = require('express');

var router = express.Router();

var siteController = require('../app/controllers/SiteController');

router.get('/search', siteController.search);
router.get('/', siteController.index);
module.exports = router;