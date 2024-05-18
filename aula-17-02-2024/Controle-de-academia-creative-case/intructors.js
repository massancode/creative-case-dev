// Funções da pagina de instrutores
const fs = require ("fs")
const data = require ("./data.json")


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



   