const Course = require('../models/Course')
const {  mutipleMongooseToOject } = require('../../util/mongoose')


class MeController {

    
    // [GET] /me/stored/courses
    storeCourses(req, res, next) {

        Course.find({})
            //  .then(courses => {
            //     res.render('me/store-courses', {
            //      courses: mutipleMongooseToOject(courses)
            //  })

            .then(courses => {
                res.render('me/store-courses', {
                    courses: mutipleMongooseToOject(courses)
                })
            })
            .catch(next)

        

    }
}

module.exports = new MeController