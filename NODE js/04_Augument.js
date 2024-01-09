// console.log(process.argv[2])

// process.argv.forEach((val,index)=>{
//     console.log(`${index}: ${val}`);
// })

//  node .\04_Augument.js Name=Ishu

const minimist = require("minimist")
const argNew = minimist(process.argv.slice(2));
console.log(argNew.Name);