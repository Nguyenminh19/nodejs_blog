"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Course = require('../models/Course');

var _require = require('../../util/mongoose'),
    mutipleMongooseToOject = _require.mutipleMongooseToOject;

var _require2 = require('node-sass'),
    NULL = _require2.NULL;

var MeController =
/*#__PURE__*/
function () {
  function MeController() {
    _classCallCheck(this, MeController);
  }

  _createClass(MeController, [{
    key: "storeCourses",
    // [GET] /me/stored/courses
    value: function storeCourses(req, res, next) {
      Course.find({}).then(function (courses) {
        res.render('me/store-courses', {
          courses: mutipleMongooseToOject(courses)
        });
      })["catch"](next);
    } // [GET] /me/trash/courses

  }, {
    key: "trashCourses",
    value: function trashCourses(req, res, next) {
      Course.findDeleted({}).then(function (courses) {
        res.render('me/trash-courses', {
          courses: mutipleMongooseToOject(courses)
        });
      })["catch"](next);
    }
  }]);

  return MeController;
}();

module.exports = new MeController();