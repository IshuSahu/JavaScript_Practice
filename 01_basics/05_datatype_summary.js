//  Primitive

//  7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// console.log(typeof anotherId);
// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "Ishu",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

myFunction();

// https://262.ecma-international.org/5.1/#sec-11.4.3


// stack(Primitive), Heap(non-primitive)

let myName = "Ishu"

let mylastName = myName
mylastName ="sahu"

// console.log(myName)
// console.log(mylastName)


//Heap:
let myProfile = {
    email:"Ishu",
    pass :13245
}

let myDetail = myProfile

myDetail.email="ishusahu@gmail.com"

console.log(myProfile)
console.log(myDetail)
