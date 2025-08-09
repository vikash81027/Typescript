// Tuple -> array of fixed length and grouped types

// elements can b pushed without error
let person: [string, number] = ["Pratik", 21];

// To stop this behavior we can add readonly
let animals: readonly [string, string] = ["Dog", "Cat"];
// animals.push('snake'); error

console.log(animals);
person.push(1);
function getPerson(): [string, number] {
  return person;
}

console.log(getPerson());

// Enums -> set of named constants

enum ServerResponseStatus {
  Success = 200,
  Error = 500,
}

// If the enum values are number (default) then it also does reverse mapping
Object.values(ServerResponseStatus).forEach((value) => {
  if (typeof value === "string") console.log(value);
});

interface ServerResponse {
  result: ServerResponseStatus;
  data: string[];
}

function getServerResponse(): ServerResponse {
  return {
    // result: ServerResponseStatus.Error,
    result: 200, // Can assign number to enum but not string as numbers are reversed map
    data: ["first", "second"],
  };
}

const response: ServerResponse = getServerResponse();
console.log(response);

enum UserRole {
  Admin,
  Manager,
  Employee,
}

type User = {
  id: number;
  name: string;
  role: UserRole;
  contact: [string, string];
};

function createUser(user: User): User {
  return user;
}

const createdUser = createUser({
  id: 123,
  name: "Pratik",
  role: UserRole.Manager,
  contact: ["o@gmail.com", "+91 7846902017"],
});

console.log(createdUser);
