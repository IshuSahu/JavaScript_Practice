const { log } = require("console")
const readline = require("readline")

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// }
// )

// rl.question(`what is your name ? `, (name)=>{
//     console.log(`hii, ${name}`);
//     rl.close()
// })

// // **************Another packacge for to get rid of callback function  npm i prompt-sync

const pormptsync = require("prompt-sync");// its an funtion
const getData = pormptsync();

const name = getData("What is your name: ")
console.log(name);