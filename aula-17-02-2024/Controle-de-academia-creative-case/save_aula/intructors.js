// Funções da pagina de instrutores
const fs = require ("fs")
const data = require ("./data.json")
const {age,date} = require ('./utils')
const { name } = require("browser-sync")


exports.put = function (req,res){
    const {id} = req.body
    let index = 0

 const foundInstructor = data.instructors.find (function(instructor,foundInstructor){
    if (id == instructor.id){
        index = foundInstructor}
    })
    const instructor = {
        ...foundInstructor,
        ...req.body,
        birth:Date.parse(req.body.birth)
    }

    data.instructors[index] = instructor

    fs.writeFile ("data.json",JSON.stringify(data,null,2),function(err){
        if (err) return res.send ('erro ao gravar!')
        return res.redirect (`/instructors/${$id}`)    
    })
 }

    

exports.post = function(req,res){
       
    const keys = Object.keys (req.body)
     for(key of keys){
       if(req.body[key]==""){
           return res.send ("preencha o form")
       }
     }
      let {name,avatar_url,birth,gender,services,created_at} = req.body

    
     birth = Date.parse(req.body.birth)
     created_at = Date.now()
     id = Number (data.instructors.length)+1

        data.instructors.push ({id,name,avatar_url,birth,gender,services,created_at})

     fs.writeFile("data.json",JSON.stringify(data,null,2),function(err){
        if (err) return res.send("erro ao salvar o arquivo")
            return res.redirect ("/instructors")
       })
   }

exports.show = function (req,res){
    const {id} = req.params

    const foundInstructor = data.instructors.find (function(instructor){
        return instructor.id == id
    })

    if(!foundInstructor) return res.send ("instrutor não encontrado")

       const instructor= {
        ...foundInstructor,
        birth: age(foundInstructor.birth) + "anos",
        created_at: new Intl.DateTimeFormat("pt-br").format(foundInstructor.created_at)
       }

        return res.render ("instructors/show",{instructor})
   }
/*exports.edit = function (req,res){
    const {id} = req.params

    const foundInstructor = data.instructors.find (function(instructor){
        return instructor.id == id
    })

    if(!foundInstructor) return res.send ("instrutor não encontrado")

       const instructor= {
        ...foundInstructor,
        birth: age(foundInstructor.birth) + "anos",
        created_at: new Intl.DateTimeFormat("pt-br").format(foundInstructor.created_at)
       }

        return res.render ("instructors/edit",{instructor})
   }*/

exports.editNow = function (req,res){
    const {id} = req.params

    const foundInstructor = data.instructors.find (function(instructor){
        return instructor.id == id
    })

    if(!foundInstructor) {
    return res.send ("instrutor não encontrado")}

      const instructor ={
        ...foundInstructor,
        birth: date (foundInstructor.birth)
        
      }
      date(foundInstructor.birth)
      return res.render ("instructors/edit",{instructor})
   }




   