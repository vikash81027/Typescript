// Type guards -------------------------------

// Using typeof operator
type ValueType = string | number | boolean;

let value: ValueType;

const random = Math.random();

value = random < 0.33 ? "HELLO" : random < 0.66 ? 123.456 : true;

function checkValue(value: ValueType): void {
  if (typeof value === "string") {
    console.log(value.toLowerCase());
    return;
  }
  if (typeof value === "number") {
    console.log(value.toFixed(2));
    return;
  }
  console.log(`Boolean : ${value}`);
}

checkValue(value);

// Type narrowing with discriminated union
// Occurs while using equality checks like === or !==
// Add literal type [type:'dog'] to check type
type Dog = { type: "dog"; name: string; bark(): void };
type Cat = { type: "cat"; name: string; meow(): void };

type Animal = Dog | Cat;

function makeSound(animal: Animal): void {
  if (animal.type === "cat") {
    animal.meow();
    return;
  }
  animal.bark();
}

const cat: Cat = {
  type: "cat",
  name: "Stacy",
  meow() {
    console.log("Meow Meow");
  },
};

const dog: Dog = {
  type: "dog",
  name: "Tommy",
  bark() {
    console.log("Woof Woof");
  },
};

makeSound(dog);
makeSound(cat);

// Truthy/Falsy guard
// Simple check for truthy and falsy value
// Falsy values -> 0, -0, 0n, "", null, undefined, NaN

function printLength(str: string | null | undefined): void {
  if (str) {
    console.log(str.length);
    return;
  }
  console.log("Falsy values");
}

printLength("helo");
printLength(null);

// Instance of
try {
  // throw "this is string";
  throw new Error("This is an error");
} catch (error) {
  if (error instanceof Error) {
    console.log(`Caught error : ${error.message}`);
  } else {
    console.log("unknown error");
  }
}

function checkInput(input: Date | string): string {
  if (input instanceof Date) {
    return input.toISOString();
  }
  return input;
}

console.log(checkInput(new Date(1224343)));
console.log(checkInput("Helo"));

// Type predicate
type Student = {
  name: string;
  study: () => void;
};

type User = {
  name: string;
  login: () => void;
};

type Person = Student | User;

const randomPerson = (): Person => {
  return Math.random() > 0.5
    ? { name: "john", study: () => console.log("Studying") }
    : { name: "mary", login: () => console.log("Logging in") };
};

function isStudent(person: Person): person is Student {
  if ("study" in person) {
    return true;
  }
  return false;
}

const person = randomPerson();

// const person: Person = {
//   name: "Pratik",
//   study() {
//     console.log("studying");
//   },
// };

// if (isStudent(person)) {
//   person.study();
// } else {
//   person.login(); // error as person is hardcoded
// }

console.log(isStudent(person));

// Discriminated Union, add literal type to check type
type IncrementAction = {
  type: "increment";
  amount: number;
  timestamp: number;
  user: string;
};

type DecrementAction = {
  type: "decrement";
  amount: number;
  timestamp: number;
  user: string;
};

type Action = IncrementAction | DecrementAction;

// function reduce(state: number, action: Action): number {
//   if (action.type === "decrement") {
//     state -= action.amount;
//   } else {
//     state += action.amount;
//   }
//   return state;
// }

function reduce(state: number, action: Action) {
  switch (action.type) {
    case "increment":
      return state + action.amount;
    case "decrement":
      return state - action.amount;
    default:
      const unexpectedAction: never = action;
      throw new Error(`Unexpected action : ${unexpectedAction}`);
  }
}

const newState1 = reduce(10, {
  type: "decrement",
  amount: 2,
  timestamp: 1,
  user: "Pratik",
});

const newState2 = reduce(10, {
  type: "increment",
  amount: 2,
  timestamp: 1,
  user: "Pratik",
});

console.log(newState1, newState2);
