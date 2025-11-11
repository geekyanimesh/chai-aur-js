
function calculateCartPrice(...num1){
    return num1;
}

console.log(calculateCartPrice(200, 400, 500));

const user = {
    username: "Animesh",
    bill: 1999
}

function handleObjects(anyObj){
    console.log(`Username is ${anyObj.username} and price is ${anyObj.bill}`);
}

handleObjects(user)

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));

