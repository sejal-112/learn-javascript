// array
const myArr = [0, 1, 2, 3, 4, 5, 6, 7, 8];

// const myHeroes = ["Shaktiman", "naagraj"]

// const myArr2 = new Array(1, 2, 3, 4, 5, 7)
// console.log(myArr2[0]);

// Array methods
// myArr.push(10);
// console.log(myArr)
// myArr.push(1)
// console.log(myArr)
// myArr.pop()
// console.log(myArr)
// myArr.unshift(9) // push in start thats why it is not so much in use
// console.log(myArr)
// myArr.shift(); // remove from start
// console.log(myArr)

// console.log(myArr.includes(3))
// console.log(myArr.includes(19))
// console.log(myArr)
// const newArr = myArr.join()
// console.log(newArr)

// slice, splice


const myn1 = myArr.slice(1, 3); // do not include last range value and original array remains the same
console.log(myn1)
console.log("A ", myArr)

const myn2 = myArr.splice(1, 3); //  remove the array element of given range include from 1 t0 3
console.log(myn2)
console.log("B ", myArr)









