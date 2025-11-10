
const myArray = [0,1,2,3,4,5]

// Array creates shallow copy.

const myArray2 = new Array(1,2,3,4);

// Array methods

myArray.push(6);
console.log(myArray);       // [0, 1, 2, 3, 4, 5, 6]

myArray.pop();
console.log(myArray)

// shift and unshift

console.log(myArray.includes(6));
console.log(myArray.indexOf(4));

const newArr = myArray.join();
console.log(myArray);       // [ 0, 1, 2, 3, 4, 5 ] - Array
console.log(newArr);        // 0,1,2,3,4,5 - String

// slice and splice

const myn1=myArray.slice(1,3);
console.log(myn1);

const myn2=myArray.splice(1,3);
console.log(myn2);
 
// splice manipulates the original array itself
