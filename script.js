// Person Class
class Person {
  constructor(name, age) {
    this._name = name; // private-like property
    this._age = age;
  }

  // Getter for name
  get name() {
    return this._name;
  }

  // Getter for age
  get age() {
    return this._age;
  }

  // Setter for age
  set age(age) {
    this._age = age;
  }
}

// Student Class (inherits Person)
class Student extends Person {
  constructor(name, age) {
    super(name, age);
  }

  study() {
    console.log(`${this.name} is studying`);
  }
}

// Teacher Class (inherits Person)
class Teacher extends Person {
  constructor(name, age) {
    super(name, age);
  }

  teach() {
    console.log(`${this.name} is teaching`);
  }
}

/* Example Test */
const person = new Person("John", 25);
console.log(person.name); // John

person.age = 30;
console.log(person.age); // 30

const student = new Student("Alice", 22);
student.study(); // Alice is studying

const teacher = new Teacher("Bob", 40);
teacher.teach(); // Bob is teaching
