/* 
js : used both on client side and server side development. js adds behaviour to web pages
uses : interactive behaviour to web pages, web and mobile apps development
        build web servers and server applications
        to create browser games, 
why js : its the only native programming lang to web browser
       
how to add script file.?
  - add script directly into html using script tag
  - link the script files using script src attribute

  this should either be put inside the head tag or just before the closing body tag.

Data types 
  Primitive : Number, boolean, string, undefined and Null //predefined datatypes having certain values and its size depends on data structure

  Non Primitive : Object, Array // created by the programmer that can be null and whose sizes are not fixed

Strings vs template literals :
  using multiple types of quotes during string concatenation increases ambiguity in understanding which is eliminated using template literals with placeholders and back ticks.

var vs let vs const :
  variables decalred under -
    - var are in function scope, meaning these variables are only accessible in the function scope
    - let are in the block scope, only accessible within the block they are declared in.
    - const are in the block scope same as const

    Hoisting means ability to define a variable before its declaration
    - hoisting is allowed in var but not allowed in let and const.

    - var and let allows reassigning values to the variable
    - const does not allow this

    - var also allows redeclaration of variables even in script mode
    - const and let doesnt allow this

'use strict' mode :
  - Eliminates some JavaScript silent errors by changing them to throw errors.
  - Fixes mistakes that make it difficult for JavaScript engines to perform optimizations: strict mode code can sometimes be made to run faster than identical code that's not strict mode.
  - Prohibits some syntax likely to be defined in future versions of ECMAScript.

  - "use strict"; can be either used to the whole file or just for the function
  just put it before writing code just after the function opening braces or in the top of the js file


*/

// section 3
/*
// Activating strict mode
"use strict";

let hasDriverslicense = false;
const passTest = true;

if (passTest) hasDriverslicense = true;
if (hasDriverslicense) console.log("I can drive :D");

// const interface = "Audio";
// const private = 534;
*/
//------------------------------------------------------------------

// Lecture 33 - functions
/*
function logger() {
  // function body
  console.log("Hey there.! My name's Harsh");
}

//calling the function
logger();

// a function can also receive data and also return data

function fruitProcessor(apples, oranges) {
  //console.log(apples, oranges);
  const juice = `juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const result = fruitProcessor(3, 5);
console.log(result);

const appleOrangeJuice = fruitProcessor(4, 7);
console.log(appleOrangeJuice);

//functions allow us to write more maintanable code.
// follow DRY principle, stands for don't repeat yourself
//built in function
const num = Number("2343"); //The Number() function converts any string type data to numbers if its valid
console.log(num);

// -----------------------------------------------------------------

//Lecture 34 - Function declarations VS expressions

// function declaration
function calcAge1(birthYear) {  
  const age = 2022 - birthYear;
  return age;
}

console.log(calcAge1(1993));
console.log(calcAge1(2000));

// function expression
 const calcAge2 = function (birthYear) {
  const age = 2022 - birthYear;
  return age;
};
console.log(calcAge2(2000));

// function call can occur before function declaration as js supports hoisting
// where as function experessions do not allow this
*/

// -----------------------------------------------------------------

// Lecture 35
//Arrow function
/*const calcAge3 = (birthYear) => 2022 - birthYear;
const age3 = calcAge3(2000);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2022 - birthYear;
  const retirement = 65 - age;
  return `${firstName} retires in ${retirement} years`;
};

console.log(yearsUntilRetirement(2000, "Harsh"));*/

//

// -----------------------------------------------------------------

// Lecture 36
// Fnctions calling other functions :

/*function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);
  //console.log(apples, oranges);
  const juice = `juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
  console.log(juice);
}

fruitProcessor(4, 7);*/

// -----------------------------------------------------------------

// Lecture 37
// revision

// const calcAge = function (birthYear) {
//   return 2022 - birthYear;
// };

// const yearsUntilRetirement = function (birthYear, firstName) {
//   const age = calcAge(birthYear);
//   const retirement = 65 - age;
//   if (retirement > 0) {
//     return `${firstName} retires in ${retirement} years`;
//     return retirement;
//   } else {
//     return `${firstName} has already retired.`;
//     return -1;
//   }
// };

// console.log(yearsUntilRetirement(2000, "Harsh"));
// console.log(yearsUntilRetirement(1955, "Raksh"));

// the return keyword immediately terminates the function after returning the value.
// Any statement written after the return statement is simply ignored by the javascript

/*
function declaration : functions that can be used before it's declared

function expression : a function value stored in another variable

Arrow function : great for quick one line functions. has no this keyword

*/

// -----------------------------------------------------------------

// coding challenge 1 (section 3)

// const calcAverage = (score1, score2, score3) => {
//   return (average = (score1 + score2 + score3) / 3);
// };

// const dolphinsScore = calcAverage(85, 54, 41);
// const koalasScore = calcAverage(23, 34, 27);

