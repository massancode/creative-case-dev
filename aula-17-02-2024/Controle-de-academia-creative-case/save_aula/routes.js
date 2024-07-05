    const express = require ('express')
    const routes = express.Router()
    const instructors = require ("./intructors")


    routes.get ('/',function(req,res){
        return res.render ("layout")
    })

    routes.get ('/instructors',function(req,res){
        return res.render ("instructors/index")
    })

    routes.get ('/create',function(req,res){
        return res.render ("instructors/create")
    })

    routes.get('/instructors/:id/edit',function(req,res){
        return res.render ("instructors/edit")
    })

    routes.get('/instructors/:id/edit',instructors.editNow)


    routes.get('/instructors/:id',instructors.show)

    routes.post ("/instructors",instructors.post)

    module.exports = routes