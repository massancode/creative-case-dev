function age (timestamp){
    const today = new Date() // controla a data de hoje
    const birthday = new Date (timestamp) // aniversario em segundos

    let age = today.getFullYear() - birthday.getFullYear()
    let month = today.getMonth() - birthday.getMonth()

   if(month < 0 || month == 0 && today.getDate() < birthday.getDate()){
    age = age -1
   }

    return age

}


console.log (age(872899200000))