/* function Lindo (timestamp){
    const date = new Date (timestamp)

    //2020
    const year = date.getUTCFullYear()
    //mm - 05
    const month =  `0${date.getUTCMonth() +1}`.slice(-2)
        
    //DD
    const day = `0${date.getUTCDate()}`.slice(-2)

    console.log(`${year}-${month}-${day}`)
}

Lindo (946684800000) */


function soma (a,b){
    return a+b
}
 
let resultado =soma (1,2)

console.log(resultado)
