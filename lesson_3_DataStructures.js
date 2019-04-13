/****************************************************************************
 * Arrays:
 * Besides the primitives data types, everything else is an object.
 * Some of this objects might come really handy we it comes to programming.
 * So lets talk about Arrays!
 *
 * Arrays are pretty easy to identify, since they always start and end with
 * square brackets ([]). Arrays can hold more than one value at a time,
 * separating all of them with a comma.
 ****************************************************************************/

let ninjas = require("./lesson_2-Objects");

/****************************************************************************
 * Why are we doing this?
 * Because in the previous lesson we ended up exporting some of the variables
 * we defined.
 *
 * exports.naruto  = naruto;
 * exports.sakura  = sakura;
 * exports.sasuke  = sasuke;
 * exports.kakashi = kakashi;
 ****************************************************************************/

let students = [
  ninjas.naruto,
  ninjas.sakura,
  ninjas.sasuke
];

console.log(students);


/****************************************************************************
 * It's important to point out that the items that are stored in an array,
 * doesn't necessarily need to be items of the same type. The following
 * array is also valid:
 ****************************************************************************/

let array = [
  ninjas.naruto,
  "Konoha",
  true,
  null,
  7
];

console.log(array);


let sensei = ninjas.kakashi;

let team = {
  name:     "Team Kakashi",
  sensei:   sensei,
  students: students
};

console.log(team);