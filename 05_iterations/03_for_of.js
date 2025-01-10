
// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5];

// for (const num of arr) {
//     console.log(num);
// }

const greetings = "Hello world!";
for (const greet of greetings) {
  // console.log(`Each char is ${greet}`)
}

// Maps

const map = new Map();
map.set("IND", "India");
map.set("USA", "United States of America");
map.set("Fr", "France");
map.set("IND", "India"); // store unique value

// console.log(map);

for (const [value] of map) {
  //the [value] part is using destructuring assignment  single will return only key
//   console.log(value);
}
for (const [key, value] of map) {
//   console.log(key, ':-', value);
}

const myObject = {
  game1: "NFS",
  game2: "Spiderman",
};

for (const [key, value] of myObject) { // it is not itratable their is diffrent way(For in loop)
    console.log(key, ':-', value);

}