// function checkWinner(avgDolphins, avgKoalas) {
//   if (avgDolphins >= 2 * avgKoalas) {
//     return `Dolphins win (${avgDolphins} vs. ${avgKoalas})`;
//   } else if (avgKoalas >= 2 * avgDolphins) {
//     return `Koalas win (${avgKoalas} vs. ${avgDolphins})`;
//   } else {
//     return "Nobody won";
//   }
// }

// console.log(checkWinner(dolphinsScore, koalasScore));

// -----------------------------------------------------------------

// Lecture 39 - Arrays in js

// const friend1 = "Ansh";
// const friend2 = "Tanvik";
// const friend3 = "krithi";

// const friends = ["Ansh", "Tanvik", "Krithi"]; //litreal syntax
// console.log(friends);

// // const years = [1991, 1993, 1995, 2000, 2003];

// console.log(friends[0]); //reading array elements through indexing
// // array indexes starts from 0

// console.log(friends[1]);

// console.log(friends.length); //length is a function to calculate the length of the array

// console.log(friends[friends.length - 1]); //friends.length calculates length from one not from zero unlike the array index

// // we may also use array indexes to modify/mutate the array
// //friends[2] ryt now has krithi in it. so to change that

// friends[2] = "Nalin";
// console.log(friends);

// // arrays can hold values of different kinds in the same array

// const harsh = [
//   "Harshith M R",
//   "Kushalnagar",
//   2000,
//   "Developer",
//   "AgilePoint Softwares Pvt. Ltd.",
// ];
// console.log(harsh);
// console.log(harsh.length);

// const calcAge = function (birthYear) {
//   return 2022 - birthYear;
// };
// const years = [1991, 1993, 1995, 2000, 2003];
// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[years.length - 1]);

// console.log(age1, age2, age3);

// const ages = [
//   calcAge(years[0]),
//   calcAge(years[1]),
//   calcAge(years[years.length - 1]),
// ];

// -----------------------------------------------------------------

// Lecture 40 - Basic array operations (or) Array Methods

// const friends = ["Ansh", "Tanvik", "Krithi"]; //litreal syntax
// console.log(friends);

// const newLength = friends.push("aniket", "shreya");
// console.log(friends);
// console.log(newLength);
// // the push method helps us to insert elements to the end of an array
// // the push method actually returns the length of the new array

// friends.unshift("Nalin");
// console.log(friends);
// // unshift adds the new element to the beginning of the array and returns the new length of the array

// console.log(friends.pop()); //returns the popped element
// // removes the last most element from the array

// friends.shift();
// console.log(friends.shift()); //returns the removed element
// // removes the first element from the array

// console.log(friends.indexOf("aniket"));
// // indexOf returns the index of the argument, if it exists in the array
// // if it doesnt exist it simply gives a meaningless result

// console.log(friends.includes("aniket"));
// // checks if the element is included in the array and if yes returns true else false
// // this method uses strict equality for this check

// if (friends.includes("aniket")) {
//   console.log("You have a friend called aniket.!");
// }

// -----------------------------------------------------------------

// Coding challenge 2 (section 3)

// const bill = [125, 555, 44];
// console.log(`The bill value is ${bill}`);

// function calcTip(bill) {
//   if (bill >= 50 && bill <= 300) {
//     return bill * 0.15;
//   } else {
//     return bill * 0.2;
//   }
// }

// const tip = [];
// for (i = 0; i < 3; i++) {
//   tip.push(calcTip(bill[i]));
// }
// console.log(`The tip for the corresponding bill is ${tip}`);

// const totalValue = [];

// for (i = 0; i < 3; i++) {
//   totalValue.push(bill[i] + tip[i]);
// }
// console.log(`totalValue is ${totalValue}`);

// -----------------------------------------------------------------

// Lecture 42 - Objects

/*const testArray = [
  "harsh",
  2000,
  "Frontend Developer",
  ["anik", "ansh", "krithi"],
];

const testObject = {
  firstName: "Harshith",
  lastName: "M R",
  age: 22,
  job: "Frontend Developer",
  friends: ["anik", "ansh", "krithi"],
};*/

// each key in the object is called a property
// using curly braces to create an object is called object literal
// unlike in arrays, the order of the object properties does not matter at all during data retrieval
// so we use arrays when we need to have ordered collection and retrieval of data

// -----------------------------------------------------------------

// lecture 43 - object notation

// const testObject = {
//   firstName: "Harshith",
//   lastName: "M R",
//   age: 22,
//   job: "Frontend Developer",
//   friends: ["Anik", "Ansh", "Krithi"],
// };
// console.log(testObject);

// // using dot notation
// console.log(testObject.firstName + " " + testObject.lastName);

// // using bracket notation
// console.log(testObject["firstName"] + " " + testObject["lastName"]);

