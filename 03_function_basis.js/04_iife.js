// Immediately Invoked Function Expressions (IIFE)
/*
Advantages and Use Cases
Encapsulation. IIFE provides encapsulation, allowing you to create private scopes for variables and functions
 some time our code get polluted or violet by the global parameter to remove that pollution we use IIFE
 it run immediate after function defination 

*/

// named iffe
(function chai() {
  console.log(`DB CONNECTED`);
})(); // has to be end so always use semicolon ;  otherdifferent fuction will not execute

((name) => {
  console.log(`DB CONNECTED TWO ${name}`);
})("Ishu");
