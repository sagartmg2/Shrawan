



/*
    modules 
    - core moudles  (fs , process,path, http)
    - third party modules
    - local modules
*/

const fs = require("fs") // common js 
// import fs from "fs" // es6 module systme

// console.log(fs.readFileSync("./auth.js").toString())
// const path = require("path") 
// const process = require("process") 

const auth = require("./auth")
auth.authenticate();

const http = require("http")

const server = http.createServer((req, res) => {
    // console.log("here")
    // res.write("hello world");

    // console.log(req.url);
    // console.log(req.method);
    // if(req.url)

    if (req.url == "/products") {
        if (req.method == "GET") {
            let buffer_data = fs.readFileSync("./data.json")
            data = JSON.parse(buffer_data)

            res.write(JSON.stringify(data.products));
            // res.write(data.products)
            res.end();
        } else if (req.method === "POST") {
            console.log("insert in database. ");
            // first get the data from requts body. 
            req.on("data", (chunk) => {

                let request_data = JSON.parse(chunk)
                let fs_data = fs.readFileSync("./data.json")
                fs_data = JSON.parse(fs_data)

                fs_data.products.push(request_data)

                fs.writeFileSync("data.json", JSON.stringify(fs_data))

                res.write(JSON.stringify(fs_data))
                res.end();
            })
        } else if (req.method === "DELETE") {
            req.on("data", (chunk) => {
                let fs_data = fs.readFileSync("./data.json")

                let request_data = JSON.parse(chunk)
                fs_data = JSON.parse(fs_data)

                fs_data.products = fs_data.products.filter(product => product.id != request_data.id)

                // fs_data.products = fs_data.products.map(product => {
                //     if (product.id == request_data.id) {
                //         return {
                //             id: request_data.id,
                //             name: request_data.name,
                //         }
                //     }
                //     return product
                // })

                fs.writeFileSync("data.json", JSON.stringify(fs_data))

                res.write(JSON.stringify(fs_data))
                res.end();
            })
        }
    } else if (req.url === "/users") {
        if (req.method == "GET") {
            let buffer_data = fs.readFileSync("./data.json")
            data = JSON.parse(buffer_data)

            res.write(JSON.stringify(data.users));
            res.end();
        }

    } else {
        res.writeHead(404)
        // res.write("404 resource not found ")
        res.write("resource not found")
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







