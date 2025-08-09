class Book {
  // private -> can not be accessed outside, only within the class
  private checkedOut: boolean = false;

  // short cut constructor
  //  readonly -> can not be assigned any value later
  constructor(public readonly title: string, public readonly author: string) {}

  get info() {
    return `${this.title} By ${this.author}`;
  }

  set checkOut(checkedOut: boolean) {
    this.checkedOut = checkedOut;
  }

  changeCheckdOut() {
    this.checkedOut = this.toggleCheckedOut();
    return this.checkedOut;
  }

  public isCheckedOut() {
    return this.checkedOut;
  }

  private toggleCheckedOut() {
    return !this.checkedOut;
  }
}

const deepWork = new Book("deepwork", "Anon");
console.log(deepWork);
deepWork.changeCheckdOut();
console.log(deepWork);

interface IPerson {
  name: string;
  age: number;
  greet(): void;
}

class Person implements IPerson {
  // can not implement multiple constructors
  constructor(public name: string, public age: number) {}
  greet(): void {
    console.log(
      `Hello, My bame is ${this.name} and I'm ${this.age} years old.`
    );
  }
}

const hippy = new Person("Apple", 21);

console.log(hippy);
