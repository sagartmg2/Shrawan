



const auth = () => {
    console.log("auth");
}

const basename = () => {
    console.log("basename");
}
// auth();

// default export
// module.exports = auth

// named-export
// module.exports.auth = auth
// module.exports.basename = basename


module.exports = {
    auth:auth,
    basename:basename
}

const authenticate = () => {
    console.log("authentication....")

}

const checkSeller = () => {
    console.log("authentication....")

}


// default export 
module.exports = authenticate
// module

// module.exports.authenticate = authenticate

module.exports = {
    authenticate,
    checkSeller
}

