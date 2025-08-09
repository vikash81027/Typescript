// Type Assertion
// Handy with DOM elements

let someValue: any = "This is a normal string";

let strLength: number = (someValue as string).length;
console.log(strLength);

type Bird = { name: string };

let birdString = `{"name" : "Eagle"}`;
let birdObject = JSON.parse(birdString);

let bird = birdObject as Bird;

console.log(bird.name);

enum Status {
  pending = "pending",
  Declined = "declined",
}

type User = {
  name: string;
  status: Status;
};

// if Status.pending is saved in DB, It's saved as string
// retrieve string from the DB

const statusValue = "pending";

const user: User = { name: "John", status: statusValue as Status };
console.log(user);

// Type - unknown -----------------------
// Type-safe counterpart of the any type
// Need to check type before processing
// Used in try catch block as anything can be thrown from try block

let unknownValue: unknown;
unknownValue = "Hello world";
unknownValue = 23.1;
unknownValue = [1, 2, 3];

if (typeof unknownValue === "number") {
  unknownValue.toFixed(2);
}

// Type - never --------------------------
// Represents the type of values that never occur.
// Can't assign any value to type never

type Theme = "light" | "dark";

function checkTheme(theme: Theme): void {
  if (theme === "light") {
    console.log("light Theme");
    return;
  }
  if (theme === "dark") {
    console.log("dark Theme");
    return;
  }
  // We handled all the possible values for theme so it's now type never
  theme;
}

enum Color {
  Red,
  Blue,
  Green,
}

function colorReducer(color: Color) {
  switch (color) {
    case Color.Blue:
      return "Blue";
    case Color.Red:
      return "Red";
    case Color.Green:
      return "green";
    default:
      // it will giver error if any case is unhandled
      let unexpectedValue: never = color;
      throw new Error(`unexpected value : ${unexpectedValue}`);
  }
}

console.log(colorReducer(Color.Blue));
console.log(colorReducer(Color.Green));
