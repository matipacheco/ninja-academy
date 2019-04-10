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

let team = {
  name:     'Seventh team',
  sensei:   kakashi,
  students: [ naruto, sakura, sasuke ]
};

console.log(team);

/*
let ninja = new Object();

ninja.name      = 'Naruto';
ninja.lastName  = 'Uzumaki';
ninja.aldea     = 'Konoha';
ninja.age       = 12;
ninja.weight    = 40;
ninja.height    = 145;
*/
