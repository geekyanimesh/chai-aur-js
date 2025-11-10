
// Object literals

const jsUser = {
    name: "Animesh",
    age: 20,
    location: "Ranchi",
    isOnline: true
};

console.log(jsUser.name);
console.log(jsUser['name']);

Object.freeze(jsUser) // all values fixed

