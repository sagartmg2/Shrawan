
/* 
    OOP - object oriented programming.  (inherntence, encapsulation, polymorphism, abstraction. )
            java,php - string class based 
            javascript - both class and function
    Class
        - class is a blueprint of an object
*/


// function Projector(brand) {
//     return {
//         brand: brand,
//         color: "white",
//         price: "50k",
//         project: () => {
//             console.log("it can project on screen ")
//         }
//     }
// }

function Projector(brand, color) {
    this.brand = brand;
    this.color = color;
    // this.project  = () => {
    //     console.log("it can project on screen " + JSON.stringify(this))
    // }
}

Projector.prototype.project = () => {
    console.log("it can project on screen ")
}

let projector_final = new Projector("Lg", "white");
let projector_final_2 = new Projector("Samsung");
projector_final.project()
// console.log(projector_final);
// console.log({ projector_final_2 });


class Employee {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
        // private bonous = 2000;
    }

    #bonous = 500;

    calculateSalary() {
        console.log("total is " + (this.salary + this.#bonous));
    }

    // getter method
    getBonus()
    {
        return this.#bonous;
    }

    setBonus(value)
    {
        this.#bonous = value;
    }

    //setter method

}

let emp1 = new Employee("John", 1000)
let emp2 = new Employee("Ram", 1000)
emp2.bonus = 200000;
console.log(emp1);
console.log(emp2);




class Animal {
    constructor(name, sound) {
        this.name = name;
        this.sound = sound;
        this.legs_count = 4;
    }
    
    makeSound() {
        console.log("making sound..." + this.sound);
    }
}

class Dog extends Animal {
    constructor() {
        super("Dog", "bark");
    }
}
class Cat extends Animal {
    constructor() {
        super("Dog", "bark");
    }
}

let dog2 = new Dog();
let dog3 = new Dog();

let dog1 = new Animal("dog", "bark")
let cat = new Cat()

// console.log(dog2);
// console.log(dog3);
console.log(dog2);
console.log(cat);

// let dog1 = {
//     legs_counts:4
// }

// let cat1 = {
//     legs_counts:4
// }



let projector1 = {
    brand: "Lg",
    color: "white",
    price: "50k",
    project: () => {
        console.log("it can project on screen ")
    }
}

let projector2 = {
    color: "balck",
    price: "50k",
    project: () => {
        console.log("it can project on screen ")
    }
}

let projector3 = {
    color: "balck",
    price: "50k",
    project: () => {
        console.log("it can project on screen ")
    }
}

let projector4 = {
    color: "balck",
    price: "50k",
    project: () => {
        console.log("it can project on screen ")
    }
}

let projector5 = {
    color: "balck",
    price: "50k",
    project: () => {
        console.log("it can project on screen ")
    }
}

