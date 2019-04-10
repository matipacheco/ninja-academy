/****************************************************************************
 * On the first lesson we covered Numbers, Strings, Booleans and other
 * data types. These are called the primitive data types.
 *
 * In Javascript, everything else is an Object!
 ****************************************************************************/

var naruto = {
  name:     'Naruto',
  lastName: 'Uzumaki',
  age:      12,
  weight:   40,
  height:   145
};

var sakura = {
  name:     'Sakura',
  lastName: 'Hanuro',
  age:      12,
  weight:   35,
  height:   148
};

var sasuke = {
  name:     'Sasuke',
  lastName: 'Uchiha',
  age:      12,
  weight:   42,
  height:   150
};

var kakashi = {
  name:     'Kakashi',
  lastName: 'Hatake',
  age:      26,
  weight:   67,
  height:   181
};

var team = {
  name:     'Seventh team',
  sensei:   kakashi,
  students: [ naruto, sakura, sasuke ]
};

console.log(team);

/*
var ninja = new Object();

ninja.name      = 'Naruto';
ninja.lastName  = 'Uzumaki';
ninja.aldea     = 'Konoha';
ninja.age       = 12;
ninja.weight    = 40;
ninja.height    = 145;
*/
