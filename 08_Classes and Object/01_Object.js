function multipleBy5(num){

    return num*5
}

multipleBy5.power = 2

// console.log(multipleBy5(5));       // Outputs 25 (5 * 5)
// console.log(multipleBy5.power);   // Outputs 2 (custom property)
// console.log(multipleBy5.prototype); // Outputs the default prototype object (functions in JS have a prototype).


function createUser(username, score){
    this.username = username
    this.score = score
}

createUser.prototype.increment = function(){
    this.score++
}
createUser.prototype.printMe = function(){
    console.log(`price is ${this.score}`);
}

const chai = new createUser("chai", 25)
const tea = createUser("tea", 250)
chai.increment()
chai.printMe()
// tea.printMe() //Cannot read properties of undefined (reading 'printMe')

/*

Here's what happens behind the scenes when the new keyword is used:
A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The object's prototype is set to the constructor's prototype. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/