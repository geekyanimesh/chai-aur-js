
const marvel = ["iron man","hulk","thor"];
const dc = ["superman","batman","flash"];

const newArr = marvel.concat(dc);
console.log(newArr)

// spread operators

const all_new_heros  = [...marvel, ...dc];
console.log(all_new_heros);

// flat

const badArray = [3,4,5,6,[232,45,343,[54,545,22]]];
console.log(badArray);

const flatArray = badArray.flat(Infinity);
console.log(flatArray)

// isArray - returns boolean

