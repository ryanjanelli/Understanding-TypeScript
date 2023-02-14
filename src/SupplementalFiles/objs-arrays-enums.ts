// const person: {
//   name: string;
//   age: number;
// } = {
// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string];
// } = {
//   name: "Ryan",
//   age: 31,
//   hobbies: ["Cards", "Cooking"],
//   role: [2, "author"],
// };

enum Role {
  ADMIN = 'ADMIN',
  READ_ONLY = 100,
  AUTHOR = 'AUTHOR',
}

const person = {
  name: "Ryan",
  age: 31,
  hobbies: ["Cards", "Cooking"],
  role: Role.ADMIN,
};

// TS is dumb here, it allows you to push onto the array despite it should only be length 2
// person.role.push("admin");
// TS handles it better in this below example. This will throw an error.
// person.role = [1, 'admin', 'user']

// TS seeds the second item should be a string so it throws an error
// person.role[1] = 10;

let favoriteActivities: string[];
favoriteActivities = ["Sports"];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
  //   console.log(hobby.map()); !!! ERROR !!!
}
