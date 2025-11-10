/*
    Primitive data types - Call by value
    
    # Call by value - A copy is provided by the system 
        and the changes are done on the copy and not on the
        memory

    1. String
    2. Number
    3. Boolean
    4. Undefined
    5. Symbol
    6. BigINT
    
    Non Primitive - Call by reference

    1. Array
    2. Objects
    3. Functions

*/

const heros = ["batman", "superman", "flash"];

let myObj = {
    name:'Animesh',
    age:21
}

const myFun = function (){
    console.log("hello world");
}

myFun();

