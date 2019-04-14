# Ninja Academy

A time ago my wife and daughter asked me for programming lessons, so I came up with a (I think) funny way to teach them... Javascript + Naruto!

This is for them! ❤️

![family](./public/naurto-family.gif) 

## Data Types

In this section we will cover the so called primitive data types. These are: _numbers_, _strings_, _booleans_, _null_ and _undefined_.

### Numbers

They represent... well... numbers

As expected you can add and subtract using the `+` and `- operators

    console.log(100 + 2);
    console.log(100 - 2);

The `*` operator is used for multiplication

    console.log(100 * 2);

The `/` operator is used for multiplication

    console.log(100 / 2);

The `%` represents the modulus operator. It returns the division remainder

    console.log(100 % 2);
    console.log(100 % 3);

Up to this point we have only been working with integers numbers. It also exist float numbers, which represents a number with decimals.

    console.log(Math.PI);

### Strings

They represent text! They are always enclosed by `" "`

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

They represent `true` or `false`. The are used to define conditions within the code.

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

![yeah](./public/dance.gif)

## Objects

On the first lesson we covered Numbers, Strings, Booleans and other data types. These are called the primitive data types. **In Javascript, everything else is an Object!**

Since we are in a ninja academy, lets think about shuriken for a minute.

![shuriken](./public/sasuke-shuriken.gif)

In real life, a shuriken its an object!. Each shuriken have its own color, weight, shape and may have been forged from a different metal . All of this properties make ~~a shuriken~~ an object unique, and different form the others.

With that in mind, lest take a look at the following objects:

    const naruto = {
      name:     'Naruto',
      lastName: 'Uzumaki',
      age:      12,
      weight:   40,
      height:   145
    };
    
    const sakura = {
      name:     'Sakura',
      lastName: 'Hanuro',
      age:      12,
      weight:   35,
      height:   148
    };
    
    const sasuke = {
      name:     'Sasuke',
      lastName: 'Uchiha',
      age:      12,
      weight:   42,
      height:   150
    };
    
    const kakashi = {
      name:     'Kakashi',
      lastName: 'Hatake',
      age:      26,
      weight:   67,
      height:   181
    };
    
Each object above represents a ninja. Each ninja has it own name, age, weight and height. This is the legendary shinobi Team 7 of Konoha!

![team7](./public/team-kakashi.gif)

### Initializing objects

An object does not necessarily need to be created following the structure shown above. There are other ways to define an object. Here are a couple more ways to do it!

    let ninja = new Object();
    
    ninja.name      = 'Naruto';
    ninja.lastName  = 'Uzumaki';
    ninja.age       = 12;
    ninja.weight    = 40;
    ninja.height    = 145;
    
    console.log(ninja);
    
    function Ninja(name, lastName, age, weight, height) {
      this.name     = name;
      this.lastName = lastName;
      this.age      = age;
      this.weight   = weight;
      this.height   = height
    }
    
    ninja = new Ninja('Naruto', 'Uzumaki', 12, 40, 145);
    
    console.log(ninja);

### Working with objects

As I said before, the advantage of using an object, is to encapsulate a certain group of properties that are unique from the rest. We can access each and one of these properties like this:
    
     let age      = ninja.age;
     let name     = ninja.name;
     let lastName = ninja.lastName;
     
     console.log("Our ninja is " + age + " year old, and his name is " + name + " " + lastName);

And we don't have to settle with the properties that the object initially has. We can dynamically add more fields to an object upon our code execution!

    ninja.village = "Konoha";
    ninja.sensei  = kakashi;
    
    console.log(ninja);

    /*
        {
            name: 'Naruto',
            lastName: 'Uzumaki',
            age: 12,
            weight: 40,
            height: 145,
            village: 'Konoha',
            sensei: {
                name: 'Kakashi',
                lastName: 'Hatake',
                age: 26,
                weight: 67,
                height: 181
            }
        }
    */
    
Wait, WHAT?... Yes!, an object can have other object as one of its fields/properties.

## Data Structures

As I said before, besides the primitives data types, everything else is an object. Some of this objects might come really handy we it comes to programming.

In this sections we'll talk about Arrays!

### Arrays

An Array is a special data structure. It is used to store multiple values in a single variable.

Arrays are pretty easy to identify, since they always start and end with square brackets `[]`. Arrays can hold more than one value at a time, separating all of them with a comma.

So, if we have a list of ninjas, storing those ninjas in single variables would look like this:

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

It's important to point out that the items that are stored in an array, doesn't necessarily need to be items of the same type. The following array is also valid:
 
    let array = [
      ninjas.naruto,
      "Konoha",
      true,
      null,
      7
    ];
    
    console.log(array);

### Accessing the array elements
 
There's an advantage on using arrays. We can retrieve a particular element of the array by it's index! Let's say we have an array with _n_ elements:
- The first element of the array is in the `0-th` position/index.
- While the n-th element is in the `n-1-th` position.

Let's see an example of this:

    console.log(students[0] === ninjas.naruto); // true
    console.log(students[1] === ninjas.sakura); // true
    console.log(students[2] === ninjas.sasuke); // true

### Iterating through an array

Let's define the following _team_ object

    let sensei = ninjas.kakashi;
    
    let team = {
      name:     "Team Kakashi",
      sensei:   sensei,
      students: students
    };
    
How could we list all the students that are part of the team? We need to *iterate* through the students array to retrieve its elements!

Iteration allows us to move across **all** the elements of an array, so we can use its data to perform actions. Here I'm gonna show a couple of way to do this. 

    for (let index = 0; index < team.students.length; index++) {
      console.log(team.students[index].name);
    }
    
    for (let student of team.students) {
      console.log(student.name);
    }

The following iterators may not be understood so easily since we haven't covered _methods_ yet (they're coming right after this!), but I'm gonna show them anyway.

    team.students.forEach(function (student) {
      console.log(student.name)
    });
    
    team.students.map(function (student) {
      console.log(student.name)
    });
 
God damn, we sure printed a lot of names there...

![lee](./public/crazy-lee.gif)

## Methods

_Methods_ are actions! They receive an input and return a response from that input. They are commonly associated with objects, and define the behavior has, or actions the object can perform.

Let's define a simple sum method. This method will receive two parameters, a and b, and return a + b.

    function sum(a, b) {
      return a + b;
    }
    
    console.log(sum(100, 2));

 Now, since we are in a ninja academy, let's learn some jutsu! The technique we will learn is called kage bunshin no jutsu, and it is known for create clones of the ninja who's doing the jutsu.

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

As we can see, `kageBunshinNoJutsu(10)` return an array with the Naruto object repeated 10 times!

![clones](./public/kage-bunshin.gif)

### Arrow functions

Arrow functions, also called _fat arrow functions_ are a shorter way of declaring a method in the conventional way. With that in mind, these methods:

    function() {...}     function(a) {...}      function(a,b) {...}

can be replaced with:

    () => {}          a => {}            (a,b) => {} 

In this academy I will not cover arrow functions, but you can read more about it in the following links:
- [Anonymous functions](https://en.wikibooks.org/wiki/JavaScript/Anonymous_functions)
- [Arrow funcitons](https://medium.freecodecamp.org/when-and-why-you-should-use-es6-arrow-functions-and-when-you-shouldnt-3d851d7f0b26)

#### Note

Now that we now what a method is, let me tell you that there is a lot of methods available for all the data types and data structures we have covered in this ninja academy.

You can found some of them here!

- [Number methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)
- [String methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)
- [Array methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
- [Object methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)

## _this_

_The Javascript `this` keyword refers to the context in which the current code is executing._ 

Generally we use `this` within methods. In an object method, for example, `this` refers to the owner of the method (i.e. the object). Let's see this in the example below.

    let naruto = {
      name:     'Naruto',
      lastName: 'Uzumaki',
      age:      12,
      weight:   40,
      height:   145,
      fullName: function () {
        return this.name + " " + this.lastName
      }
    };

In this context, `this` refers to the _naruto_ object, and that said, we can access all of its attributes; in this case `name` and `lastName`.

## The end

The time has come, little Genin. Go on and live your own adventures! ✊🏿

![happy](./public/deal-with-naruto.gif)