

// for (let i = 1; i <= 10; i++) {
//     let num = 8
//     // console.log(num + " x " + i + " = ",num * i)
//     console.log(`${num} x  ${i} = ${num * i} `);
// }

// calculateMultiplication(8,10)

// let obj = {
//     1: "one",
//     brand: "levis",
//     brand: "222",
//     Brand: "3333"
// }

// // console.log(obj.brand);
// console.log(obj["brand"]);

// // console.log([1, 2, 3, 4][3]);


/*
global = var,let,contst
block = let, const
functional scope = var,let, const
*/

// let <variable> = ["1,",123]
// let arr = ["1", 222, "3333", 444, 555]

/*
typeof
loop  - for
*/
// let numerical_datas = []
// // console.log(arr.length);

// for (let i = 0; i < arr.length; i++) {
//     // console.log(typeof(arr[i]))
//     if (typeof (arr[i]) == "number") {
//         // console.log(arr[i]);
//         numerical_datas.push(arr[i])
//     }
// }


// console.log({ numerical_datas });


// arr.filter()


// console.log(arr[2] = "second");
// let temp = [];
// console.log(arr.push("third"));

// arr = [...arr, "fourth"]

// arr.unshift("zeroth")
// arr.pop()
// arr.shift()
// arr.splice(2, 2, "custom")
// arr.splice(3, 0, "custom")

// let arr2 = arr.slice(1,3)
// console.log(arr);
// console.log({ arr2 });


//      CALLBACK  => function which is passed to another function 


// function filtrate(element) {
//     return typeof (element) == "number"
// }

// let filtrate = (element) => { return typeof (element) == "number" }
// let filtrate = (element) => typeof (element) == "number"

// console.log(arr.filter(filtrate))

// console.log(arr.filter((element) => typeof (element) == "number"))

// console.log({ arr });
let arr = ["1", 222, "3333", 444, 555]

// console.log(arr.filter((element) => false))
console.log(arr.map((element) => { return element }))
// arr.filter(for each element, return true || false  )
// arr[i]

// console.log(filtrate("string"));
// console.log(filtrate(12));












