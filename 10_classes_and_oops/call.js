// window = {
//     this = window
// }

// node = {}

function SetUsername(username) {
  // Complex database call

  this.username = username;
  console.log("called")
}

function createUser(username, email, password) {
  SetUsername.call(this, username); // iska call gayab ho jayega apan ko refrence hold karke rakhna hai means this bhi pass karna padega means current cintext
  this.email = email;
  this.password = password;
}

const chai = new createUser("Chai", "chai@fb.com", 123)
console.log(chai);
