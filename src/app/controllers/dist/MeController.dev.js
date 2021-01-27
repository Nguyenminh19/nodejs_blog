"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Course = require('../models/Course');

var _require = require('../../util/mongoose'),
    mutipleMongooseToOject = _require.mutipleMongooseToOject;

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
      Course.find({}) //  .then(courses => {
      //     res.render('me/store-courses', {
      //      courses: mutipleMongooseToOject(courses)
      //  })
      .then(function (courses) {
        res.render('me/store-courses', {
          courses: mutipleMongooseToOject(courses)
        });
      })["catch"](next);
    }
  }]);

  return MeController;
}();

module.exports = new MeController();