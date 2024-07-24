module.exports ={
    age: function (timestamp){
    const today = new Date() // controla a data de hoje
    const birthday = new Date (timestamp) // aniversario em segundos

    let age = today.getFullYear() - birthday.getFullYear()
    let month = today.getMonth() - birthday.getMonth()

   if(month < 0 || month == 0 && today.getDate() < birthday.getDate()){
    age = age -1
   }

    return age

  },

  date: function (timestamp){
    const date = new Date (timestamp)

    //2020
    const year = date.getUTCFullYear()
    //mm - 05
    const month = `0${date.getUTCMonth() +1}`.slice(-2)
    //DD
    const day = `0${date.getUTCDate()}`.slice(-2)

    console.log(`${year}-${month}-${day}`)
    return `${year}-${month}-${day}`
}
}




