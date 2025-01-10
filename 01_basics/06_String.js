/*
    `` modern string interpolation
*/

const name = "ishu"
const repoCount = 50

console.log(name + repoCount + " Value");

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);  //  Mostly in use now

const gameName = new String('ishu-janakram-sahu-com')

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('k'));

const newString = gameName.substring(0, 4)
console.log("1 " + newString);

const anotherString = gameName.slice(-8, 4) 
//Invalid range: start index -8, end index 4; returns empty string
console.log("2 "+ anotherString);

const newStringOne = "   ishu    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://ishu.com/ishu%20sahu"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

console.log(gameName.split('-'));
console.log(gameName.lastIndexOf('i'));

let value = 12;

console.log(typeof(value.toString()))