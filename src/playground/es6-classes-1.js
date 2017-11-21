class Person {
  constructor(name = "Anonymous", age = "unknown") {
    //function default
    this.name = name;
    this.age = age;
  }
  getGreeting() {
    return `Hi. I am ${this.name}!`;
  }
  getDescription() {
    return `${this.name} is ${this.age} years old.`;
  }
}

class Student extends Person {
  constructor(name, age, major) {
    super(name, age); //calls the parent class
    this.major = major;
  }
  hasMajor() {
    return !!this.major; //this.major returns value of major. ! makes it false and !! makes it true.
  }
  //redefine getDescription method for Student class
  getDescription() {
    let description = super.getDescription();

    if (this.hasMajor()) {
      description += ` Their major is ${this.major}.`;
    }
    return description;
  }
}

class Traveler extends Person {
  constructor(name, age, homeLocation) {
    super(name, age);
    this.homeLocation = homeLocation;
  }
  hasHomeLocation() {
    return !!this.homeLocation;
  }
  getGreeting() {
    let greeting = super.getGreeting();

    if (this.hasHomeLocation()) {
      greeting += ` I'm visiting from ${this.homeLocation}.`;
    }
    return greeting;
  }
}

const me = new Traveler("Joe Warren", 29, "Little Elm");
console.log(me.getGreeting());

const other = new Traveler();
console.log(other.getGreeting());
