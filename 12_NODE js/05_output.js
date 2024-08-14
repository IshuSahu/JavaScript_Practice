// const function1 = ()=> console.trace() //For debuggings
// const function2 = ()=> function1()

// function2()

//we gonna count the time of function
const sum = () => {
  console.log(`sum of ${2 + 3}`);
};
const multiply = () => {
  console.log(`multiply of ${2 * 3}`);
};

const MeasureTime = () => {
  console.time("sum()");
  sum();
  console.timeEnd("Sum()");
  console.time("multiply()");
  multiply();
  console.timeEnd("multiply()");
};

MeasureTime();

// Progrebar Using
const ProgressBar = require("progress");

const bar = new ProgressBar("Dowloding [:bar] : rate/bps : percent :etas", {
  total: 20,
});

const timer = setInterval(() => {
  bar.tick();
  if (bar.complete) {
    clearInterval(timer);
  }
}, 100);
