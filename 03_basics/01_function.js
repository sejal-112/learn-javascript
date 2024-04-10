function sayMyName() {
    console.log("S")
    console.log("E")
    console.log("J")
    console.log("A")
    console.log("L")
}

sayMyName()


// function addTwoNumbers(number1, number2) {

//     console.log(number1 + number2);
// }


function addTwoNumbers(number1, number2) {
    console.log("Sejal")

    return (number1 + number2);
}

const result = addTwoNumbers(3, 5)

console.log("Result", result)

function loginUserMessage(username) {
    if(username === undefined) {
        console.log("Please enter a username");
        return;
    }
    return `${username} just logged in`
}

console.log(loginUserMessage("Sejal"));
console.log(loginUserMessage());

function calculateCartPrice(val1, val2, ...num1) {
    return num1

}

console.log(calculateCartPrice(200, 400, 500, 2000));

const user = {
    username: "sejal",
    price: 299
}

function handleObject(anyobject) {
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)

}
//   handleObject(user)
handleObject({
    username: "sam",
    price: 199
})


const myNewArray = [200, 400, 500, 100]

function returnSecondValue(getArray) {
    return getArray[1]

}
console.log(returnSecondValue(myNewArray))










