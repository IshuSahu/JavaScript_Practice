let score="33"

let scoreInNumber = Number(score) // type convertion to number
console.log(typeof score);
console.log(typeof scoreInNumber);

let password = "13abs"
// let password = null
// let password = undefined
scoreInNumber = Number(password)
console.log(scoreInNumber); //Not a Number (NaN)
console.log(typeof scoreInNumber); //number


/**
 "22" => 22
 "22abc" => NaN
 true=>1 , false => 0

 in boolean: 
 ""==> false
 "Ishu"==>True
 */


//  *****************************Opeartion*****************************
// Arithmatic operator in javascript
// let num1=6;
// let num2=2;
// console.log("The value of num1 + num2 is:"+(num1+num2));
// console.log("The value of num1 - num2 is:"+(num1-num2));
// console.log("The value of num1 * num2 is:"+(num1*num2));
// console.log("The value of num1 / num2 is:"+(num1/num2));
// console.log("The value of num1 / num2 is:"+(num1%num2));
// console.log("The value of num1 ** num2 is:"+(num1**num2));  // Exponential 

str1 ="Ishu"
str2 = "sahu"

let str3 = str1 + " " + str2

// console.log(str3);

console.log("1"+2); //12
console.log(2 + "1"); //21
console.log(2 + "1"+ 2); //212
console.log("1"+ 2 + 2); //122
console.log(2 + 2 + "1"); //41
// see first convert according to that

