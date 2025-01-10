// Example of Sync and Async Program

// //Sync
// console.log("Excution started");

// function sleep(milisecond){
//     let startTime = new Date().getTime()
//     console.log("Running......");
//     while(new Date().getTime() < startTime + milisecond){
//         console.log("In Progress")
//     }
//     console.log("Progress End Here");
// }

// sleep(100)
// console.log("Execution Ends Here!");

// // Async code
// console.log("Excution started");

// function sleep(milisecond) {
//   let startTime = new Date().getTime();
//   console.log("Running......");
//   setTimeout(() => {
//     /// other logs will not wait for this to complete its task (it goes to Web ApI(and Added to task queue))
//     while (new Date().getTime() < startTime + milisecond) {
//       console.log("In Progress");
//     }
//   }, milisecond);
//   console.log("Progress End Here");
// }

// sleep(1000);
// console.log("Execution Ends Here!");

// *********************************************callBack****************************888
//IMP==========> CAll back is Syncronous:

// console.log("start Task")

// function syncCode(cb) {
//   console.log("task running 1");
//   cb();
// }

// syncCode( ()=> console.log("Ishu"))
// function asyncCode(cb) {
//   console.log("task running 2");
//   setTimeout(() => {
//     cb();
//   }, 1000);
// }

// asyncCode( ()=> console.log(name))
// const name = "Ishu"
// console.log("Task Ends Here");

//*********************callback hell */

// Let Example:
// function AsyncTask(cb){
//   cb();
// }

// AsyncTask(()=> console.log(name))  //this will return error that it cannot access name

// function asyncCode(cb) {
//   setTimeout(() => {
//     cb(null, "This is data from server");
//   }, 1000);
// }

// function makeApicall(cb) {
//   setTimeout(() => {
//     console.log("This is Async Task Execution");
//   }, 1000);
// }

// makeApicall(() => {
//   makeApicall(() => {
//     asyncCode(() => {
//       asyncCode(() => {
//         asyncCode(() => {});
//       });
//     });
//   });
// });

// to over come this we use Promises or Async await

// *************************PRomises********************

// const promises = new Promise((resolve, reject) => {
//   console.log("Async task Execution");
//   if (true) {
//     const person = { name: "Ishu" };
//     resolve(person);
//   } else {
//     reject();
//   }
// });

// promises.then(
//   (name) => {
//     console.log("Passed!", name);
//   },
//   () => {
//     console.log("Failed!");
//   }
// );

// promises
//   .then(
//     (person) => {
//       console.log(person);
//     },
//     () => {
//       console.log("Reject");
//     }
//   )
//   .catch((e) => {
//     console.log(e); // in this case u can remove error from promise:
//   });

// // make API call
const makeApiCall = (time) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("The API called after: " + time);
    }, time);
  });
};

// Single API call
// makeApiCall(1000).then((val) => console.log(val));

// Multi-API call

let multiApiCalls = [
  makeApiCall(5000),
  makeApiCall(3000),
  makeApiCall(2000),
  makeApiCall(1000),
  makeApiCall(0),
];
// Promise.all(multiApiCalls).then((values) => console.log(values)); // all went through simultaneously

// // To see which executes first:

Promise.race(multiApiCalls).then((value) => {
  console.log(value);
});
