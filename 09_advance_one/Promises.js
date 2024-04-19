//here creating a new Promise and assign it to a variable
// const promiseOne = new Promise(function(resolve, reject) {
//     // Do an async task
//     // DB calls, cryptography, network related
//     setTimeout(function(){
//         console.log("Async taks is complete");
//         resolve();
//     }, 1000);
// });

// resolve directly connected to then, when we  resolve call then it goes to then
// promiseOne.then(function(){
//     console.log("Promise consumed");
// })

//cannot store in a variable  so we can use .then here
//  new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log("Async task two")
//         resolve()

//     }, 1000)

// }).then(function() {
//     console.log("Async 2 resolved")
// })

// const promiseThree = new Promise(function(resolve, reject) {
//     setTimeout(function() {
//         // resolve mein hum object pass karte hain
//         resolve({username: "Sejal", email: "something@example.com"})
//     }, 1000)
// })

// after passing data in resolve hum use then mein kse lenge??
// wahi data aayega jo resolve se aa raha hai
// promiseThree.then(function(user) {
//     console.log(user);
// })

// const promiseFour = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     let error = false;
//     if (!error) {
//       resolve({ username: "Shresth", password: 123 });
//     } else {
//       // if error occured then er can do this
//       reject("ERROR: Something went wrong");
//     }
//   }, 1000);
// });

// data nahi aa rha hai toh hum chaining kar sakte hain isme jisse agar ek function nhi chala toh doosra chl jayega hum isse callback hell se bhi bach sakte hain
// const username = promiseFour
//   .then((user) => {
//     console.log(user);
//     return user.username;
//   })
//   .then((username) => {
//     // jo upar wale then se value return hoke aayegi wo isme aayegi
//     console.log(username);
//   })
//   .catch(function (error) {
//     console.log(error);
//   })
//   .finally(function () {
//     // it is default ye toh chalega hi agar kuch nhi chala toh
//     console.log("The Promise is either resolved or rejected");
//   });
// console.log(username);

// const promiseFive = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     let error = true;
//     if (!error) {
//       resolve({ username: "Javascript", password: 123 });
//     } else {
//       reject("ERROR: JS went wrong");
//     }
//   }, 2000);
// });

// Async await directly error ko handle nhi kar sakte hain  therefore we  can use try catch
// Async await thori der wait karta hai kaam hone kaa agar ho gya toh aage bdh gya warna wahi error dedega
// yahan hum gracefully catch handle nhi karte hain
// async function consumePromiseFive() {
//   try {
//     // wait karo
//     const response = await promiseFive;
//     console.log(response);
//   } catch (error) {
//     console.log(error);
//   }
// }

// consumePromiseFive()

// async function getAllUsers() {
//   try{
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");

//     // console.log(response)
//   const data = await response.json(); // yahanpe bhi await lagayenge kyunki data fetch hone mein time lagta hai
//   console.log(data);
//   }
//   catch(error) {
//     console.log("E: ", error)
//   }
// }

// getAllUsers()



// yahan pe try, catch,  wait nhi karna padta
// fetch sabse zyada fast hota hai hai pehle hi sabse data fetch karke de sakta hai
fetch("https://jsonplaceholder.typicode.com/users")
.then((response) => {
    return response.json()
})
// response.json ko call oh kar dia par ab handle karne k liye ek or then lagalo
.then((data) => {
    console.log(data)

}) 
.catch((error) => {
    console.log(error)
})



