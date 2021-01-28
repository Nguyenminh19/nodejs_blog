const Course = require('../models/Course')
const {  mutipleMongooseToOject } = require('../../util/mongoose')
const { NULL } = require('node-sass')


class MeController {

    
    // [GET] /me/stored/courses
    storeCourses(req, res, next) {
        Promise.all([Course.find({}), Course.countDocumentsDeleted()])
            .then(([courses, deletedCount]) => {
                res.render('me/store-courses', {
                    deletedCount,
                    courses: mutipleMongooseToOject(courses)
                })
            })
            .catch(next)

    }

    // [GET] /me/trash/courses
    trashCourses(req, res , next) {
        Course.findDeleted({})        
            .then(courses => {
                res.render('me/trash-courses', {
                    courses: mutipleMongooseToOject(courses)
                })
            })
            .catch(next)

    }
}

module.exports = new MeController