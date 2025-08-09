// const person: { fullName: string; age: number } = {
//   age: 20,
//   fullName: "Pratik",
// };

/*
const person: {
  age: number;
  fullName: string;
  hobbies: string[];
  role: [number, string];
} = {
  age: 20,
  fullName: "Pratik",
  hobbies: ["Games", "Cooking"],
  role: [2, "full-stack dev"],
};

// person.role.push("apple");
person.role[0] = 1;
console.log(person.role);
*/

// ENUM
enum Role {
  ADMIN = 10,
  READ_ONLY,
  AUTHOR,
}

const person = {
  age: 20,
  fullName: "Pratik",
  hobbies: ["Games", "Cooking"],
  role: Role.ADMIN,
};

let favActivities: string[];
favActivities = ["apple"];

let newActivities: any[];
newActivities = ["a", 1];

console.log(person.age);

for (const hobby of person.hobbies) {
  console.log(hobby.toLowerCase());
  // hobby.join('') gives an error
}
