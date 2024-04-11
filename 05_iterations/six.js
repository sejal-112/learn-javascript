// const coding = ["js", "ruby","cpp", "java", "python"]

// const values = coding.forEach( (item) => { // callback function but doesn't return any value
//     // console.log(item)
//     return item

// })
// console.log(values)


  const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// // const  newNums = myNums.filter( (num) => num > 5) //  callback function  but it returns the value 
// // console.log(newNums);

// const newNums2 = myNums.filter( (num) => {
//     return num > 5
// })
// console.log(newNums2)


// const newNums = []
// myNums.forEach( (num) => {
//     if(num > 5) {
//         newNums.push(num)
//     }
// })

// console.log(newNums)


const books = [
    {title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004},
    {title: 'Book Two', genre: 'Non-Fiction', publish: 1981, edition: 2004},
    {title: 'Book Three', genre: 'History', publish: 1981, edition: 2004},
    {title: 'Book Four', genre: 'Non-Fiction', publish: 1981, edition: 2004},
    {title: 'Book Five', genre: 'Science', publish: 1981, edition: 2004},
    {title: 'Book Six', genre: 'Fiction', publish: 1981, edition: 2004},
    {title: 'Book Seven', genre: 'History', publish: 1981, edition: 2004},
    {title: 'Book Eight', genre: 'Fiction', publish: 1981, edition: 2004},
    {title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 2004},
    {title: 'Book Ten', genre: 'Fiction', publish: 1981, edition: 2004},
    {title: 'Book Eleven', genre: 'Non-Fiction', publish: 1981, edition: 2004},
    {title: 'Book Twelve', genre: 'Science', publish: 1981, edition: 2004},
    {title: 'Book Thirteen', genre: 'Science', publish: 1981, edition: 2004},
    {title: 'Book Fourteen', genre: 'History', publish: 1981, edition: 2004},
    {title: 'Book Fifteen', genre: 'Fiction', publish: 1981, edition: 2004},
    {title: 'Book Sixteen', genre: 'Non-Fiction', publish: 1981, edition: 2004},
    {title: 'Book Seventeen', genre: 'Romantic', publish: 1981, edition: 2004},
    {title: 'Book Eighteen', genre: 'History', publish: 1981, edition: 2004},
    {title: 'Book Nineteen', genre: 'Science', publish: 1981, edition: 2004},
    {title: 'Book Twenty', genre: 'Non-Fiction', publish: 1981, edition: 2004},
    {title: 'Book Twenty One', genre: 'Science', publish: 1981, edition: 2004},
    {title: 'Book Twenty Two', genre: 'Romantic', publish: 1981, edition: 2004},
    {title: 'Book Twenty Three', genre: 'Fiction', publish: 1981, edition: 2004}
]


// const userBooks = books.filter( (bk) => bk.genre === 'History') 
//     console.log(userBooks)

    const userBooks = books.filter( (bk) => bk.publish === 1981 && bk.genre === 'Romantic')
    console.log(userBooks)









