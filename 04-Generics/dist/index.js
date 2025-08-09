"use strict";
const names = []; // same as string[]
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("apple ball ");
    }, 2000);
    let a = 2;
    if (a === 2) {
        reject(1);
    }
});
promise.then((data) => data.split(" ")).catch((err) => console.log(err));
//  generic Constraints
function merge1(objA, objB) {
    return Object.assign(Object.assign({}, objA), objB);
}
function merge2(objA, objB) {
    return Object.assign(Object.assign({}, objA), objB);
}
const mergedObj = merge2({ fullname: "Pratik" }, { age: 20 });
console.log(mergedObj.age);
function foo(num) {
    return num;
}
console.log(foo({ name: "Pratik" }).name);
console.log(foo(2).toFixed(2));
function countAndPrint(ele) {
    let desc = "Got no values";
    console.log(ele.length);
    return [ele, desc];
}
function extractAndConvert(obj, key) {
    return obj[key];
}
// Generic Classes
class Storage1 {
    constructor() {
        this.data = [];
    }
    addItem(item) {
        this.data.push(item);
    }
    removeItem(item) {
        if (this.data.indexOf(item) !== -1) {
            this.data.splice(this.data.indexOf(item), 1);
        }
    }
}
const randomList = ["PRatik", "Rout"];
// randomList.push("helo"); error as it is readonly
// partial generic class
const partialList = {}; // makes properties optional