// const nameKey = "Name";
// console.log(testObject["first" + nameKey]); // using a variable instead of writing the complete property name although this doesn't work with dot notation
// console.log(testObject["last" + nameKey]);

// // const interestedIn = prompt(
// //   "what do you want to know about Harsh.? Choose between name, job, age and friends."
// // );

// // console.log(testObject[interestedIn]); //dot notation doesnt work here

// // if (testObject[interestedIn]) {
// //   console.log(testObject[interestedIn]);
// // } else {
// //   console.log("There's no such thing about Harsh.");
// // }

// testObject.location = "India";
// testObject["instagram"] = "instagram.com/harsh_ify";
// console.log(testObject);

// console.log(
//   `${testObject.firstName} has ${testObject.friends.length} friends and his bestfriend is ${testObject.friends[0]}` //this works
// );

// -----------------------------------------------------------------
/*
// lecture 44 - Object methods
"use strict";
const testObject = {
  firstName: "Harshith",
  lastName: "M R",
  birthYear: 2000,
  age: 22,
  job: "Frontend Developer",
  friends: ["Anik", "Ansh", "Krithi"],
  hasDriversLicense: true,
  // calcAge: function () {
  //   //console.log(this);
  //   //any function attached to an object is called a method
  //   return 2022 - this.birthYear;
  // },

  calcAge: function () {
    this.age = 2022 - this.birthYear;
    return this.age;
  },
  getSummary: function () {
    return `${this.firstName} is a ${this.age} year old ${
      this.job
    }, and he has ${this.hasDriversLicense ? "a" : "no"} driver's license.`;
  },
};

console.log(testObject.age); // works similarly with bracket notation as well

console.log(testObject.getSummary());
// js prvides us access to a special variable called this
// this keyword is refers to the object which is calling the method
// use this keyword to access the properties in the object in which the method is called
*/

// -----------------------------------------------------------------

// coding challenge 3

/*
const mark = {
  fullname: "Mark Miller",
  mass: 78,
  height: 1.69,
  bmi: 0,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};
console.log(mark);
console.log(`Mark's bmi is ${mark.calcBMI()}`);

const john = {
  fullname: "John Smith",
  mass: 92,
  height: 1.95,
  bmi: 0,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

console.log(john);
console.log(`John's bmi is ${john.calcBMI()}`);

console.log(
  `${mark.bmi > john.bmi ? mark.fullname : john.fullname}'s bmi (${
    mark.bmi > john.bmi ? mark.bmi : john.bmi
  }) is higher than ${mark.bmi > john.bmi ? john.fullname : mark.fullname}'s (${
    mark.bmi > john.bmi ? john.bmi : mark.bmi
  })`
);
*/

// -----------------------------------------------------------------

// Lecture 46 - Iterations / loops

// loops allow us to iterate repititive tasks
// lets say we need this line to be executed for 10 iterarions

// console.log('lifting weights rep 1 🏋️‍♂️');

// so instead of writing this 10 times we use loops

// for
// IT KEEPS RUNNING UNTIL THE CONDITION IS TRUE
// for (let i = 1; i <= 10; i++) console.log("lifting weights rep " + i + " 🏋️‍♂️");

// -----------------------------------------------------------------

// Lecture 47 - Looping arrays, breaking and continuing

/*
const harsh = [
  "Harshith M R",
  "Kushalnagar",
  2000,
  "Frontend Developer",
  "AgilePoint Softwares Pvt. Ltd.",
  ["Ansh", "Anik", "Krithi"],
];

const types = [];
for (let i = 0; i < harsh.length; i++) {
  console.log(harsh[i] + "\t" + typeof harsh[i]);
  types[i] = typeof harsh[i];
  // or types.push(typeof harsh[i])
}
// reading and writing into array using for loop

console.log(harsh);
console.log(types);

const years = [1991, 1993, 1995, 2000, 2003];
const ages = [];

for (let i = 0; i < years.length; i++) {
  ages.push(2022 - years[i]);
}

console.log(years);
console.log(ages);

// coninue and break statements
// continue statment is used to skip an iteration in a loop where as a break statement is used to terminate the loop in which it is written.

for (let i = 0; i < harsh.length; i++) {
  //if (typeof harsh[i] !== "string") continue;
  if (typeof harsh[i] === "object") break;
  console.log(harsh[i] + "\t" + typeof harsh[i]);
  // or types.push(typeof harsh[i])
}
*/

// -----------------------------------------------------------------

// Lecture 48 - looping backwards and looping loops

const harsh = [
  "Harshith M R",
  "Kushalnagar",
  2000,
  "Frontend Developer",
  "AgilePoint Softwares Pvt. Ltd.",
  ["Ansh", "Anik", "Krithi"],
];

for (let i = harsh.length - 1; i >= 0; i--) {
  console.log(harsh[i]);
}
