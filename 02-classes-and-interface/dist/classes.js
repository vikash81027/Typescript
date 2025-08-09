"use strict";
class Department {
    name;
    id;
    // name: string;
    // id: number;
    employees = [];
    static year = 2024;
    constructor(name, id) {
        this.name = name;
        this.id = id;
        // this.name = n;
        // this.id = id;
    }
    describe() {
        console.log(this.name);
    }
    addEmployees(employee) {
        this.employees.push(employee);
    }
    static checkName() {
        return Department.year;
    }
}
class abc extends Department {
    randomMethod() { }
}
class ITDepartment extends Department {
    admins;
    lastReport;
    static instance;
    get getLastReport() {
        return this.lastReport;
    }
    set getLastReport(value) {
        this.lastReport = value;
    }
    constructor(name, id, admins) {
        super(name, id);
        this.admins = admins;
        this.lastReport = "Random";
    }
    addEmployees(employee) {
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
let obj;
obj = { age: "Pratik" };
let num = 10;
