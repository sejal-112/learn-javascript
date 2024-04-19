// Object Literal

const user = {
  username: "Sejal",
  loginCount: 8,
  signedIn: true,

  getUserDetails: function () {
    // console.log("Got user details from database")
    // console.log(`username: ${this.username}`) // this means apni current context ki baat kar raha hai
    // console.log(this)
  },
};

console.log(user.username);
console.log(user.getUserDetails());

console.log(this); // gives empty paranthesis

// const promiseOne = new Promise() // construtor
// const date = new Date()

function User(username, loginCount, isLoggedIn) {
  this.username = username;
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;

//   return this;  zyada zaroorat nhi hai ye likho yaa naa likho tab bhi same i hai
}

// const userOne = User("sejal", 4, true)
console.log(userOne.constructor)

// const userTwo = User("Shresth", 5, false);
// console.log(userOne) // overwrite the function and gives userTwo values

const userOne = new User("sejal", 4, true);
console.log(userOne);
const userTwo = new User("Shresth", 5, false);
console.log(userOne);
 

// new keyword call a constructor function
// jite bhi argumenta hai sab uske andar pack karta hai or ue de deta hai
// this keyword hai wo sabke andar inject ho jate hai
// and then aapko mil jati hain value function ke andar