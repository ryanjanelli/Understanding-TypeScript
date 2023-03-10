// // included in TS generic types

// // const names: Array<string> = []; // using generic type
// // const names2: string[] = [];
// // names[0].split(" ");
// // names2[0].split(" ");

// // const promise = new Promise<string>((resolve, reject) => {
// //   setTimeout(() => {
// //     resolve("This is done!");
// //   }, 2000);
// // });

// // promise.then((data) => {
// //   data.split(" ");
// // });

// // building my own generic types

// // function merge<T, U>(objA: T, objB: U) {
// //   return Object.assign(objA, objB);
// // }

// // function merge<T extends object, U extends object>(objA: T, objB: U) {
// //   return Object.assign({}, objA, objB);
// // }

// let merge = <T extends object, U extends object>(objA: T, objB: U) => {
//   return Object.assign({}, objA, objB);
// };

// // console.log(
// //   merge(
// //     { name: "Ryan", age: 31 },
// //     { hobbies: ["Cards", "Games", "Computers"], isHandsome: true }
// //   )
// // );

// const mergedObj = merge(
//   { name: "Ryan", hobbies: ["Cards", "Games", "Computers"] },
//   //   31
//   { age: 31 }
// );

// console.log(mergedObj);

// interface Lengthy {
//   length: number;
// }

// let countAndDescribe = <T extends Lengthy>(element: T): [T, string] => {
//   let descriptionText = "Got no value.";
//   if (element.length === 1) {
//     descriptionText = `Got 1 element.`;
//   } else if (element.length > 1) {
//     descriptionText = `Got ${element.length} elements.`;
//   }
//   return [element, descriptionText];
// };

// console.log(countAndDescribe("Hi there!"));
// console.log(countAndDescribe(["Sports", "Cooking"]));
// console.log(countAndDescribe([]));

// let extractAndConvert = <T extends object, U extends keyof T>(
//   obj: T,
//   key: U
// ) => {
//   return `Value: ${obj[key]}`;
// };

// extractAndConvert({ name: "Max" }, "name");

// class DataStorage<T extends string | number | boolean> {
//   private data: T[] = [];

//   addItem(item: T) {
//     this.data.push(item);
//   }

//   removeItem(item: T) {
//     if (this.data.indexOf(item) === -1) {
//       return;
//     }
//     this.data.splice(this.data.indexOf(item), 1);
//   }

//   getItems() {
//     return [...this.data];
//   }
// }

// const textStorage = new DataStorage<string>();
// textStorage.addItem("Max");
// textStorage.addItem("Manuel");
// textStorage.removeItem("Max");

// console.log(textStorage.getItems());

// const numberStorage = new DataStorage<number>();
// numberStorage.addItem(1);
// numberStorage.addItem(55);
// numberStorage.removeItem(1);

// console.log(numberStorage.getItems());

// // const objStorage = new DataStorage<object>(); // function breaks with objects because they are refernces
// // objStorage.addItem({ name: "Max" });
// // objStorage.addItem({ name: "Manu" });
// // objStorage.removeItem({ name: "Max" });

// // console.log(objStorage.getItems());

// interface CourseGoal {
//   title: string;
//   description: string;
//   completeUntil: Date;
// }

// let createCourseGoal = (
//   title: string,
//   description: string,
//   date: Date
// ): CourseGoal => {
//   let courseGoal: Partial<CourseGoal> = {};
//   courseGoal.title = title;
//   courseGoal.description = description;
//   courseGoal.completeUntil = date;
//   return courseGoal as CourseGoal;
// };

// let names: Readonly<string[]> = ["Max", "Anna"];
// // names.push("Manu");
// // names.pop();
