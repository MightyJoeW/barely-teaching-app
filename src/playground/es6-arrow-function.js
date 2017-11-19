// es5 function
const square = function (num) {
    return num * num;
}
console.log(square(3));

// es6 arrow function
const squareNum = (num) => {
    return num * num;
}
console.log(squareNum(4));

// es6 arrow function 1 line
const squareQuick = num => num * num;
console.log(squareQuick(4));

//challenge - use arrow functions
//getFirstName should return a person's first name only

const getFirstName = (name) => name.split(' ')[0];
getFirstName('Joe Warren');