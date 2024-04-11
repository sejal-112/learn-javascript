const emptyObj = {}

if(Object.keys(emptyObj).length === 0) {  // it creates an array
    console.log("Object is empty")


}

// false == 0
// false == " "
// 0 == " " // all gives true answer


// Nullish Coalescing Operator (??): null undefined

let val1;
val1 = 5 ?? 10
console.log(val1)
val1 = null ?? 10

console.log(val1)

val1 = undefined ?? 15

console.log(val1)

val1 = null ?? 10 ?? 80
console.log(val1)


// Terniary Operator

//condition ? true : false

const iceTeaPrice = 100
iceTeaPrice >= 80 ? console.log("More than 80") : console.log("Less than 80")


