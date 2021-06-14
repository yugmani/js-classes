// *************************
//CLASSES ARE FUNCTIONS
// *************************

// 1. Initialize a function with a function expression
const x = function () {};

// Initialize a constructor from a function
const constructorFromFunction = new x();
console.log(constructorFromFunction);
// Expected: x {}
// constructor: ƒ ()

// 2. Initiliaze a class
const y = class {};

//Initilize a constructor from a class
const constructorFromClass = new y();
console.log(constructorFromClass);
//Expected: y {}
// constructor: class

// *************************
// CONSTRUCTOR FUNCTION
// *************************

//Initialiaing a constructor function
function Zero(name, level) {
  this.name = name;
  this.level = level;
}

// *************************
// DEFINING METHODS
// *************************

// Adding a method to the constructor function
// The common practice with constructor functions is to assign methods directly to the prototype instead of in the initialization
Zero.prototype.greet = function () {
  return `{this.name} says hello.`;
};

// Translating this constructor function to the class syntax with different class name
// Initializing a class definition

// With classes this syntax is simplified,
// and the method can be added directly to the class.
// Using the method definition shorthand introduced in ES6, defining a method is an even more concise process.
class Hero {
  constructor(name, level) {
    this.name = name;
    this.level = level;
  }

  //Adding a method to the constructor
  greet() {
    return `{this.name} says hello.`;
  }
}

// Creating Instances using the new keyword and assign some values
const zero1 = new Zero("John", 1);
const hero1 = new Hero("Paul", 2);

console.log(zero1);
// Zero {name: "John", level: 1}
// greet: ƒ ()
// constructor: ƒ Zero(name, level)

console.log(hero1);
// Hero {name: "Paul", level: 2}
// constructor: class Hero
// greet: ƒ greet()

//  Classes allow for a more simple and succinct syntax, but sacrifice some clarity in the process.

// *************************
// EXTENDING A CLASS
// *************************

//  An advantageous feature of constructor functions and classes is that they can be extended into new object blueprints based off of the parent.
// This prevents repetition of code for objects that are similar but need some additional or more specific features.

//  New constructor functions can be created from the parent using the call() method.

// In the example below, we will create a more specific character class called Mage,
//  and assign the properties of Hero to it using call(), as well as adding an additional property.

// Creating a new constructor from the parent
function Mage(name, level, spell) {
  // Chain constructor with call
  Zero.call(this, name, level);

  this.spell = spell;
}

//  Now, we can create a new instance of Mage using the same properties as Hero as well as a new one we added.
const zero2 = new Mage("Leon", 2, "Magic Missile");

console.log(zero2);
// new Mage based off the constructor is created.
// Mage {name: "Leon", level: 2, spell: "Magic Missile"}
// constructor: ƒ Mage(name, level, spell)

// With ES6 classes, the super keyword is used in place of call to access the parent functions.
//  We will use extends to refer to the parent class.

// Creating a new class from the parent
class Gage extends Hero {
  constructor(name, level, spell) {
    // Chain constructor with super
    super(name, level);

    // Add a new property
    this.spell = spell;
  }
}

// Create a new Gage instance
const hero2 = new Gage("Zeon", 3, "Super Missile");

console.log(hero2);
//  Gage {name: "Zeon", level: 3, spell: "Super Missile"}
// constructor: class Gage

// Although the syntax is quite different, the underlying result is nearly the same between both methods.
//  Classes give us a more concise way of creating object blueprints, and constructor functions describe more accurately what is happening under the hood.
