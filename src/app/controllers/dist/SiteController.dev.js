"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Course = require('../models/Course');

var _require = require('../../util/mongoose'),
    mutipleMongooseToOject = _require.mutipleMongooseToOject;

var SiteController =
/*#__PURE__*/
function () {
  function SiteController() {
    _classCallCheck(this, SiteController);
  }

  _createClass(SiteController, [{
    key: "index",
    // [GET] /
    value: function index(req, res, next) {
      Course.find({}).then(function (courses) {
        res.render('home', {
          courses: mutipleMongooseToOject(courses)
        });
      })["catch"](next);
    }
  }, {
    key: "search",
    value: function search(req, res) {
      res.render('search');
    }
  }]);

  return SiteController;
}();

module.exports = new SiteController();