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
let aPerson = new Person('Just', 'Do', 'It');
console.log(aPerson);
console.log('- - - - - - - - - - - - - - - - - - - - - - - - -');
class Book {
    constructor(title, author, rating) {
        this.title = title;
        this.author = author;
        this.rating = rating;
    }
}

let book1 = new Book('You Don\'t know JS', 'Unknown', 10);
let book2 = new Book('Principles', 'Ray Dalio', 8);

Book.prototype.isGood = function() {
    return this.rating > 7;
}
console.log(book1);
console.log(book2);
console.log("Good? ", book1.isGood());
console.log('- - - - - - - - - - - - - - - - - - - - - - - - -');
class Dog {
    constructor(name, breed, mood, hungry) {
        this.name = name;
        this.breed = breed;
        this.mood = mood;
        this.hungry = hungry;
    }
    playFetch() {
        this.hungry = true;
        this.mood = 'playful';
        console.log('Ruff!');
    }
}
Dog.prototype.feed = function() {
    if (this.hungry) {
        this.hungry = false;
        console.log('Woof!');
    } else {
        console.log('You tryna make me fat?!');
    }
}
Dog.prototype.toString = function() {
    return `${this.name} is a beautiful ${this.breed} dog. Right now he is ${this.mood} and ${this.hungry ? 'hungry' : 'not hungry'}.`;
}
let doggo = new Dog('Lika', 'German Sheppard', 'happy', true);
console.log(doggo);
console.log(doggo.playFetch());
console.log(doggo.feed());
console.log(doggo.toString());
console.log('- - - - - - - - - - - - - - - - - - - - - - - - -');
const feezingPoint = {
    celsius: 0,
    fahrenheit: 32,
    kelvin: 273.2
};

