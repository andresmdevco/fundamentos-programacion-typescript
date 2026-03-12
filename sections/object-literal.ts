
export let person = {
    name: 'Melissa',
    age: 30,
    isActive: true,
    hobbies: ['soccer','baseball'],
    toString() {
        let objectString = this.name + ' ' + this.age + ' ' + this.hobbies;
        console.log( objectString );    
    }
};


// console.log( person.name );
// person.toString();  

let car = {
    doors: 4,
    brand: "Porsche",
    color: "rojo",
    year: 2025,
    horsePower: 200
};

let smartTv = {
    sizeInches: 35,
    brand: "Samsung",
    year: 2015,
    resolution: "FullHD"
};

let youtubeVideo = {
    durationMin: 30,
    author: 'Andrés Muñoz',
    language: "Español",
    views: 200000,
    comments: ['Buen video','Me gustó mucho','El peor video de todos'],
    likes: 1500,
    dislikes: 100
};

console.log(car);
console.log(smartTv);
console.log(youtubeVideo);