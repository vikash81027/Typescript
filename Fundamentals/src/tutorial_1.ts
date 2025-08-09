// String
let awesomeName: string = "Ompratik";
awesomeName = awesomeName.toUpperCase();
console.log(awesomeName);

// Number
let amount: number = 20;
amount = 12 - 1;
console.log(amount);

// Boolean
let isAwesome: boolean = true;
isAwesome = false;
console.log(isAwesome);

// Type inference
let value = 2;
console.log(value);

// Union Type
let tax: number | string = 10;
tax = "30%";
console.log(tax);

// Literal type
let responseStatus: "Pending" | "success" | "error" = "Pending";
responseStatus = "success";
console.log(responseStatus);
// Type any -> Lets u opt out of type checking
let notSure: any = 3;
notSure = "not even sure";
notSure = false;
console.log(notSure);
const books = ["Wings of fires", "Freedom", "Jujutsu Kaisen"];
let foundBook: string | undefined;

for (let book of books) {
  if (book === "Freedom") {
    foundBook = book;
    break;
  }
}

// as it could be undefined during runtime use optional chaining
console.log(foundBook?.length);
