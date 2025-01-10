class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
        // return "hi"
    }

    static createId(){
        return `123`
    }
}

const Stud = new User("Ishu")
console.log(Stud.logMe())
console.log(User.createId()); // Output: 123
// console.log(Stud.createId())

// They are invoked using the class name (User.createId()), not the instance (Stud.createId()).
class Teacher extends User {
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("iphone", "i@phone.com")
// console.log(iphone.createId());