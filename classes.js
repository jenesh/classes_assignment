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

class Book {
    constructor(title, author, rating) {
        this.title = title;
        this.author = author;
        this.rating = rating;
    }
}

let book1 = new Book('You Don\'t know JS', 'Unknown', 10);
let book1 = new Book('Principles, 'Ray Dalio', 8);

Book.prototype.isGood = function() {
    return this.rating > 7;
}

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
        console.log('Ruff!!');
    }
}
