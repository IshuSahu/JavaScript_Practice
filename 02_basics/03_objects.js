// singleton : Singletons are classes which can be instantiated once, and can be accessed globally
// Object.create: Object. create() static method creates a new object, using an existing object as the prototype of the newly created object

// object literals: An object in Javascript is a collection of {name:value} pairs

const mySym = Symbol("key1")


const JsUser = {
    name: "Ishu",
    "full name": "Ishu Janakram sahu",
    [mySym]: "mykey1",
    age: 18,
    location: "Nagpur",
    email: "ishu@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "ishu@chatgpt.com"
// Object.freeze(JsUser) // now the object cannot be change
// JsUser.email = "ishu@microsoft.com"
// console.log(JsUser.email);

JsUser.greeting = function() {
    console.log("Hello JS user");
}

JsUser.greetingTwo = function() {
    console.log(`Hello JS user, ${this.name}`);
}

// Execute the methods and log their outputs
JsUser.greeting(); // This will print: Hello JS user
JsUser.greetingTwo();