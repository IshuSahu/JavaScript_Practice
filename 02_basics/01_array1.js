// *********************************array

let myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]
const myArr2 = new Array(1, 2, 3, 4)

// console.log(myArr2);

// ***********************Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

myArr.unshift(9) // [9,0, 1, 2, 3, 4, 5 ]
// console.log(myArr);
myArr.shift() // eliminate first 0 : [ 1, 2, 3, 4, 5 ]
// console.log(myArr);
// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

const newArr = myArr.join()

console.log( newArr); // this is result String; 0,1,2,3,4,5
// console.log(myArr);


//********************** */ slice, splice

// console.log("A ", myArr);
myArr = [0, 1, 2, 3, 4, 5]
const myn1 = myArr.slice(1, 3) //[ 1, 2 ] return this part only

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3) // splice manupulate the original array like it remove the arra: C  [ 0, 4, 5 ]
console.log(myn2); //[ 1, 2, 3 ] // this contain last element too
console.log("C ", myArr); //C  [ 0, 4, 5 ]


