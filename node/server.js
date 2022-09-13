



/*
    modules 
    - core moudles  (fs , process,path, http)
    - third party modules
    - local modules
*/

const fs = require("fs") // common js 
// import fs from "fs" // es6 module systme

// console.log(fs.readFileSync("./auth.js").toString())

const auth = require("./auth")
// auth.authenticate();

const http = require("http")
const { runInNewContext } = require("vm")


const server = http.createServer((req, res) => {
    // console.log("here")
    // res.write("hello world");

    // console.log(req.url);
    // console.log(req.method);
    // if(req.url)

    if (req.url == "/products") {

        if (req.method == "GET") {
            let products = fs.readFileSync("./data.json")
            res.write(products)
            res.end();
        } else if (req.method === "POST") {
            console.log("insert in database. ");

            // first get the data from requts body. 


        }
    } else {
        res.writeHead(500)
        // res.write("404 resource not found ")
        res.write("Server error  ")
        res.end();
    }

})

server.listen(8000, (err, data) => {
    console.log("listening....");
})


/* 
    http request methods --  get ,put....

    CRUD operations
    C - crate     POST request
    R - read      GET request  
    U - upadte    PUT || PATCH
    D - delete    DELETE

    STATUS CODE
    1  --- information 
    2  -- success 
        200  - with content
        201 
        204  - no content
    3 -- waring.. || redirect 
        302 
        304
    4
        400  - bad reqeust 
        401 -  unauthenticated..
        402
        403  -  forbidden 
        404 --  resource  not found
    5
        500 --  server error. 

*/







