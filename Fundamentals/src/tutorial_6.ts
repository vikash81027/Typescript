// Interface - Fundamentals
// only allows to create blueprint for objects

interface Book {
  readonly isbn: number;
  title: string;
  author: string;
  genre?: string;
  // mehtod
  getAuthor(): string;
  getTitle(message: string): string;
  printSomething: (someValue: number) => number;
}

const deepWork: Book = {
  isbn: 123,
  title: "Deep Work",
  author: "Cal Newport",
  genre: "Self Help",
  getAuthor() {
    return this.author;
  },
  getTitle(message) {
    return `${this.title} and ${message.toUpperCase()}`;
  },
  // 1st option
  // printSomething: function (someValue) {
  //   return someValue;
  // },
  // 2nd option
  // printSomething: (someValue) => {
  //   console.log(deepWork.title);
  //   return someValue;
  // },
  // 3rd option
  printSomething(someValue) {
    return someValue;
  },
};

console.log(deepWork.getAuthor());
console.log(deepWork.printSomething(1));

// Challenge

interface Computer {
  readonly id: number;
  brand: string;
  ram: number;
  storage?: number;

  upgradeRam(extra: number): number;
}

const dellG5: Computer = {
  id: 2123,
  brand: "Dell",
  ram: 16,
  upgradeRam(extra) {
    this.ram += extra;
    return this.ram;
  },
};

console.log(dellG5.upgradeRam(16));

interface Person {
  name: string;

  getDetails(): string;
}

// Reopenoing interface -> Declaration merging
interface Person {
  age: number;
}

interface DogOwner {
  dogName: string;
  getDogDetails(): string;
}

const person: Person = {
  name: "Pratik",
  age: 21,
  getDetails() {
    return `Name : ${this.name}, Age : ${this.age}`;
  },
};

console.log(person.getDetails());

// extend Employee
interface Emloyee extends Person {
  employeeId: number;
}

const employee: Emloyee = {
  name: "Sri",
  age: 30,
  employeeId: 1242,
  getDetails() {
    return `Name : ${this.name}, Age : ${this.age}, Enployee ID : ${this.employeeId}`;
  },
};
console.log(employee.getDetails());

interface Manager extends Person, DogOwner {
  managePeople(): void;
}

const manager: Manager = {
  name: "Pratik",
  age: 21,
  dogName: "Doggy",
  getDetails() {
    return `Name : ${this.name}, Age : ${this.age}`;
  },
  getDogDetails() {
    return `Dog Name : ${this.dogName}`;
  },
  managePeople() {
    console.log("Manages people");
  },
};

manager.managePeople();
