// ******************************
// 1. Definition
// ******************************

// class declaration
class User {
  // the body of class
}

// class expression
const UserClass = class {
  // the body of class
};

// Default export a class as an ES2015 module
// export default class Person {
//   // the body of class
// }

// Named export
// export class User {
//   // the body of lcass
// }

// The class becomes useful when you create an instance of the class.
// An instance is an object containing data and behavior described by the class.
// Syntax: instance = new Class()
const myUser = new User();
// new User() creates an instance of the User class.

// ******************************
// 2. Initialization: constructor()
// ******************************

// constructor(param1, param2, ...) is a special method in the body of a class that initializes the instance.
// That’s the place where you set the initial values for the fields, or do any kind of object setup.
class Teacher {
  constructor(name) {
    // =>'Jon Snow'
    name: this.name = name;
  }
}

// Teacher’s constructor has one parameter name, which is used to set the initial value of the field this.name.
// Inside the constructor this value equals to the newly created instance.
// The arguments used to instantiate the class become the parameters of the constructor:

const teacher1 = new Teacher("Jon Snow");
// name parameter inside the constructor has the value 'Jon Snow'.

// If you don’t define a constructor for the class, a default one is created. The default constructor is an empty function, which doesn’t modify the instance.
// At the same time, a JavaScript class can have up to one constructor.

// ******************************
// 3.Fields
// ******************************

// Class fields are variables that hold information. Fields can be attached to 2 entities:
// a. Fields on the class instance
// b. Fields on the class itself (aka static)
// The fields also have 2 levels of accessibility:
// i. Public: the field is accessible anywhere
// ii. Private: the field is accessible only within the body of the class

// ********* PUBLIC INSTANCE FIELD ****************

// The expression this.name = name creates an instance field name and assigns to it an initial value.
// To access name field using a property accessor:
console.log(teacher1.name); //'Jon Snow'

// name is a public field because you can access it outside of the Teacher class body.
// When the fields are created implicitly inside the constructor, like in the previous scenario, it could be difficult to grasp the fields list.
// You have to decipher them from the constructor’s code.

// A better approach is to explicitly declare the class fields.
// No matter what constructor does, the instance always has the same set of fields.

// There’s no restriction on access or update of the public fields.
// You can read and assign values to public fields inside the constructor, methods, and outside of the class.

// ************ PRIVATE INSTANCE FIELD *************

//  Encapsulation is an important concept that lets you hide the internal details of a class.
// Someone that uses an encapsulated class depends only on the public interface that the class provides, and doesn’t couple to the implementation details of the class.
// Classes organized with encapsulation in mind are easier to update when implementation details change.

// A good way to hide internal data of an object is to use the private fields.
// These are the fields that can be read and change only within the class they belong to.
// The outside world of the class cannot change private fields directly.

// The private fields are accessible only within the body of the class.

// Prefix the field name with the special symbol # to make it private, e.g. #myField.
// The prefix # must be kept every time you work with the field: declare it, read it, or modify it.

class Student {
  #name;

  constructor(name) {
    this.#name = name;
  }

  getName() {
    return this.#name;
  }
}

const student1 = new Student("Andrew");
const student1Name = student1.getName();
console.log(student1Name); // 'Andrew'

// const studentName = student1.#name;
// console.log(studentName); // Uncaught SyntaxError: Private field '#name' must be declared in an enclosing class

// #name is a private field.
// You can access and modify #name within the body of the User. The method getName() can access the private field #name.

// But if you try to access the private field #name outside of User class body, a syntax error is thrown:
// SyntaxError: Private field '#name' must be declared in an enclosing class.
