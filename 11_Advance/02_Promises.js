/**

What are JavaScript promises?
    Promises are used for asynchronous programming in JavaScript. They represent the
    eventual completion (or failure) of an asynchronous operation and allow chaining of
    operations using .then() and .catch().
 */
// //1
// const promiseOne = new Promise(function(resolve, reject){
//     //Do an async task
//     // DB calls, cryptography, network
//     setTimeout(function(){
//         console.log('Async task is compelete');
//         resolve()
//     }, 1000)
// })

// promiseOne.then(function(){
//     console.log("Promise consumed");
// })

// //2
// new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log("Async task 2");
//         resolve()
//     }, 3000)

// }).then(function(){
//     console.log("Async 2 resolved");
// })

// //3
// const promiseThree = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log("MyUser");
//         resolve({username: "Ishu", email: "sahu@example.com"})
//     }, 2000)
// })

// promiseThree.then(function(user){
//     console.log(user);
// })

// //4
// const promiseFour = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = false
//         if (error) {
//             resolve({username: "IshuSahu", password: "123"})
//         } else {
//             reject('ERROR: Something went wrong')
//         }
//     }, 1000)
// })
// // Promise chaining
//  promiseFour
//  .then((user) => {
//     console.log(user);
//     return user.username
// }).then((username) => {
//     console.log(username);
// }).catch(function(error){
//     console.log(error);
// }).finally(() => console.log("The promise is either resolved or rejected"))

//5
const promiseFive = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = false;
    if (!error) {
      resolve({ username: "javascript", password: "123" });
    } else {
      reject("ERROR: JS went wrong");
    }
  }, 1000);
});

/* The async/await syntax is a modern approach to handle asynchronous operations. It
allows writing asynchronous code in a more synchronous-like manner, making it
easier to read and maintain  */

// async function consumePromiseFive(){
//     try {
//         const response = await promiseFive
//         console.log(response);
//     } catch (error) {
//         console.log(error);
//     }
// }

// consumePromiseFive()

async function getAllUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    console.log("getting data");

    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("E: ", error);
  }
}

getAllUsers();
console.log("Once get data will let you know");

// fetch('https://api.github.com/users/IshuSahu')
// .then((response) => {
//     return response.json()
// })
// .then((data) => {
//     console.log(data);
// })
// .catch((error) => console.log(error))
