let userInput: unknown;

userInput = 5;
userInput = "Pratik";

function genError(message: string, errorCode: number): never {
  throw { message: message, errorCode: errorCode };
}

console.log(genError("Not found", 404));

// if (true) {
//   let a = 12;
// }

// console.log(a);

console.log(Math.floor(4));
