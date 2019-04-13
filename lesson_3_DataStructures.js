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


/****************************************************************************
 * There's an advantage on using arrays. We can retrieve a particular element
 * of the array by it's index! Lets say we have an array with _n_ elements;
 * the first element of the array is in the 0-th position/index,
 * while the n-th element is in the n-1-th position.
 *
 * Let's see an example of this:
 ****************************************************************************/

console.log(students[0] === ninjas.naruto);
console.log(students[1] === ninjas.sakura);
console.log(students[2] === ninjas.sasuke);


/****************************************************************************
 * Let's define the following team object
 ****************************************************************************/

let sensei = ninjas.kakashi;

let team = {
  name:     "Team Kakashi",
  sensei:   sensei,
  students: students
};


/****************************************************************************
 * How could we list all the students that are part of the team?
 * We need to iterate through the students array to retrieve its elements.
 *
 * Iteration allows us to move across all the elements of an array, so we
 * can use its data to perform actions. Here I'm gonna show a couple of way
 * to do this.
 ****************************************************************************/

for (let index = 0; index < team.students.length; index++) {
  console.log(team.students[index].name);
}

for (let student of team.students) {
  console.log(student.name);
}

/****************************************************************************
 * The following iterators may not be understood so easily since we haven't
 * covered methods yet (they're coming right after this!), but I'm gonna
 * show them anyway.
 ****************************************************************************/

team.students.forEach(function (student) {
  console.log(student.name)
});

team.students.map(function (student) {
  console.log(student.name)
});
