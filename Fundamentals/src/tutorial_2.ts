// Arrays

let prices: number[] = [100, 75, 42];
let randomVAlues: string[] = [];

console.log(prices, randomVAlues);

let names = ["Pratik", "Om", 1];
let array: (string | boolean)[] = ["hello world", false];

console.log(names, array);

let temperatures = [20, 40, 50];
let colors = ["blue", "green"];
let newArray: (string | number)[] = [...temperatures, ...colors];

console.log(newArray);

// Object Fundamentals
type cars = { brand: string; year: number };
let car1: cars = { brand: "toyota", year: 2020 };
let car2: cars = { brand: "mahindra", year: 2010 };
car1.year = 2024;

console.log(car1, car2);

type items = { title?: string; readonly cost: number };

let book = { cost: 20 };
let pen = { title: "Trimax", cost: 40 };
let noteBook = { title: "classmate", cost: 200 };

let productArray: items[] = [book, pen, noteBook];
// productArray[2].cost = 100; // error coz read only

console.log(productArray);

// Challenge

type productsType = { brand: string; year: number };
let bike: productsType = { brand: "Yamaha", year: 2010 };
let laptop: productsType = { brand: "Dell", year: 2020 };

let products: productsType[] = [bike, laptop];
console.log(products);
