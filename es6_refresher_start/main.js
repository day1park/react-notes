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

const fruits = ["apples", "oranges", "grapes"];

// fruits.forEach((fruit, index) => {
//   console.log(fruit);
// });

// MAP

// const singleFruit = fruits.map(fruit => fruit.slice(0, -1).toUpperCase());

// console.log(singleFruit);

// FILTER
const people = [
  { id: 1, name: "Kevin" },
  { id: 2, name: "Melvin" },
  { id: 3, name: "Seven" }
];

const people2 = people.filter(person => person.id !== 2);
console.log(people2);

// SPREAD

// DESTRUCTURING

// CLASSES

// SUBCLASSES

// MODULES
