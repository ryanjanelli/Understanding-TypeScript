// abstract class Department {
//   // can no longer instantiate Department as the abstract keyword makes it the base structure for extending
//   static fiscalYear = 2023;

//   protected employees: string[] = [];

//   constructor(protected readonly id: string, public name: string) {
//     // this.name = name;
//     // this.id = id;
//   }

//   abstract describe(this: Department): void;

//   static createEmployee(employee: string) {
//     return { name: employee };
//   }

//   addEmployee(employee: string) {
//     this.employees.push(employee);
//   }

//   printEmployeeInformation() {
//     console.log(this.employees.length);
//     console.log(this.employees);
//   }
// }

// class ITDepartment extends Department {
//   admins: string[];
//   constructor(id: string, admins: string[]) {
//     super(id, "IT");
//     this.admins = admins;
//   }

//   describe() {
//     console.log("IT Department - ID: " + this.id);
//   }
// }
// class AccountingDepartment extends Department {
//   private lastReport: string;
//   private static instance: AccountingDepartment;

//   get mostRecentReport() {
//     if (this.lastReport) {
//       return this.lastReport;
//     }
//     throw new Error("No Report Found...");
//   }

//   set mostRecentReport(value: string) {
//     if (!value) {
//       throw new Error("No data to add");
//     }
//     this.addReport(value);
//   }

//   private constructor(id: string, private reports: string[]) {
//     super(id, "Accounting");
//     this.lastReport = reports[0];
//   }

//   static getInstance() {
//     if (AccountingDepartment.instance) {
//       return this.instance;
//     }
//     this.instance = new AccountingDepartment("2", []);
//     return this.instance;
//   }

//   describe() {
//     console.log("Account Deparment - ID: " + this.id);
//   }

//   addEmployee(name: string) {
//     if (name === "Ryan") {
//       return;
//     }
//     this.employees.push(name);
//   }

//   addReport(text: string) {
//     this.reports.push(text);
//     this.lastReport = text;
//   }
//   printReports() {
//     console.log(this.reports);
//   }
// }

// const employee1 = Department.createEmployee("Jack");
// console.log(employee1, Department.fiscalYear);
// const it = new ITDepartment("1", ["Maxamillion", "Gregorious"]);
// // const accounting = new Department("1", "Accounting");

// it.addEmployee("Max");
// it.addEmployee("Ryan");

// it.describe();
// it.printEmployeeInformation();

// console.log(it.admins);

// const accounting = AccountingDepartment.getInstance();
// const accounting2 = AccountingDepartment.getInstance();

// console.log(accounting, accounting2);
// accounting.mostRecentReport = "Application";

// // accounting.addReport("Hell");
// accounting.addEmployee("Ryan");
// accounting.addEmployee("Maximus");
// // accounting.printReports();
// // accounting.printEmployeeInformation();
// accounting.describe();

// // let accountingCopy = { describe: accounting.describe };
// // let accountingCopy = { name: "Creative", describe: accounting.describe };
// // accountingCopy.describe();
