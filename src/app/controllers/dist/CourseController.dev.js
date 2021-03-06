"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Course = require('../models/Course');

var _require = require('../../util/mongoose'),
    mongooseToObject = _require.mongooseToObject;

var _require2 = require('express'),
    query = _require2.query;

var CourseController =
/*#__PURE__*/
function () {
  function CourseController() {
    _classCallCheck(this, CourseController);
  }

  _createClass(CourseController, [{
    key: "show",
    // [GET] /Courses/:slug
    value: function show(req, res, next) {
      Course.findOne({
        slug: req.params.slug
      }).then(function (course) {
        res.render('courses/show.hbs', {
          course: mongooseToObject(course)
        });
      })["catch"](next);
    } // [GET] /courses/create

  }, {
    key: "create",
    value: function create(req, res, next) {
      res.render('courses/create');
    } // [GET] /courses/:id/edit

  }, {
    key: "edit",
    value: function edit(req, res, next) {
      Course.findById(req.params.id).then(function (course) {
        res.render('courses/edit', {
          course: mongooseToObject(course)
        });
      })["catch"](next);
    } // [POSTT] /courses/store

  }, {
    key: "store",
    value: function store(req, res, next) {
      var formdata = req.body;
      formdata.image = "https://img.youtube.com/vi/".concat(req.body.videoId, "/sddefault.jpg");
      var course = new Course(formdata);
      course.save().then(function () {
        return res.redirect("/");
      })["catch"](next);
    } // [PUT] /courses/_id

  }, {
    key: "update",
    value: function update(req, res, next) {
      Course.updateOne({
        _id: req.params.id
      }, req.body).then(function () {
        return res.redirect('/me/stored/courses');
      })["catch"](next);
    } // [DELETE] /course/_id

  }, {
    key: "destroy",
    value: function destroy(req, res, next) {
      Course["delete"]({
        _id: req.params.id
      }).then(function () {
        return res.redirect('back');
      })["catch"](next);
    } // [PATCH] /courses/:id/restore

  }, {
    key: "restore",
    value: function restore(req, res, next) {
      Course.restore({
        _id: req.params.id
      }).then(function () {
        return res.redirect('back');
      })["catch"](next);
    } // [PATCH] /courses/:id/forceDestroy    

  }, {
    key: "forceDestroy",
    value: function forceDestroy(req, res, next) {
      Course.deleteOne({
        _id: req.params.id
      }).then(function () {
        return res.redirect('back');
      })["catch"](next);
    } // [POST] /courses/handle-form-action 

  }, {
    key: "handleFormAction",
    value: function handleFormAction(req, res, next) {
      switch (req.body.action) {
        case 'delete':
          Course["delete"]({
            _id: {
              $in: req.body.courseIds
            }
          }).then(function () {
            return res.redirect('back');
          })["catch"](next);
          break;

        default:
          res.json({
            message: 'Action is invalid'
          });
      }
    }
  }]);

  return CourseController;
}();

module.exports = new CourseController();