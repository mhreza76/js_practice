
// // x = 8;
// console.log(x);

// const x = 5;

// const person = {
//     name: 'Dev',
//     age: 23
// };

// person.age = 24;

// console.log(person);

const person = {
    name: 'Dev',
    age: 23
};

Object.freeze(person);
person.age = 24;

console.log(person);

const spices = ['ginger', 'cardamom', 'cinnamon', 'nutmeg'];
const [first, second, ...other] = spices;

console.log(first, second, other);


let str = "GeeksforGeeks";

console.log(str.startsWith("Geeks"));

// Here specified position is 5, that means
// searching will start from 'f' whose index
// in string str is 5
console.log(str.startsWith("for", 4));

