// // example of how to make and apply a decorator
// // function Logger(constructor: Function) {
// //   console.log("Logging...");
// //   console.log(constructor);
// // }

// // decorator factory
// function Logger(logString: string) {
//   console.log("LOGGER FACTORY");
//   return function (constructor: Function) {
//     console.log(logString);
//     console.log(constructor);
//   };
// }

// // decorator factory
// function WithTemplate(template: string, hookId: string) {
//   console.log("TEMPLATE FACTORY");
//   return function <T extends { new (...args: any[]): { name: string } }>(
//     originalConstructor: T
//   ) {
//     return class extends originalConstructor {
//       constructor(..._: any[]) {
//         super();
//         console.log("Rendering template");
//         const hookEl = document.getElementById(hookId);
//         if (hookEl) {
//           hookEl.innerHTML = template;
//           hookEl.querySelector("h1")!.textContent = this.name;
//         }
//       }
//     };
//   };
// }

// // Order of opperations: all factories run through once top to bottom
// // then functions within the factories start from the bottom up based on the class they are applied to
// @Logger("LOGGING - PERSON")
// @WithTemplate("<h1>My Person Object</h1>", "app")
// class Person {
//   name = "Max";

//   constructor() {
//     console.log("Creating person object...");
//   }
// }

// const pers = new Person();

// console.log(pers);

// // --

// function Log(target: any, propertyName: string | Symbol) {
//   console.log("property decorator!!");
//   console.log(target, propertyName);
// }

// function Log2(target: any, name: string, descriptor: PropertyDescriptor) {
//   console.log("accessor decorator!");
//   console.log(target);
//   console.log(name);
//   console.log(descriptor);
// }

// function Log3(
//   target: any,
//   name: string | Symbol,
//   descriptor: PropertyDescriptor
// ) {
//   console.log("method decorator!");
//   console.log(target);
//   console.log(name);
//   console.log(descriptor);
// }

// function Log4(target: any, name: string | Symbol, position: number) {
//   console.log("parameter decorator!");
//   console.log(target);
//   console.log(name);
//   console.log(position);
// }

// class Product {
//   @Log
//   title: string;
//   private _price: number;

//   @Log2
//   set price(val: number) {
//     if (val > 0) {
//       this._price = val;
//     } else {
//       throw new Error("Invalid price, must be positive.");
//     }
//   }

//   constructor(t: string, p: number) {
//     this.title = t;
//     this._price = p;
//   }

//   @Log3
//   getPriceWithTax(@Log4 tax: number) {
//     return this._price * (1 + tax);
//   }
// }
// // SAVETHIS
// function Autobind(_: any, _2: string, descriptor: PropertyDescriptor) {
//   // this decorator ensures a method called always refers to this as the class it was bound to
//   const originalMethod = descriptor.value; // original method on class
//   const adjDescriptor: PropertyDescriptor = {
//     configurable: true,
//     enumerable: false,
//     get() {
//       const boundFn = originalMethod.bind(this);
//       return boundFn;
//     },
//   };
//   return adjDescriptor;
// }

// class Printer {
//   message = "This works!";

//   @Autobind
//   showMessage() {
//     console.log(this.message);
//   }
// }

// const p = new Printer();

// const button = document.querySelector("button")!;
// button.addEventListener("click", p.showMessage);

// // --

// interface ValidatorConfig {
//   [property: string]: {
//     [validatableProp: string]: string[]; // ['required', 'positive', 'etc']
//   };
// }

// const registeredValidators: ValidatorConfig = {};

// function Required(target: any, propName: string) {
//   registeredValidators[target.constructor.name] = {
//     ...registeredValidators[target.constructor.name],
//     [propName]: [
//       ...(registeredValidators[target.constructor.name]?.[propName] ?? []),
//       "required",
//     ],
//   };
// }

// function PositiveNumber(target: any, propName: string) {
//   registeredValidators[target.constructor.name] = {
//     ...registeredValidators[target.constructor.name],
//     [propName]: [
//       ...(registeredValidators[target.constructor.name]?.[propName] ?? []),
//       "positive",
//     ],
//   };
// }

// function validateD(obj: any) {
//   const objValidatorConfig = registeredValidators[obj.constructor.name];
//   if (!objValidatorConfig) {
//     return true;
//   }
//   let isValid = true;
//   for (const prop in objValidatorConfig) {
//     console.log(prop);
//     for (const validator of objValidatorConfig[prop]) {
//       switch (validator) {
//         case "required":
//           isValid = isValid && !!obj[prop];
//           break;
//         case "positive":
//           isValid = isValid && obj[prop] > 0;
//           break;
//       }
//     }
//   }
//   return isValid;
// }

// class Course {
//   @Required
//   title: string;
//   @PositiveNumber
//   price: number;

//   constructor(t: string, p: number) {
//     this.title = t;
//     this.price = p;
//   }
// }

// const courseForm = document.querySelector("form")!;

// courseForm.addEventListener("submit", (event) => {
//   event.preventDefault();
//   const titleEl = document.getElementById("title") as HTMLInputElement;
//   const priceEl = document.getElementById("price") as HTMLInputElement;

//   const title = titleEl.value;
//   const price = +priceEl.value;

//   const createdCourse = new Course(title, price);

//   if (!validateD(createdCourse)) {
//     alert("Invalid input, try again!");
//     return;
//   }
//   console.log(createdCourse);
// });

// // can use github project ts class-validator to have built in validateD functionality rather than writing it manually
// // nextjs embraces decorators

// // an update
// // another one
