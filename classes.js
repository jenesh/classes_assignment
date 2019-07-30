class Person {
  constructor(first, last, middle) {
    this.first = first;
    this.last = last;
    this.middle = middle;
  }
  fullName() {
    return `${this.first} ${this.middle} ${this.last}`;
  }
}

let aPerson = new Person("Just", "Do", "It");
console.log(aPerson);
console.log("- - - - - - - - - - - - - - - - - - - - - - - - -");
class Book {
  constructor(title, author, rating) {
    this.title = title;
    this.author = author;
    this.rating = rating;
  }
}

let book1 = new Book("You Don't know JS", "Unknown", 10);
let book2 = new Book("Principles", "Ray Dalio", 8);

Book.prototype.isGood = function() {
  return this.rating > 7;
};

console.log(book1);
console.log(book2);
console.log("Good? ", book1.isGood());
console.log("- - - - - - - - - - - - - - - - - - - - - - - - -");
class Dog {
  constructor(name, breed, mood, hungry) {
    this.name = name;
    this.breed = breed;
    this.mood = mood;
    this.hungry = hungry;
  }
  playFetch() {
    this.hungry = true;
    this.mood = "playful";
    console.log("Ruff!");
  }
}

Dog.prototype.feed = function() {
  if (this.hungry) {
    this.hungry = false;
    console.log("Woof!");
  } else {
    console.log("You tryna make me fat?!");
  }
};

Dog.prototype.toString = function() {
  return `${this.name} is a beautiful ${this.breed} dog. Right now he is ${
    this.mood
  } and ${this.hungry ? "hungry" : "not hungry"}.`;
};

let doggo = new Dog("Lika", "German Sheppard", "happy", true);

console.log(doggo);
console.log(doggo.playFetch());
console.log(doggo.feed());
console.log(doggo.toString());
console.log("- - - - - - - - - - - - - - - - - - - - - - - - -");
const feezingPoint = {
  celsius: 0,
  fahrenheit: 32,
  kelvin: 273.2
};

class Celsius {
  constructor(celsius) {
    this.celsius = celsius;
  }
  getFahrenheitTemp() {
    return this.celsius * 1.8 + 32;
  }
  getKelvinTemp() {
    return this.celsius + 273;
  }
}

let outsideTempt = new Celsius(10.0);

console.log(outsideTempt.celsius);
console.log(outsideTempt.getKelvinTemp());
console.log(outsideTempt.getFahrenheitTemp());
Celsius.prototype.isBelowFreezing = function() {
  return this.celsius < 0;
};
console.log(outsideTempt.isBelowFreezing());
console.log("- - - - - - - - - - - - - - - - - - - - - - - - -");
class Movie {
  constructor(name, year, genre, cast, description) {
    this.name = name;
    this.year = year;
    this.genre = genre;
    this.cast = cast;
    this.description = description;
  }
}

Movie.prototype.blurb = function() {
  return `${this.name} was released on ${this.year}, a ${
    this.genre
  } movie featuring ${this.cast.toString()}.`;
};

let batman = new Movie(
  "Batman",
  2017,
  "Superhero",
  "Bruce Wayne",
  "Great Movie"
);

console.log(batman.blurb());
console.log("- - - - - - - - - - - - - - - - - - - - - - - - -");
class Vector {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  plus(vec) {
    return `Vector {x: ${this.x + vec.x}, y: ${this.y + vec.y}}`;
  }
  minus(vec) {
    return `Vector {x: ${this.x - vec.x}, y: ${this.y - vec.y}}`;
  }
  getLength() {
    return Math.sqrt(this.x ** 2 + this.y ** 2);
  }
}

let v1 = new Vector(1, 2);
let v2 = new Vector(2, 3);
console.log(v1.plus(v2));
console.log(v1.minus(v2));
let v3 = new Vector(3, 4);
console.log(v3.getLength());
console.log("- - - - - - - - - - - - - - - - - - - - - - - - -");

class Vehicle {
  constructor(color, name) {
    this.color = color;
    this.name = name;
  }
  makeSound() {
    console.log("WHHOOSSSH");
  }
}

class Car extends Vehicle {
  constructor(color, name, make, model) {
    super(color, name);
    this.make = make;
    this.model = model;
  }
  static numberOfWheels() {
    return 4;
  }
}

let firstCar = new Car("Tesla", "Model X");
console.log(firstCar);

class Bike extends Vehicle {
  constructor(color, name, gears, hasBell) {
    super(color, name);
    this.gears = gears;
    this.hasBell = hasBell;
  }
  static numberOfWheels() {
    return 2;
  }
}

let firstBike = new Bike("8", false);
console.log(firstBike);

console.log("It is a universal truth no matter the instance");
console.log("- - - - - - - - - - - - - - - - - - - - - - - - -");

let secondBike = new Bike("red", "speed demon", "8", true);
let secondCar = new Car("red", "Flash", "Corvette", "Sting Ray");

console.log(secondBike);
console.log(secondCar);
