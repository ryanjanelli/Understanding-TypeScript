"use strict";
let addd;
addd = (n1, n2) => {
    return n1 + n2;
};
class PersonI {
    constructor(n, a) {
        if (n) {
            this.name = n;
        }
        if (a) {
            this.age = a;
        }
    }
    greet(phrase) {
        if (this.name) {
            console.log(phrase + " " + this.name);
        }
        else {
            console.log("Hi!!!");
        }
    }
}
let user1;
user1 = {
    name: "Ryan",
    age: 32,
    greet(phrase) {
        console.log(phrase + " " + this.name);
    },
};
user1.greet("Hi there, i am");
let user2 = new PersonI("Brianna", 28);
user2.greet("Hello, nice to meet you");
let user3 = new PersonI();
user3.greet("Hello there cowboy");
