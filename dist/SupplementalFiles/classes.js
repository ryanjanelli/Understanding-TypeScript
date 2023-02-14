"use strict";
class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.employees = [];
    }
    static createEmployee(employee) {
        return { name: employee };
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
Department.fiscalYear = 2023;
class ITDepartment extends Department {
    constructor(id, admins) {
        super(id, "IT");
        this.admins = admins;
    }
    describe() {
        console.log("IT Department - ID: " + this.id);
    }
}
class AccountingDepartment extends Department {
    get mostRecentReport() {
        if (this.lastReport) {
            return this.lastReport;
        }
        throw new Error("No Report Found...");
    }
    set mostRecentReport(value) {
        if (!value) {
            throw new Error("No data to add");
        }
        this.addReport(value);
    }
    constructor(id, reports) {
        super(id, "Accounting");
        this.reports = reports;
        this.lastReport = reports[0];
    }
    static getInstance() {
        if (AccountingDepartment.instance) {
            return this.instance;
        }
        this.instance = new AccountingDepartment("2", []);
        return this.instance;
    }
    describe() {
        console.log("Account Deparment - ID: " + this.id);
    }
    addEmployee(name) {
        if (name === "Ryan") {
            return;
        }
        this.employees.push(name);
    }
    addReport(text) {
        this.reports.push(text);
        this.lastReport = text;
    }
    printReports() {
        console.log(this.reports);
    }
}
const employee1 = Department.createEmployee("Jack");
console.log(employee1, Department.fiscalYear);
const it = new ITDepartment("1", ["Maxamillion", "Gregorious"]);
it.addEmployee("Max");
it.addEmployee("Ryan");
it.describe();
it.printEmployeeInformation();
console.log(it.admins);
const accounting = AccountingDepartment.getInstance();
const accounting2 = AccountingDepartment.getInstance();
console.log(accounting, accounting2);
accounting.mostRecentReport = "Application";
accounting.addEmployee("Ryan");
accounting.addEmployee("Maximus");
accounting.describe();
