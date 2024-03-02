const express = require('express')
const server = express()
const nunjucks = require('nunjucks')

const videos = require ('./data');

server.use(express.static('public'))
server.set ("view engine","njk")
nunjucks.configure ("views",{
    express:server,
    autoescape:false,
    noCache:true
})
server.listen (5000,function(){
    console.log("hello wolrd!!!")

    server.get("/", function(req,res){
        const about = {
            avatar_url:"",
            name:"Pedro Edilsonsonson",
            role:"Programador front e back",
            description:"um dev que ta devendo",
            link:[
                {name:"Github",url:"https://github.com/PedroGTK"},
                {name:"Instagram",url:"https://intagram.com/pedro-edilson"},
                {name:"Linkedin",url:"https://linkedin.com/pedrao"}
            ]
        }

        return res.render ("index",{about})
    })

    server.get("/videos",function (req,res){
return res.render("videos",{items:videos})
    })
})