
const score = 100;
console.log(score.toFixed(2));

const otherNum = 123.8966
console.log(otherNum.toPrecision(3));

const thousands = 100000
console.log(thousands.toLocaleString('en-IN'));

// +++++++++++++++++++++++ MATHS +++++++++++++++++++++++++++

console.log(Math.abs(-232));

console.log(Math.round(4.3));

console.log(Math.ceil(4.2));    // 5
console.log(Math.floor(4.8));   // 4

console.log(Math.random());    // always between 0-1

console.log(Math.round(Math.random()*10+1));

// setting limits
const min=10;
const max=20;

console.log(Math.floor(Math.random() + (max-min+1)+min));
