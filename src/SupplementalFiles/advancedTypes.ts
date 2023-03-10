// type Admin = {
//   name: string;
//   privileges: string[];
// };

// type Employee = {
//   name: string;
//   startDate: Date;
// };

// type ElevatedEmployee = Admin & Employee;

// const e1: ElevatedEmployee = {
//   name: "Ryan",
//   privileges: ["create-server"],
//   startDate: new Date(),
// };

// type Combinable = string | number;
// type Numeric = number | boolean;

// type Universal = Combinable & Numeric;

// function add(a: number, b: number): number;
// function add(a: string, b: string): string;
// function add(a: number, b: string): string;
// function add(a: string, b: number): string;
// function add(a: Combinable, b: Combinable) {
//   if (typeof a === "string" || typeof b === "string") {
//     return a.toString() + b.toString();
//   }
//   return a + b;
// }

// const result = add(1, "Janelli");
// result.split(" ");

// const fetchedUserData = {
//   id: "u1",
//   name: "Ryan",
//   job: {
//     title: "CEO",
//     description: "My Own Company",
//   },
// };

// console.log(fetchedUserData?.job?.title);

// const userInput1 = "";

// const storedData = userInput1 ?? "Default";

// console.log(storedData);

// type UnknownEmployee = Employee | Admin;

// function printEmployeeInformation(emp: UnknownEmployee) {
//   console.log("Name: ", emp.name);
//   if ("privileges" in emp) {
//     console.log("Privileges: ", emp.privileges);
//   }
//   if ("startDate" in emp) {
//     console.log("StartDate: ", emp.startDate);
//   }
// }

// printEmployeeInformation(e1);
// printEmployeeInformation({ name: "Max", startDate: new Date() });

// class Car {
//   drive() {
//     console.log("Driving...");
//   }
// }

// class Truck {
//   drive() {
//     console.log("Driving a truck...");
//   }

//   loadCargo(amount: number) {
//     console.log("Loading cargo ...", amount);
//   }
// }

// type Vehicle = Car | Truck;

// const v1 = new Car();
// const v2 = new Truck();

// function useVehicle(vehicle: Vehicle) {
//   vehicle.drive();
//   // prone to typos in if check
//   // if ("loadCargo" in vehicle) {
//   //   vehicle.loadCargo(1000);
//   // }

//   if (vehicle instanceof Truck) {
//     vehicle.loadCargo(1000);
//   }
// }

// useVehicle(v1);
// useVehicle(v2);

// interface Bird {
//   type: "bird";
//   flyingSpeed: number;
// }

// interface Horse {
//   type: "horse";
//   runningSpeed: number;
// }

// type Animal = Bird | Horse;

// function moveAnimal(animal: Animal) {
//   let speed;
//   switch (animal.type) {
//     case "bird":
//       speed = animal.flyingSpeed;
//       break;
//     case "horse":
//       speed = animal.runningSpeed;
//       break;
//   }
//   console.log("Moving with speed: " + speed);
// }

// moveAnimal({ type: "bird", flyingSpeed: 40 });
// moveAnimal({ type: "horse", runningSpeed: 30 });

// // const paragraph = document.querySelector("p");
// const paragraph = document.getElementById("message-output");
// // const userInput = document.getElementById("user-input") as HTMLInputElement; // clean and precise
// // userInput.value = "Hi there.";

// const userInput = document.getElementById("user-input");

// if (userInput) {
//   (userInput as HTMLInputElement).value = "Hi there.";
// }

// interface ErrorContainer {
//   // {email: 'Not a valid email', username: 'Must start with a character!'}}
//   [prop: string]: string;
// }

// const errorBag: ErrorContainer = {
//   email: "Not a valid email!",
//   username: "Must start with a capital Character!",
// };
