const path = require("path");
const file = require("fs");

const filePath = "D://JavaScript//NODE js//file//sample.txt";

// // Dirname
// console.log(path.dirname(filePath));
// console.log(__dirname);
// console.log(__filename);

// // basename
// console.log(path.basename(filePath));

// // extension
// console.log(path.extname(filePath));

// console.log(file);

// // Readig from the file -- Async
// file.readFile(filePath,"utf-8",(err,data)=> {
//     if(err){
//         throw new Error("Something went wrong")
//     }else{
//         // console.log(data.toString()) // char encoding (utf-8)
//         console.log("1-->",data);
//     }
// })

// // Readig from the file -- Sync
// below code will be runn first as above function has callback which temp blockin statement
// try{
//     const data = file.readFileSync(path.join(__dirname,"file","sample.txt"),"utf-8")
//     console.log(data.toString());
//     console.log("2-->",data);
// }catch(e){
//     console.log(e);
// }

// // Readig from the file -- Promise

const fspromise = require("fs/promises");

const readfile = async () => {
  try {
    const data = await fspromise.readFile(
      path.join(__dirname, "file", "text.txt"),
      "utf-8"
    );
    console.log("3-->", data);
  } catch (e) {
    console.log(e);
  }
};

// readfile();

// const writeFile = path.join(__dirname,"file","text.txt")
// const content = "Hii, My name is Ishu and I'm learning Node.js";

// file.writeFile(writeFile, content, (err) => {
//     if (err) {
//         console.error(err);
//         throw new Error("Something went wrong");
//     } else {
//         console.log("Write Operation successfully!");
//         readfile() // for write and read;
//     }
// });

// Using Promises
const writeInFile = async (err)=>{
    try{
        await fspromise.writeFile(writeFile,content, {flag: "a+"}) // add at the end of file(file apender)
        // await fspromise.rename(writeFile, path.join(__dirname, "file", "newTxt.txt"))

        await fspromise.writeFile(writeFile,content)
        await fspromise.appendFile(writeFile, "/n this is file writing approch using Promises")
        const data = fspromise.readFile(writeFile)
        console.log((await data).toString());
    }catch(e){
        console.log(e);
    }
}

writeInFile()
