let firstName:string = "dinh"
let lastName:string ="thanh"
firstName.trim()
lastName.trim()
let fullName = (firstName.charAt(0).toUpperCase() + firstName.slice(1)) +" "+ (lastName.charAt(0).toUpperCase() + lastName.slice(1))
console.log(fullName)