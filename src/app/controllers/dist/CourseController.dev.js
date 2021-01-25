"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Course = require('../models/Course');

var _require = require('../../util/mongoose'),
    mongooseToObject = _require.mongooseToObject;

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
    } // [POSTT] /courses/store

  }, {
    key: "store",
    value: function store(req, res, next) {
      var formdata = req.body;
      formdata.image = "https://img.youtube.com/vi/".concat(req.body.videoId, "/sddefault.jpg");
      var course = new Course(formdata);
      course.save().then(function () {
        return res.redirect("/");
      })["catch"](function (error) {});
    }
  }]);

  return CourseController;
}();

module.exports = new CourseController();