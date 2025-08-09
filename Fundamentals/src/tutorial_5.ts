// Type alias - for reusability
type User = { id: number; name: string; isActive: boolean };
const john: User = {
  id: 1,
  name: "john",
  isActive: true,
};

const susan: User = {
  id: 1,
  name: "susan",
  isActive: false,
};

function createUser(user: User): User {
  console.log(`Hello there ${user.name.toUpperCase()} !!!`);

  return user;
}
createUser(john);
createUser(susan);
type Theme = "light" | "dark";

function setTheme(t: Theme) {
  return t;
}

const theme = setTheme("dark");
console.log(theme);
// Challenge
type Employee = { id: number; name: string; department: string };
type Manager = { id: number; name: string; employees: Employee[] };
type Staff = Employee | Manager;

function getStaffDetails(staff: Staff): string {
  if ("employees" in staff) {
    return `Staff is a manager and manages ${staff?.employees.length} employees`;
  }
  return `Staff is an employee and is under ${staff.department}`;
}

const bob: Employee = { id: 1, name: "Bob King", department: "HR" };
const marley: Employee = { id: 2, name: "Marley Swans", department: "Sales" };
const adam: Manager = { id: 1, name: "Adam Eve", employees: [bob, marley] };

console.log(getStaffDetails(bob));
console.log(getStaffDetails(adam));

// Intersection type
type Book = { id: number; name: string; price: number };
type DiscountedBook = Book & { discount: number };

const book1: Book = {
  id: 1,
  name: "Story of my Wife",
  price: 100,
};

const discountedBook: DiscountedBook = {
  id: 2,
  name: "Flames of wire",
  price: 100,
  discount: 10,
};

console.log(book1, discountedBook);

// Computed properties
const propName = "age";
type Animal = {
  [propName]: number;
};
let tiger: Animal = { age: 5 };

console.log(tiger);
