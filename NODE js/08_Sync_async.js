
// console.log("Excution started");

// function sleep(milisecond){
//     let startTime = new Date().getTime()
//     console.log("Running......");
//     while(new Date().getTime() < startTime + milisecond){
//         console.log("In Progress")
//     }
//     console.log("Progress End Here");
// }

// sleep(1000)
// console.log("Execution Ends Here!");



// // Async code   
// console.log("Excution started");

// function sleep(milisecond){
    
//     console.log("Running......");
//     setTimeout(()=>{   /// other logs will not wait for this to complete its task (it goes to Web ApI(and Added to task queue))
//         console.log("Operation done!")
//     },milisecond)
//     console.log("Progress End Here");
// }

// sleep(1000)
// console.log("Execution Ends Here!");


// *********************************************callBack****************************888
// CAll back is Syncronous:

console.log("start Task")

function syncCode (cb){
    console.log("task running");
    cb();
}

function asyncCode (cb){
    console.log("task running");
    setTimeout(() => {
        cb();
    }, 1000);
}

// asyncCode( ()=> console.log(name))
// // syncCode( ()=> console.log("Ishu"))

// const name = "Ishu"
// console.log("Task Ends Here");



//*********************callbacck hell */

function asyncCode(cb){
    setTimeout(()=>{
        cb(null,"This is data from server")
    },1000)
}

function makeApicall(cb){
    setTimeout(()=>{
        console.log("This is Async Task Execution");
    },1000);
}

makeApicall(()=>{
    makeApicall(()=>{
        asyncCode(()=>{
            asyncCode(()=>{
                asyncCode(()=>{

                })
            })
        })
    })
})

// to over come this we use Promises or Async await


