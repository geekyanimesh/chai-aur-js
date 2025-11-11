// singleton 

const tinderUser  = new Object();

tinderUser.id = "User1";
tinderUser.name = "Sam";
tinderUser.isLoggedIn = false;


const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: 'Sam',
            lastname: "Yo"
        }
    }
}

console.log(regularUser.fullname.userfullname.firstname)
 
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

const obj3 = Object.assign({}, obj1, obj2);

const obj4 = {... obj1, ... obj2}

console.log(obj3)
console.log(obj4)

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

