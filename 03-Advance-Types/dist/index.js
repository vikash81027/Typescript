"use strict";
// Intersection type
const emp1 = {
    name: "Pratik",
    privilages: ["notthing"],
    startDate: new Date(),
};
let num1 = 123;
// Type Guards
function add(a, b) {
    if (typeof a === "string" || typeof b === "string") {
        return a.toString() + b.toString();
    }
    return a + b;
}
function showEmployeeData(emp) {
    console.log(emp.name);
    if ("privilages" in emp) {
        console.log(emp.privilages);
    }
    if ("startDate" in emp) {
        console.log(emp.startDate);
    }
}
showEmployeeData({
    name: "Pratik",
    startDate: new Date(2005, 2, 2, 12, 12, 4),
});
//  Union instanceof operator
class Car {
    drive() {
        console.log("vroom vroom !");
    }
    takeFamily() {
        console.log("Picnic");
    }
}
class Truck {
    drive() {
        console.log("rrrr....");
    }
    loadCoal() {
        console.log("Loading cargo");
    }
}
const v1 = new Car();
const v2 = new Truck();
function useVehicle(v) {
    if (v instanceof Car) {
        v.takeFamily();
    }
    if (v instanceof Truck) {
        v.loadCoal();
    }
}
function moverAnimal(animal) {
    if (animal.type === "bird") {
        console.log("It's a bird");
        console.log(animal.flyingSpeed);
    }
    if (animal.type === "horse") {
        console.log("It's a horse");
    }
}
//  Type casting
const para = document.querySelector(".p");
const inputField = document.querySelector(".input-field");
console.log(inputField.value);
const errorBag = {
    email: "not valid",
    username: "Must start with capital letter",
};
console.log(errorBag["email"]);
function add1(a, b) {
    if (typeof a === "string" || typeof b === "string") {
        return a.toString() + b.toString();
    }
    return a + b;
}
// we cannot call the methods of string or number on the result as its Combinable
// Optional Chainging
const fetchedData = {
    id: "u1",
    name: "Pratik",
    job: { des: "my company" },
};
// console.log(fetchedData?.job?.title);
const app = undefined !== null && undefined !== void 0 ? undefined : "Hello";
