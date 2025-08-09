import { type Random } from "./types";
// let arr1: string[] = ["Apple", "Banana"];
// let arr2: number[] = [1.2, 2.3];
// let arr3: boolean[] = [true, false];

// new declaration
let arr1: Array<string> = ["Apple", "Banana"];
function getLength<T>(arr: T[]): number {
  return arr.length;
}

console.log(getLength(arr1));

function getValue<T>(arg: T): T {
  return arg;
}

console.log(getValue("helo"));
console.log(getValue(123));
console.log(getValue([1, 2, 3]));

interface GenericInterface<T> {
  value: T;
  getValue(): T;
}

const genericString: GenericInterface<String> = {
  value: "Hellow World",
  getValue() {
    return this.value;
  },
};
console.log(genericString.getValue());

async function someFunc(): Promise<string> {
  return "This is a string";
}

const result: string = await someFunc();
console.log(result);

// Create Array

function createArray<T>(...arr: T[]): Array<T> {
  return arr;
}

const stringArr = createArray<string>("1", "two", "three");
const numberArr = createArray<number>(1, 2, 3);

console.log(stringArr, numberArr);

// Multiple types
function pair<T, U>(param1: T, param2: U): [T, U] {
  return [param1, param2];
}

let res = pair<number, string>(123, "hello");
console.log(res);

// Type constraints

function processValue<T extends string>(value: T): T {
  return value;
}

console.log(processValue("Helo world"));

type Car = {
  brand: string;
  model: string;
};

const car: Car = {
  brand: "ford",
  model: "mustang",
};

type Product = {
  name: string;
  price: number;
};
const product: Product = {
  name: "shoes",
  price: 1.99,
};

type Student = {
  name: string;
  age: number;
};

const student: Student = {
  name: "Pratik",
  age: 21,
};

function printName<T extends { name: string }>(input: T): void {
  console.log(input.name);
}

printName(student);
printName(product);

// Default type

type StoreData<T = any> = {
  data: T[];
};

const storeNumbers: StoreData<number> = {
  data: [1, 2, 3, 4],
};
console.log(storeNumbers);

const randomStuff: StoreData = {
  data: ["random", 1],
};
console.log(randomStuff);

const obj: Random = {
  name: "Silver hand",
};
console.log(obj);


