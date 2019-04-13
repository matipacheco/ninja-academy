# Ninja Academy

A time ago my wife and daughter asked me for programming lessons, so I came up with a (I think) funny way to teach them, mixing Javascript with Naruto.

This is for them! ❤️

![shuriken](./public/naurto-family.gif) 

## Data Types

### Numbers

They represent... well... numbers

As expected you can add and subtract using the + and - operators

    console.log(100 + 2);
    console.log(100 - 2);

The * operator is used for multiplication

    console.log(100 * 2);

The / operator is used for multiplication

    console.log(100 / 2);

The % represents the modulus operator. It returns the division remainder

    console.log(100 % 2);
    console.log(100 % 3);

Up to this point we have only been working with integers numbers. It also exist float numbers, which represents a number with decimals.

    console.log(Math.PI);

### Strings

They represent text! They are always enclosed by " "

    console.log("My name is Uzumaki Naruto!");
    console.log("And one day I'll become Hokage");

You can add two or more strings!

    console.log("My name is Uzumaki Naruto! " + "And one day I'll become Hokage");

You can't multiply a string with a number!

    console.log("My name is Uzumaki Naruto!" * 2);

You can add a string with a number! But the result es kinda weird

    console.log("0" + 1);


### Variable assignment

Up to this point, we have been printing pure raw data types. There is another way to work with numbers, string and other data types... Variable assignment

What's this? You can copy a value into a variable. This value gets stored on your computers memory, so you can work with it later.

    let oneHundred = 100;
    let two = 2;

    console.log(oneHundred + two);

    let greeting = "My name is Uzumaki Naruto! ";
    let promise  = "And one day I'll become Hokage";

    console.log(greeting + promise);

You can even make a variable out of other variables

    let willOfFire = greeting + promise;

    console.log(willOfFire);

## Booleans

They represent true or false. The are used to define conditions within the code.

The following relational operators return a Boolean. Relational operators are used for comparison between variables.

    console.log(100 >  2);
    console.log(100 >= 2);
    console.log(100 <= 2);
    console.log(100 <  2);
    
    console.log(100 === 2);
    console.log(100 !== 2);

### Null

It represents the intentional absence of any object value
 
    let nullVariable = null;

    console.log(nullVariable);

### Undefined

A declared variable that has not been given a value
     
    let undefinedVariable;
    
    console.log(undefinedVariable);

## Objects

On the first lesson we covered Numbers, Strings, Booleans and other data types. These are called the primitive data types. **In Javascript, everything else is an Object!**

Since we are in a ninja academy, lets think about shuriken for a minute.

![shuriken](./public/sasuke-shuriken.gif)

In real life, a shuriken its an object!_. Each shuriken have its own color, weight, shape and may have been forged from a different metal . All of this properties make ~~a shuriken~~ an object unique, and different form the others.

With that in mind, lest take a look at the following objects:

    let naruto = {
      name:     'Naruto',
      lastName: 'Uzumaki',
      age:      12,
      weight:   40,
      height:   145
    };
    
    let sakura = {
      name:     'Sakura',
      lastName: 'Hanuro',
      age:      12,
      weight:   35,
      height:   148
    };
    
    let sasuke = {
      name:     'Sasuke',
      lastName: 'Uchiha',
      age:      12,
      weight:   42,
      height:   150
    };
    
    let kakashi = {
      name:     'Kakashi',
      lastName: 'Hatake',
      age:      26,
      weight:   67,
      height:   181
    };
    
Each object above represents a ninja. Each ninja has it own name, age, weight and height. This is the legendary shinobi Team 7 of Konoha!

![shuriken](./public/team-kakashi.gif)

### Initializing objects

There are different ways to define an object.

## Data Structures

## Methods