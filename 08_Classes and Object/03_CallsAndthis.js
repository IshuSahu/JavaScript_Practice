function SetUsername(username){
    //complex DB calls
    this.username = username
    console.log("called");
}

function createUser(username, email, password){
    SetUsername.call(this, username)  // here "this" is improtant as it get all the current context of setUserName(which get vanish after use)
    console.log(username);
    
    this.email = email
    this.password = password
}

const stud = new createUser("Ishu", "sahuij@rknec.edu", "123")
console.log(stud);