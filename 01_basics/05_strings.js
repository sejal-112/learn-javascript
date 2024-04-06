const name = "Sejal"
const repoCount = 50

// console.log(name + repoCount + " Value")
console.log(`Hello my name is ${name} and my repo count is {repocount}`);

console.log("hello")
const gameName = new String('sejal')

console.log(gameName[0]);
console.log(gameName.__proto__); // gives prototype about function
console.log(gameName.length);
console.log(gameName.toUpperCase())
console.log(gameName.charAt(7))
console.log(gameName.charAt(3))
console.log(gameName.charAt(0))
console.log(gameName.indexOf('t'))

const newString = gameName.substring(-3, 2)
console.log(newString)
const anotherString = gameName.slice(-3,4)
console.log(anotherString)

const newStringOne = "    Sejal    "
console.log(newStringOne);
console.log(newStringOne.trim())

const url = "https://google.com/google%20india"
url.replace('%20', '-')
console.log(url.replace('%20', '-'))

console.log(url.includes('google'));

// string into array
console.log(gameName.split('-'))









