console.log("----Decorators-------");

function Logger(constructor: Function) {
  console.log("Logging");
  console.log(constructor);
}

@Logger
class Person {
  constructor(private name: string) {
    console.log("New person craeted");
  }
}

const p1 = new Person("Pratik");
