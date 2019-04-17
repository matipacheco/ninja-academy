/****************************************************************************
 * On the first lesson we covered Numbers, Strings, Booleans and other
 * data types. These are called the primitive data types.
 *
 * In Javascript, everything else is an Object!
 ****************************************************************************/

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


/****************************************************************************
 * An object doesn't necessarily need to be created following the structure
 * shown above. There are other ways to define an object.
 * Here are a couple more ways to do it!
 ****************************************************************************/

let ninja = new Object();

ninja.name      = 'Naruto';
ninja.lastName  = 'Uzumaki';
ninja.age       = 12;
ninja.weight    = 40;
ninja.height    = 145;

// console.log(ninja);

/*
  You can also create objects using {}, it works just like new Object(), 
  but this way allows to create an object and add properties to it.
*/
let ninja = {
  name:     'Naruto',
  lastName: 'Uzumaki',
  age:      12,
  weight:   40,
  height:   145
};

// console.log(ninja);

function Ninja(name, lastName, age, weight, height) {
  this.name     = name;
  this.lastName = lastName;
  this.age      = age;
  this.weight   = weight;
  this.height   = height
}

ninja = new Ninja('Naruto', 'Uzumaki', 12, 40, 145);

// console.log(ninja);

/*
  Clases is a new way (or since 2015) to creating objects, 
  they are a syntactic improvement over JavaScript's existing prototype-based inheritance.
*/
class NinjaClass {
  constructor(name, lastName, age, weight, height) {
    this.name     = name;
    this.lastName = lastName;
    this.age      = age;
    this.weight   = weight;
    this.height   = height;
  }
}

ninja = new NinjaClass('Naruto', 'Uzumaki', 12, 40, 145)

// console.log(ninja);


/****************************************************************************
 * Working with objects!
 *
 * As we said before, the advantage of using an object, is to encapsulate a
 * certain group of properties that are unique from the rest. We can access
 * each and one of these properties like this:
 ****************************************************************************/

let age      = ninja.age;
let name     = ninja.name;
let lastName = ninja.lastName;

// console.log("Our ninja is " + age + " year old, and his name is " + name + " " + lastName);


/****************************************************************************
 * And we don't have to settle with the properties that the object initially
 * has. We can dynamically add more fields to an object upon our code
 * execution!
 ****************************************************************************/

ninja.village = "Konoha";
ninja.sensei  = kakashi;

// console.log(ninja);

/****************************************************************************
 * Wait, WHAT?... Yes!, an object can have other object as one of
 * its fields/properties.
 ****************************************************************************/

exports.naruto  = naruto;
exports.sakura  = sakura;
exports.sasuke  = sasuke;
exports.kakashi = kakashi;