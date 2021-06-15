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

// isNameTaken() is a static method that uses the static private field Animal.#takenNames to check for taken names.

// *************************************
// INHERITANCE: extends
// ************************************

// The classes in JavaScript support single inheritance using the extends keyword.
// In the expression `class Child extends Parent { }` the Child class inherits from Parent the constructor, fields, and methods.

class Bird {
  name;

  constructor(name) {
    this.name = name;
  }

  getName() {
    return "New bird is: " + this.name;
  }
}

class ContentWriter extends Bird {
  posts = [];
}

const writer = new ContentWriter("Blue Bird");
console.log(writer.name); // Blue Bird
console.log(writer.getName()); // New bird is: Blue Bird

console.log(writer.posts); //   [];

// ContentWriter inherits from the Bird the constructor, the method getName() and the field name.
// As well, the ContentWriter class declares a new field posts.

// Note: private members of a parent class are not inherited by the child class.

// **************************************************
// ********* Parent constructor: super() in constructor() ****************
// ***********************************************

// If you’d like to call the parent constructor in a child class, you need to use the super() special function available in the child constructor.

class ContentBlogger extends Bird {
  posts = [];

  constructor(name, posts) {
    super(name);
    this.posts = posts;
  }
}

const blogger = new ContentBlogger("Humming Bird", "the smalleset bird");

console.log(blogger.name); // Humming Bird
console.log(blogger.posts); // the smalleset bird

// super(name) inside the child class ContentBlogger executes the constructor of the parent class Bird.
// Calling super() makes sure that the parent constructor initializes the instance.

// **************************************************
// ********* Parent instance: super in methods. ****************
// ***********************************************

class ContentReviewer extends Bird {
  posts = [];

  constructor(name, posts) {
    super(name);
    this.posts = posts;
  }

  getName() {
    const name = super.getName();

    if (name === "") {
      return "Unknown";
    }

    return name;
  }
}

const reviewer1 = new ContentReviewer("Eagle", ["The killer bird"]);
console.log(reviewer1.getName()); // New bird is: Eagle
const reviewer2 = new ContentReviewer("", ["Unknown bird"]);
console.log(reviewer2.getName()); // New bird is:

// getName() of the child class ContentReviewer accesses the method super.getName() directly from the parent class Bird.
// This feature is called `METHOD OVERRIDING`.

// Note that you can use super with static methods too, to access the parent’s static methods.
