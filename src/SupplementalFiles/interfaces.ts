// // type AddFn = (a: number, b: number) => number;
// interface AddFn {
//   (a: number, b: number): number;
// }
// let addd: AddFn;

// addd = (n1: number, n2: number) => {
//   return n1 + n2;
// };

// interface Named {
//   readonly name?: string;
//   outputName?: string;
// }

// interface Greetable extends Named {
//   greet(phrase: string): void;
// }

// class PersonI implements Greetable {
//   name?: string;
//   age?: number;

//   constructor(n?: string, a?: number) {
//     if (n) {
//       this.name = n;
//     }
//     if (a) {
//       this.age = a;
//     }
//   }

//   greet(phrase: string) {
//     if (this.name) {
//       console.log(phrase + " " + this.name);
//     } else {
//       console.log("Hi!!!");
//     }
//   }
// }
// let user1: PersonI;

// user1 = {
//   name: "Ryan",
//   age: 32,

//   greet(phrase: string) {
//     console.log(phrase + " " + this.name);
//   },
// };

// user1.greet("Hi there, i am");

// let user2 = new PersonI("Brianna", 28);

// user2.greet("Hello, nice to meet you");

// let user3 = new PersonI();

// user3.greet("Hello there cowboy");
