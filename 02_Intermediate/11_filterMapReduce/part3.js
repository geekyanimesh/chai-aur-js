
// reduce

const myNums = [1, 2, 3]

const myTotal = myNums.reduce(function (acc, currval) {
    console.log(`acc: ${acc} and currval: ${currval}`);
    return acc + currval
}, 0)


const shoppingCart  = [
    {
        itemName: 'js',
        price: 299
    },
    {
        itemName: 'py',
        price: 399
    },
    {
        itemName: 'dsa',
        price: 677
    }
]

const finalPrice = shoppingCart.reduce((acc, item)=> acc+ item.price, 0);
console.log(finalPrice)