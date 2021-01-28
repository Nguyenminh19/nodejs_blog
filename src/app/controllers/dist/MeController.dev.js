"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

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
      Promise.all([Course.find({}), Course.countDocumentsDeleted()]).then(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2),
            courses = _ref2[0],
            deletedCount = _ref2[1];

        res.render('me/store-courses', {
          deletedCount: deletedCount,
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