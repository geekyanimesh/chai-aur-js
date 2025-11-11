
function addTwoNums(num1, num2){
    let result = num1+num2;
    return result;
}

console.log(addTwoNums(2,5));

function loginUserMessage(username = "guest user"){
    return `${username} just logged in.`
}

console.log(loginUserMessage('Animesh')); 
console.log(loginUserMessage()); 
