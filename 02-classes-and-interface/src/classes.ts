abstract class Department {
  // name: string;
  // id: number;
  protected employees: string[] = [];
  static year = 2024;
  constructor(public readonly name: string, private id: number) {
    // this.name = n;
    // this.id = id;
  }

  describe(this: Department) {
    console.log(this.name);
  }

  addEmployees(employee: string) {
    this.employees.push(employee);
  }

  static checkName() {
    return Department.year;
  }

  abstract randomMethod(): void;
}

class abc extends Department {
  randomMethod(): void {}
}

class ITDepartment extends Department {
  private lastReport: string;
  private static instance: ITDepartment;

  get getLastReport() {
    return this.lastReport;
  }

  set getLastReport(value: string) {
    this.lastReport = value;
  }

  private constructor(name: string, id: number, public admins: string[]) {
    super(name, id);
    this.lastReport = "Random";
  }

  addEmployees(employee: string) {
    this.employees.push(employee + "helo");
  }

  randomMethod() {
    console.log("hello world");
  }

  static getInstance() {
    if (this.instance) {
      return this.instance;
    }

    this.instance = new ITDepartment("d2", 24, ["ac"]);
    return this.instance;
  }
}

// const itD = new ITDepartment("IT", 23, ["Om", "Som"]);

const instance1 = ITDepartment.getInstance();
const instance2 = ITDepartment.getInstance();
console.log(instance1, instance2);

// Not possible
// itD.name = "english";

let obj: object;

obj = { age: "Pratik" };
let num = 10;
