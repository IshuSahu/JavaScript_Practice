// Dates

let myDate = new Date()
// console.log(myDate.toString()); //Fri Jan 10 2025 08:31:15 GMT+0530 (India Standard Time)
// console.log(myDate.toDateString());//Fri Jan 10 2025
// console.log(myDate.toLocaleString()); //1/10/2025, 8:31:15 AM
// console.log(typeof myDate); //object

let myCreatedDate = new Date(2023, 0, 23)
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// let myCreatedDate = new Date("2023-01-14")
// let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp); //1736478149572
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
// console.log(newDate); //2025-01-10T03:03:04.669Z
// console.log(newDate.getMonth() + 1); //1 month
// console.log(newDate.getDay()); // 5 day

// console.log(`${newDate.getDay()} and the time ${newDate.getTime()}`);

newDate.toLocaleString('default', {
    weekday: "long", // we can also change the type
    
})

