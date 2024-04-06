// let myDate = new Date(2023, 0, 28)
// console.log(myDate.toString())
// console.log(myDate.toLocaleString())
// console.log(myDate.toDateString())
// console.log(myDate.toJSON())
// console.log(myDate.toISOString())
// console.log(myDate.toUTCString())
// console.log(myDate.toLocaleDateString())
// console.log(myDate.getTimezoneOffset())
// console.log(myDate.getTime())
// console.log(myDate.getUTCHours())
// console.log(typeof myDate);
// console.log(myDate.toString())

// let myDate2 = new Date(2024, 3, 6, 17, 2);
// console.log(myDate2.toLocaleString())

// let myDate3 = new Date("2024-4-6")
// console.log(myDate3.toLocaleString())

let myDate4 = new  Date("04-06-2024")
// console.log(myDate4.toLocaleString())


let myTimeStamp =  Date.now();  //it give current date in mili second
console.log(myTimeStamp) // it gives value in mili second
// and if we write that
console.log(myDate4.getTime()); // it gives two mili seconds values so that we can compare them

console.log(Math.floor(Date.now()/1000)) // it give current date with second
console.log(Math.round(Date.now()/1000))



let newDate = new Date()
// console.log(newDate.getMonth() + 1) we add 1 beacause it starte with 0
// console.log(newDate.getDay() + 1)


newDate.toLocaleString('default', {
    weekday: "long",
    timeZone: ""
})















