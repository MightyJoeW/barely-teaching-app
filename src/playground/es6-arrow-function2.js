// arguments object - no longer bound with arrow functions


const add = function (a, b) {
    console.log(arguments);
    return a + b;
}
console.log(add(55, 1));

// this keyword - no longer bound with arrow functions

// const user = {
//     name: 'Joe',
//     cities: ['Chicago', 'San Antonio', 'Dallas'],
//     printPlacesLived() {
//         return this.cities.map((city) => `${this.name} has lived in ${city}!`;
//     }
// };
// console.log(user.printPlacesLived());

//Challenge

const multiplier = {
    numbers: [2, 4, 6], //array of numbers
    multiplyBy: 2, //single number, run multiplication and get new array back.
    multiply() { //return new array where numbers have been multiplied
        return this.numbers.map((num) => num * this.multiplyBy);
    }
}
console.log(multiplier.multiply());