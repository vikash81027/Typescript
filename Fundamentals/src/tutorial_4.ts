function processInput(input: string | number) {
  // type guard
  if (typeof input === "string") {
    return input.toUpperCase();
  }
  return input.toFixed(2);
}

console.log(processInput("Hello, World!"), processInput(123.456));

// Object as function parameter
type employeeInput = { name: string; age: number };

type employeeType = employeeInput & { id: number; isActive: boolean };
function createEmploye(employeData: employeeInput): employeeType {
  const newId: number = Math.floor(Math.random() * 10);
  const isActive: boolean = newId % 2 == 0;
  return { id: newId, ...employeData, isActive };
}

const employee1 = createEmploye({ name: "Pratik", age: 21 });
console.log(employee1);

// Typescript doesn't throw error for object passed to func having excess properties
// it only checks for inline object. ITS INTENTIONAL BEHAVIOR
const emp = { name: "Ishaan", age: 22, isGood: true };
console.log(createEmploye(emp));

function greetEmployee(employee: employeeType): void {
  console.log(
    `Hi ${employee.name}. You are ${employee.isActive ? "active" : "inactive"}`
  );
}
greetEmployee(employee1);

// Challenge
function processData(
  input: string | number,
  config: { reverse: boolean } = { reverse: false }
) {
  if (typeof input === "number") {
    return input * input;
  }
  return config.reverse
    ? input.split("").reverse().join("").toUpperCase()
    : input.toUpperCase();
}
console.log(processData("Pratik", { reverse: true }));
