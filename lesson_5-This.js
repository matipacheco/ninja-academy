/****************************************************************************
 * this:
 * The Javascript _this_ keyword refers to the context in which the current
 * code is executing.
 * Generally we use _this_ within methods. In an object method, for example,
 * _this_ refers to the owner of the method (i.e. the object).
 *
 * Let's see this in the example below.
 ****************************************************************************/

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


/****************************************************************************
 * In this context, _this_ refers to the naruto object, and that said, we
 * can access all of its attributes; in this case name and lastName.
 ****************************************************************************/