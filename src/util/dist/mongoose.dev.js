"use strict";

module.exports = {
  mutipleMongooseToOject: function mutipleMongooseToOject(mongooses) {
    return mongooses.map(function (mongoose) {
      return mongoose.toObject();
    });
  },
  mongooseToObject: function mongooseToObject(mongoose) {
    return mongoose ? mongoose.toObject() : mongoose;
  }
};