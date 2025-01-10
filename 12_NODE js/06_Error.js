// **************************Hadling error using Exception

// const error = new Error("Something Went wrong")
// // console.log(error.stack);
// // console.log(error.message);

// throw new Error("I am Error Object")

// *******************Custom Error Js
class CustomError extends Error {
  constructor(message) {
    super(message);
  }
}

// module.exports ={CustomError} // to Export
// const {custome error} = require("./fileName")

// throw new CustomError("This is Custom error Object")

// ********************* Using try- catch block:
doSomething = () => {
  throw new CustomError("This is from do something Function");
};
// try {
//   doSomething();
// } catch (e) {
//   console.log("Error Occour");
//   console.log(e);
// }

// /************** */ Exception with Promises:
const promise = new Promise((resolve, reject) => {
  if (false) {
    resolve(doSomething());
  } else {
    reject(doSomething());
  }
});

// promise.then((val)=>{
//     console.log(val)
// }).catch((e)=>{
//     console.log("Error found", e);
// });

// ****************Exception using Async Await

const somefunction = async () => {
  try {
    await doSomething();
  } catch (e) {
    // throw new CustomError("This is Custom error Object")
    throw new CustomError("error Message: ", e.message);
  }
};
//1.25
somefunction();
