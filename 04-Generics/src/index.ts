const names: Array<string> = []; // same as string[]

const promise: Promise<string> = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("apple ball ");
  }, 2000);
  let a = 2;
  if (a === 2) {
    reject(1);
  }
});

promise.then((data) => data.split(" ")).catch((err) => console.log(err));

//  generic Constraints
function merge1<T extends object, U extends object>(objA: T, objB: U) {
  return { ...objA, ...objB };
}

// custom class constraints
type Person = {
  fullname: string;
};

function merge2<T extends Person, U extends object>(objA: T, objB: U) {
  return { ...objA, ...objB };
}

const mergedObj = merge2({ fullname: "Pratik" }, { age: 20 });
console.log(mergedObj.age);

function foo<T>(num: T) {
  return num;
}

console.log(foo({ name: "Pratik" }).name);
console.log(foo(2).toFixed(2));

interface hasLength {
  length: number;
}
function countAndPrint<T extends hasLength>(ele: T): [T, string] {
  let desc = "Got no values";

  console.log(ele.length);
  return [ele, desc];
}

function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return obj[key];
}

// Generic Classes

class Storage1<T> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    if (this.data.indexOf(item) !== -1) {
      this.data.splice(this.data.indexOf(item), 1);
    }
  }
}
const objnew = new Storage1<string>();
// Generic utility type

interface CourseGoal {
  title: string;
  des: string;
  completeUntil: Date;
}

const randomList: Readonly<string[]> = ["Pratik", "Rout"];
// randomList.push("helo"); error as it is readonly
// partial generic class
const partialList: Partial<CourseGoal> = {}; // makes properties optional
