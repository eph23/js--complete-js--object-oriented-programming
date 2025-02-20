'use strict';

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

const eph = new Person('Eph', 1988);
console.log(eph);

const matilda = new Person('Matilda', 1988);
const jack = new Person('Jack', 1988);

console.log(matilda);
console.log(jack);

console.log(eph instanceof Person);

