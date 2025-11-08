
// Memory  - Stack Memory (Primtive)
//         - Heap Memory (Non-Primitive)

let myName = "Animesh";
let anotherName = myName;

anotherName = "Kumar";

console.log(myName);        // Animesh
console.log(anotherName);   // Kumar

let userOne = {
    email: "animesh@gmail.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "kumar@gmail.com"

console.log(userOne.email);     // kumar@gmail.com
console.log(userTwo.email);     // kumar@gmail.com

