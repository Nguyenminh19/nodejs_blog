const Course = require('../models/Course')
const { mongooseToObject } = require('../../util/mongoose')
const { query } = require('express')


class CourseController {

    // [GET] /Courses/:slug

    show(req, res, next) {
        Course.findOne( {slug: req.params.slug} )
            .then(course => {
                res.render('courses/show.hbs',{
                    course: mongooseToObject(course)
                })
            })

            .catch(next)
    }

    // [GET] /courses/create
    create(req, res, next) {
        res.render('courses/create')
    }


    // [GET] /courses/:id/edit
    edit(req, res, next) {
        Course.findById(req.params.id)
            
            .then(course => {
                res.render('courses/edit',{
                    course: mongooseToObject(course)
                })
            })

            .catch(next)
        
    }

    // [POSTT] /courses/store
    store(req, res, next) {
        const formdata = req.body
        formdata.image = `https://img.youtube.com/vi/${req.body.videoId}/sddefault.jpg`
        const course = new Course(formdata)
        course.save()
            .then(() => res.redirect(`/`))
            .catch(next)

    }

    // [PUT] /courses/_id
    update(req, res, next) {
        Course.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.redirect('/me/stored/courses'))
            .catch(next)
    }



    
}

module.exports = new CourseController