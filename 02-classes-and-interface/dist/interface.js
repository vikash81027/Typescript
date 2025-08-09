"use strict";
// let a;
// a = "PRatik";
// console.log(a);
class Person {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet(phrase) {
        console.log(phrase);
    }
}
let user1;
const randomUser = new Person("helo");
user1 = {
    name: "Pratik",
    age: 19,
    greet(phrase) {
        console.log(phrase);
    },
};
let add;
add = (num1, num2) => num1 + num2;
/*
function computeAmount(): Calculator {
  return new Calculator();
}


class Calculator {
  amount = 0;

  lakhs(val: number) {
    this.amount += val * 100000;
    return this;
  }

  crores(val: number) {
    this.amount += val * 10000000;
    return this;
  }

  thousands(val: number) {
    this.amount += val * 1000;
    return this;
  }

  ones(val: number) {
    this.amount += val;
    return this;
  }

  value() {
    return this.amount;
  }
}

console.log(computeAmount().crores(100).lakhs(10).ones(90).value());
*/
