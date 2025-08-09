// Intersection type

type Admin = {
  name: string;
  privilages: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type ElevatedEmployee = Admin & Employee;

const emp1: ElevatedEmployee = {
  name: "Pratik",
  privilages: ["notthing"],
  startDate: new Date(),
};

type Comibinable = string | number;
type Numeric = number | boolean;

type Universal = Comibinable & Numeric;

let num1: Universal = 123;

// Type Guards

function add(a: Comibinable, b: Comibinable) {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }

  return a + b;
}

// in operator to check the instance
type UnknownEmployee = Admin | Employee;
function showEmployeeData(emp: UnknownEmployee) {
  console.log(emp.name);

  if ("privilages" in emp) {
    console.log(emp.privilages);
  }
  if ("startDate" in emp) {
    console.log(emp.startDate);
  }
}

showEmployeeData({
  name: "Pratik",
  startDate: new Date(2005, 2, 2, 12, 12, 4),
});

//  Union instanceof operator
class Car {
  drive() {
    console.log("vroom vroom !");
  }

  takeFamily() {
    console.log("Picnic");
  }
}

class Truck {
  drive() {
    console.log("rrrr....");
  }

  loadCoal() {
    console.log("Loading cargo");
  }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(v: Vehicle) {
  if (v instanceof Car) {
    v.takeFamily();
  }

  if (v instanceof Truck) {
    v.loadCoal();
  }
}

//  Discriminated unions
interface Bird {
  type: "bird";
  flyingSpeed: number;
}

interface Horse {
  type: "horse";
  runningSpeed: number;
}

type Animal = Bird | Horse;

function moverAnimal(animal: Animal) {
  if (animal.type === "bird") {
    console.log("It's a bird");
    console.log(animal.flyingSpeed);
  }

  if (animal.type === "horse") {
    console.log("It's a horse");
  }
}

//  Type casting
const para = document.querySelector(".p") as HTMLParagraphElement;
const inputField = <HTMLInputElement>document.querySelector(".input-field");

console.log(inputField.value);

//  index Properties
interface ErrorContainer {
  [prop: string]: string;
}

const errorBag: ErrorContainer = {
  email: "not valid",
  username: "Must start with capital letter",
};
console.log(errorBag.username);

// Function Overload
function add1(a: number, b: number): number;
function add1(a: string, b: string): string;
function add1(a: Comibinable, b: Comibinable) {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }

  return a + b;
}

// we cannot call the methods of string or number on the result as its Combinable

// Optional Chainging

const fetchedData = {
  id: "u1",
  name: "Pratik",
  job: { des: "my company" },
};

// console.log(fetchedData?.job?.title);

const app = undefined ?? "Hello";
