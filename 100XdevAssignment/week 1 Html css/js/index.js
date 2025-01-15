const promise = new Promise((resolve, rejects) => {
  console.log("assync get call");
  if (true) {
    resolve("Ishu");
  } else {
    rejects("gets Error");
  }
});
promise
  .then(
    (name) => {
      console.log(name);
      throw Error;
    },
    () => {
      console.log("failed");
    }
  )
  .catch((e) => console.log(e));
