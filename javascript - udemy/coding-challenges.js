/* lecture 24 - logical operators
const hasDriversLicense = true;
const hasGoodVision = true;

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);
console.log(!hasDriversLicense && hasGoodVision);

// const shouldDrive = hasDriversLicense && hasGoodVision;

// if (shouldDrive) {
//   console.log("You are good to drive.");
// } else {
//   console.log("You probably shouldn't.");
// }

const isTired = false; //the third variable
console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log("You are good to drive.");
} else {
  console.log("You probably shouldn't.");
}
*/

//----------------------------------------------------------------

//Coding challenge 3
/*const dolphins = {
  score1: 96,
  score2: 108,
  score3: 89,
};

const koalas = {
  score1: 88,
  score2: 91,
  score3: 110,
};

const dolphinsAverage =
  (dolphins.score1 + dolphins.score2 + dolphins.score3) / 3;
const koalasAverage = (koalas.score1 + koalas.score2 + koalas.score3) / 3;

if (dolphinsAverage > koalasAverage) {
  console.log("Dolphins win.");
} else if (dolphinsAverage < koalasAverage) {
  console.log("koalas win.");
} else {
  console.log("Its a draw.!");
}*/

/*const scoreDolphins = (97 + 112 + 81) / 3;
const scoreKoalas = (109 + 95 + 86) / 3;
console.log(scoreDolphins, scoreKoalas);

if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
  console.log("Team Dolphins wins the trophy.");
} else if (scoreDolphins < scoreKoalas && scoreKoalas >= 100) {
  console.log("Team Koalas wins the trophy");
} else if (
  scoreDolphins == scoreKoalas &&
  scoreDolphins >= 100 &&
  scoreKoalas >= 100
) {
  console.log("Both wins the trophy.! 🍻");
} else {
  console.log("Nobody wins the trophy.");
}*/

//------------------------------------------------------------------
// lecturer 26 - The switch statement

/*const day = "saturday";

switch (day) {
  case "monday":
    console.log("Plan course structure");
    console.log("Complete the daily tasks.");
    break;

  case "tuesday":
    console.log("Practice example Code");
    break;

  case "wednesday":
  case "thursday":
    console.log("Practice complex problems");
    break;

  case "friday":
    console.log("Read supporting docs regarding what you are doing");
    break;

  case "saturday":
  case "sunday":
    console.log("enjoy the weekend 🍻");
    break;

  default:
    console.log("Not a valid day");
}*/

//------------------------------------------------------------------

// Lecture 27 - The ternary conditional operator

/*const age = 22;
age >= 18
  ? console.log("Get him shots and keep 'em coming.! 🍻")
  : console.log("You better drink water than wine mate. ");

const drink = age >= 18 ? "wine 🍷" : "water 💧";
console.log(drink);

console.log(`Get me ${age >= 18 ? "wine 🍷" : "water 💧"}`);*/

//------------------------------------------------------------------

// Coding challenge 4

/*const bill = 430;
const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
const totalValue = bill + tip;

console.log(
  `The bill was ${bill} and the tip was ${tip}. So the total value is ${totalValue}.`
);*/

//------------------------------------------------------------------

// js is backwards compatible as the old features are never removed.
// everytime thers an update its just a new release rather than a new version.
//hence the websites keep working forever.
/*  - use latest browsers
    - use babel to transpile to older releases or polify code to older releases
    - ES5 is fully supported in all browsers
    - ES6 is supported by all modern browsers but doesnt support older browsers
*/

//------------------------------------------------------------------
