"use strict";

var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var Course = new Schema({
  name: {
    type: String,
    maxlength: 255
  },
  description: {
    type: String,
    maxlength: 600
  },
  image: {
    type: String,
    maxlength: 255
  },
  createAt: {
    type: Date,
    "default": Date.now
  },
  updatedAt: {
    type: Date,
    "default": Date.now
  }
});
module.exports = mongoose.model('Course', Course);