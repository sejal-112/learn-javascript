//const promiseOne = new Promise(function(resolve, reject) {
// Do an async task
// DB calls, cryptography, network
//     setTimeout(function(){
//         console.log('Async task is complete');
//         resolve()
//     }, 1000)

// })

// promiseOne.then(function(){  // callback function
//     console.log("Now resolve then Promise consumed");
// })

// new Promise(function(resolve, reject) {
//     setTimeout(function() {
//         console.log("Async task 2");
//         resolve()
//     }, 1000)

// }).then(function(){
//     console.log("Async 2 resolve");
// })

// const promiseThree = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log("Async task 3")
//         resolve({username: "Chai", email: "sejal@example.com"})
//     }, 1000)

// })

// promiseThree.then(function(user) {
//     console.log(user)
// })

// const promiseFour = new Promise(function(resolve, reject) {
//     setTimeout(function(){
//         let error = false;
//         if(!error) {
//             resolve({username: "Sejal", password: "123"})
//         }
//         else {
//             reject('ERROR: Something went wrong')

//         }
//     }, 1000)

// })

// const username = promiseFour.then((user) => {
//     console.log(user);
//     return user.username
// })
// console.log(username);

// promiseFour
// .then((user) => {
//     console.log(user);
//     return user.username
// })
// .then((username) => { // chaining
//     console.log(username)
// })
// .catch((error) => {
//     console.log(error)
// }).finally(() => console.log("The promise is either resolved or rejected"))

// const promiseFive = new Promise((resolve, reject) => {
//     setTimeout(function(){
//         let error = false
//         if(!error) {
//             resolve({username: "Javascript", password: "123"})
//         }else {
//             reject('ERROR: JS went wrong')
//         }
//     }, 1000);

// });

// async function consumePromiseFive() {
//     try{
//         const response = await promiseFive
//     console.log(response);
//     } catch(error) {
//         console.log(error)
//     }
// }

// consumePromiseFive()

// async function getAllUsers() {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     console.log(response);
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.log("E: ", error);
//   }
// }

fetch('https://jsonplaceholder.typicode.com/users') 
.then((response) => {
    return response.json()
}) 
.then((data) => {
    console.log(data)
}) 
.catch((error) => console.log(error))







// getAllUsers();
