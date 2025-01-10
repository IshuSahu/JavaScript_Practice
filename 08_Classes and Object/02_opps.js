const user = {
    username: "Ishu",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function () {
        console.log(this); // Logs the `user` object
    }
};

console.log(user.username);        // Outputs "Ishu"
user.getUserDetails();             // Outputs the `user` object
console.log(this);                 // In strict mode, outputs `undefined` (global object otherwise)




// Constructor: 
function User(username, loginCount, isLoggedIn) {
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function () {
        console.log(`Welcome ${this.username}`); // Logs a custom message for each user
    };

    return this; // Implicit in constructors
}

const userOne = new User("Ishu", 12, true);
const userTwo = new User("Janakram", 11, false);

console.log(userOne); // Outputs userOne object
console.log(userTwo); // Outputs userTwo object

userOne.greeting();  // Outputs: "Welcome Ishu"
userTwo.greeting();  // Outputs: "Welcome Janakram"


/*
Key Differences:
Aspect	        user Object	                            User Constructor Function
Purpose	        Single object with defined properties.	Blueprint for creating multiple objects.
Reusability	    Cannot create multiple instances.	    Can create multiple instances using new.
this Behavior	Refers to the object itself.	        Refers to the specific instance being created.
Use Case	    Simple, static objects.	                Scalable, dynamic object creation.
Prototype	    No prototype chain explicitly linked.	Instances inherit from the constructor's prototype.

*/