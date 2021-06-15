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

// ************ PUBLIC STATIC FIELDS *************

// You can also define fields on the class itself: the static fields.
// These are helpful to define class constants or store information specific to the class.
// To create static fields in a JavaScript class, use the special keyword static followed by the field name: static myStaticField.

class Employee {
  static TYPE_ADMIN = "admin";
  static TYPE_REGULAR = "regular";

  name;
  type;

  constructor(name, type) {
    this.name = name;
    this.type = type;
  }
}

const admin = new Employee("Site Admin", Employee.TYPE_ADMIN);
console.log(admin.type === Employee.TYPE_ADMIN); //=>True

// static TYPE_ADMIN and static TYPE_REGULAR define static variables inside the User class.
// To access the static fields, you have to use the class followed by the field name: User.TYPE_ADMIN and User.TYPE_REGULAR.

// ************ PRIVATE STATIC FIELDS *************

//  To make the static field private, prefix the field name with # special symbol: static #myPrivateStaticField.

class Member {
  static #MAX_INSTANCES = 2;
  static #instances = 0;

  name;

  constructor(name) {
    Member.#instances++;
    if (Member.#instances > Member.#MAX_INSTANCES) {
      throw new Error("Unable to create Member instance");
    }

    this.name = name;
  }
}

new Member("Cyrus"); // No Error
new Member("Prayash Gurung"); // No Error
// new Member("Jasmina Torres");
// Uncaught Error: Unable to create Member instance at new Member

// ******************************
// 4. METHODS
// ******************************

// The fields hold data.
// But the ability to modify data is performed by special functions that are a part of the class: the methods.

// The JavaScript classes support both instance and static methods.

// ************ INSTANCE METHODS *************

// Instance methods can access and modify instance data.
// Instance methods can call other instance methods, as well as any static method.

class Player {
  name = "Unknown";

  constructor(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }

  nameContains(str) {
    return this.getName().includes(str);
  }
}

const player1 = new Player("Anil Gurung");
console.log(player1.getName()); // Anil Gurung

// getName() { ... } is a method inside the Player class.
// player1.getName() is a method invocation: it executes the method and returns the computed value if any.
// In a class method, as well as in the constructor, this value equals to the class instance.
// Use this to access instance data: this.field, or even call other methods: this.method().

// nameContains(str) { ... } is a method of Player class that accepts one parameter str.
// More than that, it executes another method of the instance this.getName() to get the player1’s name.
console.log(player1.nameContains("Anil")); //true
console.log(player1.nameContains("Torres")); //false

// ********** Private Methods *********

// A method can also be private.
// To make the method private prefix its name with #.

class Book {
  #name;

  constructor(name) {
    this.#name = name;
  }

  #getName() {
    return this.#name;
  }

  nameContains(str) {
    return this.#getName().includes(str);
  }
}

const book1 = new Book("Harry Potter");
console.log("Dogman: " + book1.nameContains("Dogman")); //false
console.log("Harry: " + book1.nameContains("Harry")); //true

// Being private, #getName() cannot be called outside of Book class body.
