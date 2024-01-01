// Immediately Invoked Function Expressions (IIFE)
/*
 some time our code get polluted or violet by the global parameter to remove that pollution we use IIFE
 it run imediate after function defination
*/

// named iffe
(function chai(){
    console.log(`DB CONNECTED`);
})();  // has to be end so always use semicolon ;  otherdifferent fuction will not execute

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('Ishu')
