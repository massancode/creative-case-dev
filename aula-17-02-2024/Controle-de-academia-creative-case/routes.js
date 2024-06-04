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

    routes.get("/:id",instructors.show)

    routes.post ("/instructors",instructors.post)

    module.exports = routes