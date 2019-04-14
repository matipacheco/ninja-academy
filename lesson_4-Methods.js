/*********************************************************************************************
 * Methods:
 * Methods are actions! They receive an input and return a response from that input.
 * They are commonly associated with objects, and define the behavior has, or actions
 * the object can perform.
 *********************************************************************************************/

/*********************************************************************************************
 * Let's define a simple sum method.
 * This method will receive two parameters, a and b, and return a + b.
 *********************************************************************************************/

function sum(a, b) {
  return a + b;
}

console.log(sum(100, 2));


/*********************************************************************************************
 * Since we are in a ninja academy, let's learn some jutsu!
 * The technique we will learn is called kage bunshin no jutsu, and it is known for create
 * clones of the ninja who's doing the jutsu.
 *********************************************************************************************/

let ninjas = require("./lesson_2-Objects");
let naruto = ninjas.naruto;

function kageBunshinNoJutsu(ninja, number) {
  clones = [];

  for (let i = 0; i < number; i++) {
    clones.push(ninja);
  }

  return clones;
}

console.log(kageBunshinNoJutsu(naruto, 10));


/*********************************************************************************************
 * Now that we now what a method is, let me tell you that there is a lot of
 * methods available for all the data types and data structures we have
 * covered in this ninja academy.
 *
 * You can found some of them in the following links!
 *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object
 *********************************************************************************************/