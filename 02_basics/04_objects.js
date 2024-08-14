// const tinderUser = new Object()    //singleton object
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Ishu",
            lastname: "Sahu"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

//<<<<<<<<<<<<<<<<Mearging properties>>>>>>>>>>>>>>>>>>>>>>>>......
// const obj3 = { obj1, obj2 }
// const obj3 = Object.assign({}, obj1, obj2, obj4)

// const obj3 = {...obj1, ...obj2}
// console.log(obj3);


const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

// console.log(users[1].email);
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser)); //[ [ 'id', '123abc' ], [ 'name', 'Sammy' ], [ 'isLoggedIn', false ] ]

//some time we need to check the keys property exits or not
// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<Object destructure>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}



const {courseInstructor: instructor} = course // we are alising the new name (Object destructure)

console.log(course.courseInstructor);
console.log(instructor);



// Json formate 
// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }



[
    {},
    {},
    {}
]
