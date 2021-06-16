// **********************************
// Object type checking: instanceof
// **********************************

// object instanceof Class is the operator that determines if object is an instance of Class.
class Bank {
  name;

  constructor(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }
}

const bank1 = new Bank("Bank of America");
const bank2 = {};

console.log(bank1 instanceof Bank); // true
console.log(bank2 instanceof Bank); // false

// bank1 is an instance of Bank class, bank1 instanceof Bank evaluates to true.
// The empty object {} is not an instance of Bank, correspondingly bank2 instanceof Bank is false.

// instanceof is polymorphic: the operator detects a child as an instance of the parent class.

class BusinessBank extends Bank {
  posts = [];

  constructor(name, posts) {
    super(name);
    this.posts = posts;
  }
}

const business1 = new BusinessBank("Chase Bank", ["the business bank"]);

console.log(business1 instanceof BusinessBank); // true;
console.log(business1 instanceof Bank); // true

// business1 is an instnce of the child class BusinessBank.
// The operator `business1 instanceof BusinessBank` evaluates to true;

// At the same time business1 is a child class of Bank.
// So `business1 instanceof Bank` evaluates to true as well.

// To determine the exact class of the instance, use the constructor property and compare directly with the class:
console.log(business1.constructor === BusinessBank); // true
console.log(business1.constructor === Bank); // false

// **********************************
// Classes and prototypes
// **********************************

// the class syntax in JavaScript does a great job to abstract from the prototypal inheritance.
// The classes are built on top of the prototypal inheritance.
// Every class is a function, and creates an instance when invoked as a constructor.

// The following two code snippets are equivalent.

// **** class version ******
class Language {
  constructor(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }
}

const myLanguage = new Language("English");

console.log(myLanguage.getName()); // "English"
console.log(myLanguage instanceof Language); //true;

// **** Prototype version ******

function Framework(name) {
  this.name = name;
}

Framework.prototype.getName = function () {
  return this.name;
};

const framework = new Framework("Angular");

console.log(framework.getName()); // 'Angular'
console.log(framework instanceof Framework); // true

// The class syntax is way easier to work.

// even if you use class syntax in JavaScript, I recommend you to have a good grasp of prototypal inheritance.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain
