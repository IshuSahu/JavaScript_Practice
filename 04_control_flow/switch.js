// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

const month = "feb"

switch (month) {
    case "jan":
        console.log("January");
        break;
    case "feb": // here fofr both u were log samevalue
    case "march":
        console.log("my day");
        break;
    case "april":
        console.log("april");
        break;

    default:
        console.log("default case match");
        // break;
}


/* if we diddt use break it will run all successive cased including default*/