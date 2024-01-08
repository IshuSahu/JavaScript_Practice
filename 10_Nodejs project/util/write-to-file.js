const fs = require("fs");
const path = require("path");

module.exports = (data) => {
    try {
        fs.appendFileSync(path.join(__dirname, "..", "data", "movies.json"), JSON.stringify(data) + '\n', "utf-8");
        // Note: I added '\n' to separate each appended JSON object with a new line
    } catch (err) {
        console.error(err);
    }
};

// const fs = require("fs");
// const path = require("path");

// module.exports = (data) => {
//     try {
//         const filePath = path.join(__dirname, "..", "data", "movies.json");
//         let existingData = [];

//         // Read the existing data from the file, if it exists
//         if (fs.existsSync(filePath)) {
//             const fileContent = fs.readFileSync(filePath, "utf-8");
//             existingData = JSON.parse(fileContent);
//         }

//         // Append the new data to the array
//         existingData.push(data);

//         // Write the updated array back to the file
//         fs.writeFileSync(filePath, JSON.stringify(existingData, null, 2), "utf-8");
//     } catch (err) {
//         console.error(err);
//     }
// };
