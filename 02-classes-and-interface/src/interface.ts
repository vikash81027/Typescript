// let a;
// a = "PRatik";
// console.log(a);

// function fun(a): void {
//   console.log("hello");
// }

// import newAdd from "./es6.js";

// console.log("ans is " + newAdd(1, 2, 3));

interface Named {
  readonly name?: string;
  outputName?: string;
}

interface Greetable extends Named {
  // readonly name: string;
  age?: number;

  greet(phrase: string): void;
}

class Person implements Greetable {
  constructor(public name: string, public age?: number) {}
  greet(phrase: string): void {
    console.log(phrase);
  }
}
let user1: Greetable;
const randomUser = new Person("helo");
user1 = {
  name: "Pratik",
  age: 19,
  greet(phrase: string) {
    console.log(phrase);
  },
};

interface AddFn {
  (a: number, b: number): number;
}

type addFn = (num1: number, num2: number) => number;

let add: addFn;

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
