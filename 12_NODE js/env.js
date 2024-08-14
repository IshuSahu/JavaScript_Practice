/*
in first we can pass the value from console like:
NAME=Ishu ID:101
*/
// console.log(process.env.NAME)
// console.log(process.env.ID)


/*
In this we are taking from .env file
*/
require("dotenv").config()
console.log(process.env.NAME)
console.log(process.env.ID)



