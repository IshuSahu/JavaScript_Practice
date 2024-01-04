class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const Stud = new Teacher("Stud", "Stud@teacher.com", "123")

Stud.logMe()
const Employee = new User("Employee")

Employee.logMe()

console.log(Stud instanceof User);