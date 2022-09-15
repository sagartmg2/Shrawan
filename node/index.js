
var name = "john"

if (true) {
    var name = "Doe changed"
}

console.log(name);
// console.log(process.argv)
// console.log(process.env)

// console.log(global);
// procces.end


// console.log(__filename);
// console.log(__dirname);

// require, exports module.

// stream and buffer 
//  20 20 20 20 20 

//  



/* node modules
    - third party 
    - core module
     - local module. 
*/


import fs from "fs"
// const fs = require("fs")

// fs.writeFileSync("custom.txt","hello world ")

let data = fs.readFileSync("./custom.txt").toString()

// fs.readFile("./custom.txt",(err,data) => {
//     console.log(data.toString())
// })

console.log(data);
console.log("data");


/* 
    common js 
    es6 module system
*/

// const path = require("path")
// const {basename} = require("path")

// console.log("basenae=",basename(__filename));
// // console.log(path.basename(__filename));
// // console.log(path.extname(__filename));

// const custom_auth = require("./auth.js")

// // const { auth, basename } = require("./auth.js")

// const auth1 = () => {
//     console.log("auth");
// }

// auth()
// custom_auth();
// auth.basename()
// auth1()

// basename();


