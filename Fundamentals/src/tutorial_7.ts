// Chanllenge Inteface

function getEmployee(): Person | DogOwner | Manager {
  const randomValue = Math.random();

  if (randomValue < 0.33) return { name: "Pratik" };
  else if (randomValue < 0.66) return { name: "Pratik", dogName: "doggy" };
  return {
    name: "Pratik",
    managePeople() {
      console.log("Manages people");
    },
    delegateTask() {
      console.log("Delegates Task");
    },
  };
}

interface Person {
  name: string;
}

interface DogOwner extends Person {
  dogName: string;
}

interface Manager extends Person {
  managePeople(): void;
  delegateTask(): void;
}

type AnyThree = Person | DogOwner | Manager;
const employee: AnyThree = getEmployee();

// Type predicate
function isManager(obj: AnyThree): obj is Manager {
  return "managePeople" in obj;
}
console.log(employee);

if (isManager(employee)) {
  employee.delegateTask();
}
