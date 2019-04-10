/****************************************************************************
 * Numbers:
 * They represent... well... numbers
****************************************************************************/

/*
  As expected you can add and subtract using the + and - operators
*/
console.log(100 + 2);
console.log(100 - 2);

/*
  The * operator is used for multiplication
*/
console.log(100 * 2);

/*
  The / operator is used for multiplication
*/
console.log(100 / 2);

/*
  The % represents the modulus operator. It returns the division remainder
*/
console.log(100 % 2);
console.log(100 % 3);

/*
  Up to this point we have only been working with integers numbers.
  It also exist float numbers, which represents a number with decimals.
*/
console.log(Math.PI);


/****************************************************************************
 * Strings:
 * They represent text!
 * They are always enclosed by " "
****************************************************************************/

console.log("My name is Uzumaki Naruto!");
console.log("And one day I'll become Hokage");

/*
  You can add two or more strings!
*/
console.log("My name is Uzumaki Naruto! " + "And one day I'll become Hokage");

/*
  You can't multiply a string with a number!
*/
console.log("My name is Uzumaki Naruto!" * 2);

/*
  You can add a string with a number! But the result es kinda weird
*/
console.log("My name is Uzumaki Naruto!" + 1);


/****************************************************************************
 * Up to this point, we have been printing pure raw data types.
 * There is another way to work with numbers, string and other data types...
 *
 * Variable assignment!!
 *
 * What's this? You can copy a value into a variable.
 * This value gets stored on your computers memory, so you can work with
 * it later
****************************************************************************/

let oneHundred = 100;
let two = 2;

console.log(oneHundred + two);

let greeting = "My name is Uzumaki Naruto! ";
let promise  = "And one day I'll become Hokage";

console.log(greeting + promise);

/*
  You can even make a variable out of other variables
*/
let willOfFire = greeting + promise;

console.log(willOfFire);


/****************************************************************************
 * Booleans:
 * They represent true or false.
 * Used to define conditions within
 * the code.
****************************************************************************/

/*
  The following relational operators return a Boolean.
  Relational operators are used for comparison between variables.
*/
console.log(100 >  2);
console.log(100 >= 2);
console.log(100 <= 2);
console.log(100 <  2);

console.log(100 === 2);
console.log(100 !== 2);


/****************************************************************************
 * Null:
 * It represents the intentional absence of any object value
 ****************************************************************************/

let nullVariable = null;

console.log(nullVariable);


/****************************************************************************
 * Undefined:
 * A declared variable that has not been given a value
 ****************************************************************************/

let undefinedVariable;

console.log(undefinedVariable);