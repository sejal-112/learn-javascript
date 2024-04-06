//  Primitive
// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt, 

// const score = 100
// const scoreValue = 100.3

// const isLoggedIn = false
 const outsideTemp = null
// let userEmail;


let id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId)

const bigNumber = 343467457234238487923n
console.log(bigNumber)


// Refrence type of Non-prmitive
// Arrays, Objects, Functions

const heros = ["sahktiman", "naagraj", "doga"]
let myObj = {
    name: "sejal",
    age: 22
}

const myFunction = function() {
    console.log("Hello Sejal")
}

console.log(typeof bigNumber)
console.log(typeof outsideTemp)

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack memory (Primitive types), Heap (Non-Primitive)

let myYoutubename = "sejalguptadotcom"
let anothername = myYoutubename
anothername = "Learn web Development"

console.log(myYoutubename);
console.log(anothername);

// here we are just copying



// here er are passing the actual value means referenceing
let user = {
    email: "user@google.com",
    upi : "user1"
}

let user2  = user

user2.email = "sejal@google.com"

console.log(user.email)
console.log(user2.email)








