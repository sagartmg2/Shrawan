

// function auth()
// {

// }

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


