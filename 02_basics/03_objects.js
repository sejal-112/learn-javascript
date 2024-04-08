// object can we declare by two methods 
// 1. Constructor --> singelton banega
// 2. Literals --> no singleton

//objects literals
// by constructor --> Object.create

const mySym = Symbol("key1")
const JsUser = { // yahan pe key value dono apne hisab se design kar sakte hain 
    name: "Sejal",
    age: 22,
    // mySym: "mykey1",  // it is not use here as symbol by checking it's datatype it shows string andar symbol hi hai but poora . ke through use karenge to string ki tarah hoga
    [mySym]: "mykey1",
    "full name": "Sejal Gupta",
    location: "Ayodhya",
    email: "sejal@google.com",
    isLoggedIn: false,
    lastLoginDyas: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])  // isko . se access nhi kar sakte
// console.log(JsUser[mySym])
// console.log(typeof mySym)
// console.log(typeof JsUser[mySym])

// Change the object

JsUser.email = "sejal@chatgpt.ai"
// console.log(JsUser.email)

// Object.freeze(JsUser)  // iske baad value change nhi kar sakte
JsUser.email = "sejal@microsoft.com"
// console.log(JsUser.email)
// console.log(JsUser)

JsUser.greeting = function() {
    console.log("Hello Js User");
}

JsUser.greeting2 = function() {
    console.log(`Hello Js User, ${this.name}`);  // same object ko refrence karna hai by using backticks karte hain ise bolte hai string interpolation
}

console.log(JsUser.greeting());
console.log(JsUser.greeting2());

 