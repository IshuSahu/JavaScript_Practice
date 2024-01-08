const userLogin=()=>{
    console.log("Enter the UserName and Password: ");
    let username = prompt("Enter username: ")
    let password = prompt("Enter password: ")

    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            console.log("performing User Authentication!");
            if(username==="Ishu" && password==="1234"){
                resolve("User Authenticate!")
            }else{
                reject("Authentication failed!")
            }
        }, 1000);
    })
};

function gotoHome(userAuthStatus){
    return Promise.resolve(`Go to HomePage as:  ${userAuthStatus}`)
}

// userLogin().then((response)=>{
//     console.log("validate User");
//     return gotoHome(response);
// }).then((userAuthStatus)=>{
//     console.log(userAuthStatus);
// }).catch((err)=>{
//     console.log(err);
// })

// same this Using Aync Await




async function PerformTask(){
   try{
    const response = await userLogin()
    console.log("User Validate");
    const userAuthStatus=await gotoHome(response)
    console.log(userAuthStatus);
   }catch(err){
    console.log(err);
   }
}

PerformTask() 

// This is More consise and readable code u can also handle error using try catch