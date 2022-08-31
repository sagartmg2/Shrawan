// console.log("load me.");

// console.log("final\"s-para", document.getElementById("final-para"))


function handleSubmit(event) {
    event.preventDefault();

    let object = {
        a: 1,
        b: 2,
        c: 3,
        d: 4
    }

    let parent_object = {
        key: object
    }


    // let { d, e } = object
    // console.log({ d })
    // console.log({ e })

    // let { a, b } = parent_object.key

    // console.log(a);
    // console.log(b);
    // console.log(parent_object.key.a)
    // console.log(parent_object.key.b)


    // return;

    console.log(event.target)
    console.log(event.target.username.value)
    // return;

    // console.log(event.target.email)
    // console.log(event.target.password.value)

    let { email, username, password } = event.target

    let data = {
        username: username.value,
        password: password.value
    }

    console.log(data);
    // console.log("here")
    // let username = document.getElementById("username").value
    // console.log({username})
    // api call


}