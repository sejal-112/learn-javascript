// reduce
const myNum = [1, 2, 3, 4, 5]

// const myTotal = myNum.reduce(function (acc, currval) { 
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 3)

// const myTotal = myNum.reduce( (acc, currval) => acc + currval, 0)
// console.log(myTotal)


const  shoppingCart = [ 
    {
        itemName : "js course",
        price : 2999
    },

    {
        itemName : "py course",
        price : 999
    },

    {
        itemName : "mobile dev course",
        price : 5999
    },

    {
        itemName : "data science course",
        price : 12999
    },


]

const totalPriceToPay = shoppingCart.reduce( (acc, item) => acc + item.price, 0)

console.log(totalPriceToPay)

