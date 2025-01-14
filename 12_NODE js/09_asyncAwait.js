//A Promise in JavaScript is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value. Promises are used to handle asynchronous operations more effectively than traditional callback functions, providing a cleaner and more manageable way to deal with code that executes asynchronously, such as API calls, file I/O, or timers.
// User validation using promise

const userLogin = () => {
  console.log("Enter the UserName and Password: ");
  // let username = prompt("Enter username: ")
  // let password = prompt("Enter password: ")
  let username = "Ishu";
  let password = "1234";

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("performing User Authentication!");
      if (username === "Ishu" && password === "1234") {
        resolve("User Authenticate!");
      } else {
        reject("Authentication failed!");
      }
    }, 1000);
  });
};

function gotoHome(userAuthStatus) {
  return Promise.resolve(`Go to HomePage as:  ${userAuthStatus}`);
}

// userLogin()
//   .then((response) => {
//     console.log("validate User");
//     return gotoHome(response);
//   })
//   .then((userAuthStatus) => {
//     console.log(userAuthStatus);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//   console.log("Imeediate executed");

// same this Using Aync Await

async function PerformTask() {
  try {
    const response = await userLogin();
    console.log("User Validate");
    const userAuthStatus = await gotoHome(response);
    console.log(userAuthStatus);
  } catch (err) {
    console.log(err);
  }
}

// PerformTask();
// console.log("Imeediate executed");
// This is More consise and readable code u can also handle error using try catch

// Another Eg cb, promisem, Async await
function setTimeoutPromisified(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  
// **************************************callback  
//   setTimeoutPromisified(1000).then(function () {
//     console.log("hi");
//     setTimeoutPromisified(3000).then(function () {
//       console.log("hello");
//       setTimeoutPromisified(5000).then(function () {
//         console.log("hello there");
//       });
//     });
//   });
  

// ******************************Promises
// setTimeoutPromisified(1000)
//   .then(function () {
//     console.log("hi");
//     return setTimeoutPromisified(3000);
//   })
//   .then(function () {
//     console.log("hello");
//     return setTimeoutPromisified(5000);
//   })
//   .then(function () {
//     console.log("hello there");
//   });


// ********************************Async Await
async function solve() {
  await setTimeoutPromisified(1000);
  console.log("hii");
  await setTimeoutPromisified(3000);
  console.log("hello");
  await setTimeoutPromisified(5000);
  console.log("hii There");
}

solve();