

let todos = [
    {
        "userId": 1,
        "id": 1,
        "title": "delectus aut autem",
        "completed": false
    },
    {
        "userId": 1,
        "id": 2,
        "title": "quis ut nam facilis et officia qui",
        "completed": false
    },
    {
        "userId": 1,
        "id": 3,
        "title": "fugiat veniam minus",
        "completed": false
    },
    {
        "userId": 1,
        "id": 4,
        "title": "et porro tempora",
        "completed": true
    },
    {
        "userId": 1,
        "id": 5,
        "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
        "completed": false
    },
    {
        "userId": 1,
        "id": 6,
        "title": "qui ullam ratione quibusdam voluptatem quia omnis",
        "completed": false
    },
    {
        "userId": 1,
        "id": 7,
        "title": "illo expedita consequatur quia in",
        "completed": false
    },
    {
        "userId": 1,
        "id": 8,
        "title": "quo adipisci enim quam ut ab",
        "completed": true
    },
    {
        "userId": 1,
        "id": 9,
        "title": "molestiae perspiciatis ipsa",
        "completed": true
    },
]


let completed_todos = todos.filter(el => el.completed === true)
// console.log(completed_todos);

// console.log( todos.map(el => "some value"));
// console.log(completed_todos.map(el => el.title));


let temp = []
// todos
// for (let index = 0; index < todos.length; index++) {
//     // const element = array[index];

//     if (todos[index].completed == true) {
//         temp.push(todos[index].title)
//     }

// }

todos.forEach(task => {
    if (task.completed == true) {
        temp.push(task.title)
    }
})


// console.log({ temp });


// console.log(1);
// console.log(1);
// console.log(1);
// console.log(1);



// console.log(1);
// console.log(12);
// console.log(111111);












// // for (let index = 0; index < 10; index++) {
// //     console.log("inside forloop", index);
// // }

// // setTimeout(callback,time in ms)
// // setTimeout(callback,time in ms)

// setTimeout(() => {
//     console.log("100ms timeout");
// }, 1)

// setTimeout(() => {
//     console.log("inside timeout");
// }, 0)


// function ab() {
//     cd();
//     console.log("inside ab");
// }

// function cd() {
//     console.log("cc---cd");
//     // ab();
// }

// ab()

// console.log(4444);

// let promise1 = new Promise((resolve, reject) => {
//     // setTimeout(() => {
//     resolve("success")
//     // reject("sorry")
//     // }, 0)
// })

// // console.log(promise1)


// promise1
//     .then(res => {
//         console.log({ res })
//     })
//     .catch(err => {
//         console.log({ err });
//     })




async function getUser() {
    let username = ""
    let task = await fetch('https://jsonplaceholder.typicode.com/users/2')
    // .then(response => response.json())
    // .then(json => {
    //     console.log({ json });
    //     username = json.name
    //     // document.getElementById("title").innerHTML = `${json.name}`
    // })

    // document.getElementById("initial").innerHTML = "Welcome"

    let response = await task.json();
    console.log({ response });

    console.log("the username is ", response.name);

}

getUser();




console.log("finalllllllll");



