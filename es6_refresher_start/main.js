// CONST & LET
// const name = "John";
// name = "Jack"; NOT OKAY

// let name = "John"
// name = "Jack";
// will reassign

// const person = {
//   name: "john",
//   age: 33
// };

// person.name = "jack";
// console.log(person);
// this is fine , change values inside of an object already created

// const nums = [1, 2, 3, 4];
// nums.push(5);
// console.log(nums);
// will log 1- 5

// ARROW FUNCTIONS

// function sayHello() {
//   console.log("Hello");
// }

// const sayHello = () => {
//   console.log("Hello");
// };

// sayHello();

// const sayBye = name => console.log(`bye ${name}`);
// sayBye("Felicia");

// FOREACH

// const fruits = ["apples", "oranges", "grapes"];

// fruits.forEach((fruit, index) => {
//   console.log(fruit);
// });

// MAP

// const singleFruit = fruits.map(fruit => fruit.slice(0, -1).toUpperCase());

// console.log(singleFruit);

// FILTER
// const people = [
//   { id: 1, name: "Kevin" },
//   { id: 4, name: "Melvin" },
//   { id: 3, name: "Seven" }
// ];

// const people2 = people.filter(person => person.id !== 2);
// console.log(people2);

// SPREAD
// spread values out, array or objects
// const arr = [1, 2, 3];
// // make a copy of this array and add 4
// const arr2 = [...arr, 4];
// console.log(arr2);

// const arr3 = [...arr.filter(num => num !== 2), 4, 5];
// console.log(arr3);
// const person1 = {
//   name: "Tommy",
//   age: 36
// };

// const newPerson = {
//   ...person1,
//   email: "person@people.com"
// };

// console.log(newPerson);

// DESTRUCTURING
// pull values out of objects and arrays

// const profile = {
//   name: "jon snow",
//   address: {
//     street: "420 hight st",
//     city: "ninbin"
//   },
//   hobbies: ["politics", "alchemistry"]
// };

// const { name, address, hobbies } = profile;
// console.log(
//   `${name} lives at ${address.street} and he likes to discuss ${hobbies[0]}`
// );

// CLASSES
class Person {
  //can have properties or methods in side
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    return `hello, my name is ${this.name} and i am ${this.age} years old`;
  }
}

const person1 = new Person("johnny", 44);
const person2 = new Person("bonnie", 19);

// console.log(person1.greet());

// SUBCLASSES
class Customer extends Person {
  constructor(name, age, balance) {
    super(name, age);
    this.balance = balance;
  }

  info() {
    return `${this.name} owes ${this.balance}.00`;
  }
}

const customer1 = new Customer("kevin", 30, 4000);

console.log(customer1.info());

// MODULES
// file 1 (file1.js)
export const name = "jeff";

// file 2 (file2.js)

import { name } from "./file1";
console.log(name);

// export as default import without curly braces
