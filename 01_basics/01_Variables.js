const accoutId =13231
let accoutEmail= "ishusahu593@gmail.com"
var accoutPassword= 246810
accountCity="Nagpur"

// accoutId=4561   // Not allow
accoutEmail="ishu@gmail.com"
accoutPassword=897
accountCity="Jabalpur"

/*
 prefer to not use var because of issue of Block Scope ans functional scope
*/

let accountState
console.table([accoutId,accoutEmail,accoutPassword,accountCity, accountState]);