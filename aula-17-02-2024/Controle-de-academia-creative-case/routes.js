    const express = require ('express')
    const routes = express.Router()
    const instructors = require ("./intructors")


    routes.get ('/',function(req,res){
        return res.render ("layout")
    })
    // usando arrwo function
    
   /* routes.get ('/instructors',function(req,res){
        return res.render ("instructors/index")
    })*/

     /* routes.get ('/instructors',(req,res)=>{
        return res.render ("instructors/index")
      })*/

        const handleInstrucotrs = (req,res)=>{
            return res.render ("instructors/index")
          }


          const getHandleInstrucotrs = () =>{ 
            return handleInstrucotrs
          }

      routes.get ('/instructors',handleInstrucotrs)


    routes.get ('/create',function(req,res){
        return res.render ("instructors/create")
    })


    routes.get("/:id",instructors.show)

     routes.get("/instructors/:id/edit",function(req,res){
        return res.render ("instructors/edit")
     })

    routes.post ("/instructors",instructors.post)

    module.exports = routes