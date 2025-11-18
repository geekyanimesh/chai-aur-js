
const arr = [1,2,3,4,5];

const greetings = "Hello world!"
for (const greet of greetings) {
    console.log(`Each char is ${greet}`)
}

// Maps

const map = new Map();
map.set("IN","India");
map.set("USA","America");
map.set("FR","France");

console.log(map)

for(const [key, value] of map){
  //  console.log(key, ':-', value);
}

const myObj = {
    'game1': 'NFS',
    'game2': 'Spiderman'
}

// for(const [key, value] of myObj){
//     console.log(key, ':-', value);
// }

const myObject = {
    js: 'javascript',
    cpp: 'c++',
    rb: 'ruby'
}

for(const key in myObject){
    console.log(`Key:${key} and Value: ${myObject[key]}`)
}

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    
    console.log(item.languageName);
} )