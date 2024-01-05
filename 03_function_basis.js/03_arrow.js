const user = {
    username: "Ishu",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this); // ouput = {} node refer to empty object

//  this inside function 
// function chai(){
//     let username = "Ishu"
//     console.log(this.username);  // return undefined in function
// }

// chai()

// const chai = function () {
//     let username = "Ishu"
//     console.log(this.username);
// }


// Arrow function
const chai =  () => {
    let username = "hitesh"
    console.log(this);
}


// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2   // implicit return

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "Ishu sahu"}) // object has to be warp in parenthesis


// console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()