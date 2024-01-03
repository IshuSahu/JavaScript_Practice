// ES6

class User {
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password
    }

    encryptPassword(){
        return `${this.password}abc`
    }
    changeUsername(){
        return `${this.username.toUpperCase()}`
    }

}

const stud = new User("Ishu", "sahuij@12.com", "123")

console.log(stud.encryptPassword());
console.log(stud.changeUsername());

// behind the scene

// function User(username, email, password){
//     this.username = username;
//     this.email = email;
//     this.password = password
// }

// User.prototype.encryptPassword = function(){
//     return `${this.password}abc`
// }
// User.prototype.changeUsername = function(){
//     return `${this.username.toUpperCase()}`
// }


// const stud = new User("Janakram sahu", "janakrsa@gmail.com", "123")

// console.log(stud.encryptPassword());
// console.log(stud.changeUsername());