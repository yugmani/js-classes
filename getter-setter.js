// *************************************
// Getters and setters
// ************************************

// The getter and setter mimic regular field, but with more control on how the field is accessed and changed.

// The getter is executed on an attempt to get the field value, while setter on an attempt to set a value.

class Fruit {
  #nameValue;

  constructor(name) {
    this.name = name;
  }

  get name() {
    return this.#nameValue;
  }

  set name(str) {
    if (str === "") {
      throw new Error(`name field of Fruit cannot be empty`);
    }

    this.#nameValue = str;
  }
}

const fruit1 = new Fruit("Mango");
console.log(fruit1.name); // The getter is invoked. ==>Mango
fruit1.name = "Apple"; // The setter is invoked;
console.log(fruit1.name); // Apple

// fruit1.name = ""; // Uncaught Error: name field of Fruit cannot be empty at Fruit
// get name() {...} getter is executed when you access the value of the field: fruit1.name.
// While set name(name) {...} is executed when the field is updated fruit1.name = 'Blue Berry'.

// **********  Static methods ***********

// The static methods are functions attached directly to the class.
// They hold logic related to the class, rather than to the instance of the class.

// When working with static methods, there are 2 simple rules to remember:
// 1. A static method can access static fields
// 2. A static method cannot access instance fields.

class Animal {
  static #takenNames = [];

  static isNameTaken(name) {
    return Animal.#takenNames.includes(name);
  }

  name = "Unknown";

  constructor(name) {
    this.name = name;
    Animal.#takenNames.push(name);
  }
}

const animal1 = new Animal("Polar Bear");

console.log(Animal.isNameTaken("Polar Bear")); //true
console.log(Animal.isNameTaken("Red Panda")); // false
