const user = {
    username: "sejal",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username}, welcome to the website`); // when we refer current context then we apply this keyword 
        console.log(this)
    }

}

// user.welcomeMessage()
// user.username = "shresth" // we simply changed the value
// user.welcomeMessage()

// console.log(this)  // int node it gives an empty object 
// and in browser it gives non-empty global window object


// function one() {
//     let username = "sejal"
//     console.log(this.username);
// }
// one()

// const one = function() {
//     let username = "sejal"
//     console.log(this.username)
// }
// one()

// const one = () => {
//     let username = "sejal"
//     console.log(this.username)
// }
// one()

 const addTwo = (num1, num2) => {
    return num1 + num2;
 }

 console.log(addTwo(2, 6));

 const addTwo2 = (num1, num2) => num1 + num2 // it take as return already

 console.log(addTwo2(1, 10))

 const addTwo3 = (num1, num2) => (num1 + num2 ) // we use this in case when we have to return object
 console.log(addTwo3(1,23)) 



 const addTwo4 = (num1, num2) => ({username: "sejal"})
 console.log(addTwo4(12, 34))

 











