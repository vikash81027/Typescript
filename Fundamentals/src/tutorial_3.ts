// Functions ------------------------------------------

// function sayHi(name: string) {
//   return `Hi there! ${name.toUpperCase()}`;
// }

// console.log(sayHi("Pratik"));

// function calculateDiscount(price: number): number {
//   return price * 0.9;
// }
// const finalPrice = calculateDiscount(300);
// console.log(finalPrice);

// function add(num1: string, num2: number) {
//   return num1 + num2;
// }
// console.log(add("2", 2));

// Although it return number its type will be any as parameter is of type any -----
// function returnsAny(num1: any, num2: number[]) {
//   return num1 + num2;
// }
// console.log(returnsAny(2, [2, 3, 4]));

// Challenge ---------------------------------------------------

// const names: string[] = ["Pratik", "Om", "Rahul", "Rohit"];

// function has(name: string): boolean {
//   return names.includes(name);
// }

// console.log(has("Pratik"));
// console.log(has("gg"));

// Optional Parameters ------------------------------------------

// As discount is optional value could be undefined so we short circuit it with || 0
function calculateDiscount(price: number, discount?: number): number {
  return price - (discount || 0);
}

let priceAfterDiscount = calculateDiscount(100, 10);
console.log(priceAfterDiscount);

function calculateScore(
  initialScore: number,
  penaltyScore: number = 0
): number {
  return initialScore - penaltyScore;
}

let scoreAfterPenalty = calculateScore(100, 10);
console.log(scoreAfterPenalty);
function sum(message: string, ...numbers: number[]): string {
  return message + numbers.reduce((acc, curr) => acc + curr, 0);
}

let result = sum("The total is ", 1, 2, 3);
console.log(result);

// void means function wont return anything
function logMessage(message: string): void {
  console.log(message);
}

logMessage("Hello World");
