"use strict";
let merge = (objA, objB) => {
    return Object.assign({}, objA, objB);
};
const mergedObj = merge({ name: "Ryan", hobbies: ["Cards", "Games", "Computers"] }, { age: 31 });
console.log(mergedObj);
let countAndDescribe = (element) => {
    let descriptionText = "Got no value.";
    if (element.length === 1) {
        descriptionText = `Got 1 element.`;
    }
    else if (element.length > 1) {
        descriptionText = `Got ${element.length} elements.`;
    }
    return [element, descriptionText];
};
console.log(countAndDescribe("Hi there!"));
console.log(countAndDescribe(["Sports", "Cooking"]));
console.log(countAndDescribe([]));
let extractAndConvert = (obj, key) => {
    return `Value: ${obj[key]}`;
};
extractAndConvert({ name: "Max" }, "name");
class DataStorage {
    constructor() {
        this.data = [];
    }
    addItem(item) {
        this.data.push(item);
    }
    removeItem(item) {
        if (this.data.indexOf(item) === -1) {
            return;
        }
        this.data.splice(this.data.indexOf(item), 1);
    }
    getItems() {
        return [...this.data];
    }
}
const textStorage = new DataStorage();
textStorage.addItem("Max");
textStorage.addItem("Manuel");
textStorage.removeItem("Max");
console.log(textStorage.getItems());
const numberStorage = new DataStorage();
numberStorage.addItem(1);
numberStorage.addItem(55);
numberStorage.removeItem(1);
console.log(numberStorage.getItems());
let createCourseGoal = (title, description, date) => {
    let courseGoal = {};
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completeUntil = date;
    return courseGoal;
};
let names = ["Max", "Anna"];
