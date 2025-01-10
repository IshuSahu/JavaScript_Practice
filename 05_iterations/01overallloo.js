
// for of: arrays and map

// const arr = [1, 2, 3];
// for (const value of arr) {
//     console.log(value); // 1, 2, 3
// }

// const map = new Map([
//   ["key1", "value1"],
//   ["key2", "value2"]
// ]);
// for (const [key, value] of map) {
//   console.log(key, value); // "key1 value1", "key2 value2"
// }


// ***********************for...in: arr, object
// const arr = [1, 2, 3];
// for (const index in arr) {
//     console.log(index, arr[index]); // 0 1, 1 2, 2 3
// }

// const obj = { a: 1, b: 2 };
// for (const key in obj) {
//     console.log(key, obj[key]); // "a 1", "b 2"
// }


// ****************************.forEach() : Arrays, Map
// const arr = [1, 2, 3];
// arr.forEach((value, index) => {
//     console.log(index, value); // 0 1, 1 2, 2 3
// });
arr.forEach((value) => {
    console.log(value); // 0 1, 1 2, 2 3
});

// const map = new Map([
//     ["key1", "value1"],
//     ["key2", "value2"]
// ]);
// map.forEach((value, key) => {
//     console.log(key, value); // "key1 value1", "key2 value2"
// });




// Comparison Table
// Command	Arrays	Objects	Maps
// for...of	✅ (Iterates values)	❌ (Not directly)	✅ (Iterates key-value pairs)
// for...in	✅ (Iterates indices)	✅ (Iterates keys)	❌ (Not used for maps)
// .forEach()	✅ (Iterates values)	❌ (Not directly iterable)	✅ (Iterates key-value pairs)