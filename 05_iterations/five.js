// for each

const coding = ["js", "ruby","cpp", "java", "python"]

// coding.forEach( function (item) { // callback function so this is the funciton without name
//     console.log(item);
// })

// coding.forEach( (item) => {
//     console.log(item);

// })

// function printMe(item) {
//     console.log(item)
// }


// coding.forEach(printMe)

// coding.forEach( (item, index, arr) => {
//     console.log(item, index, arr)
// })


const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "C++",
        languageFileName: "cpp"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    }
]

myCoding.forEach( (item) => {
    console.log(item.languageName)
})



