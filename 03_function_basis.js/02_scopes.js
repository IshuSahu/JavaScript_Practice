
// if (true) {
//     let a = 10
//     const b = 20
//     var c=23;
    
// }

// console.log(c); /// this will return c value in golbal(problem when you import any fuction and it contain var it can violet you code)

//var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a); // Local scope
    
}

// console.log(a); // global scope
// console.log(b);
// console.log(c);


// function one(){
//     const username = "Ishu"

//     function two(){
//         const website = "Portfolio"
//         console.log(username);
//     }
//     // console.log(website);

//      two()

// }

// // one()

// if (true) {
//     const username = "Ishu"
//     if (username === "Ishu") {
//         const website = " Profolio"
//         // console.log(username + website);
//     }
//     // console.log(website);
// }

// // console.log(username);


// // ++++++++++++++++++ interesting ++++++++++++++++++


// console.log(addone(5))

// function addone(num){
//     return num + 1
// }



console.log(addTwo(5));
const addTwo = function(num){ // function /Expression
    return num + 2
}