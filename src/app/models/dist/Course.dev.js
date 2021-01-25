"use strict";

var mongoose = require('mongoose');

var slug = require('mongoose-slug-generator');

var Schema = mongoose.Schema;
mongoose.plugin(slug);
var Course = new Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    maxlength: 600
  },
  image: {
    type: String,
    maxlength: 255
  },
  videoId: {
    type: String,
    required: true
  },
  level: {
    type: String,
    required: true
  },
  slug: {
    type: String,
    slug: 'name',
    unique: true
  }
}, {
  timestamps: true
});
module.exports = mongoose.model('Course', Course);