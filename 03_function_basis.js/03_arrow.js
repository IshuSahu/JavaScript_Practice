const user = {
    username: "Ishu",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);  //Print  obect username and price
    }
}

// user.welcomeMessage()
user.username = "sam"
// user.welcomeMessage() change the name to sam for both

// console.log(this); // ouput = {} node refer to empty object

//  this inside function 
// function chai(){
//     let username = "Ishu"
//     console.log(this.username);  // return undefined in function
// }

// chai()
/* 
Here's why this.username is undefined:

Scope of this: In non-strict mode, when you call chai(), this inside chai refers to the global object. The global object does not have a property named username, so this.username is undefined.

Lexical Scoping: In JavaScript, this is not lexically scoped (it doesn't behave like a normal variable that respects function scope). Instead, this is dynamically scoped based on how the function is called.
*/
// const chai = function () {
//     this.username = "Ishu";
//     console.log(this.username);
// }
// chai()
const chai = function () {
    let username = "Ishu"
    console.log(this.username);
}
chai()

// Arrow function
const Hello =  () => {
    let username = "Ishu"
    console.log(this);
}

/*
Arrow functions have shorter syntax than regular function expressions.
Arrow functions have implicit return statements. // Arrow function with implicit return 
const add = (a, b) => a + b;
Arrow functions increase readability.
*/ 

Hello()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2   // implicit return

// const addTwo = (num1, num2) => ( num1 + num2 )

// const addTwo = (num1, num2) => ({username: "Ishu sahu"}) // object has to be warp in parenthesis

// console.log(addTwo(3, 4))
