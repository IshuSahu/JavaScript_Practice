// Set timeout:

function CheckAuth() {
  return new Promise((resolve, reject) => {
    let user = "ishu";
    let pw = "sahu";

    setTimeout(() => {
      if (user === "ishu" && pw === "sahu") {
        resolve("User Authenticated!");
      } else {
        reject("Credential not match");
      }
    }, 1000);
  });
}

// CheckAuth()
//   .then(
//     (res) => {
//       console.log(res);
//     },
//     (rej) => {
//       console.log(rej);
//     }
//   )
//   .catch((err) => {
//     console.log(err);
//   });

// read file
const fs = require("fs");
const path = require("path");

const getData = new Promise((res, rej) => {
  let data = fs.readFile(
    path.join(__dirname, "a.txt"),
    "utf-8",
    (err, data) => {
      if (err) {
        rej(err);
      } else {
        res(data);
      }
    }
  );
});
getData.then(
  (data) => {
    console.log(data);
  },
  (err) => {
    console.log(err);
  }
);

// Fetch

new Promise((resolve, reject) => {
  data = fetch("https://api.github.com/users/IshuSahu");
  if (data) {
    resolve(data);
  } else {
    reject("No data found");
  }
}).then(
  (data) => {
    console.log(data?.status);
  },
  (err) => {
    console.log(data);
  }
);
