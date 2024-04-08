// Declare by Using Consructor
// const tinderUser = new Object()  //  it's a singelton object

// console.log(tinderUser) // gives empty object 

const tinderUser = {}  // it's a non-singelton object
tinderUser.id = "123abc"
tinderUser.name = "Sam"
tinderUser.isLoggedIn = false

// console.log(tinderUser)
 // object inside bject
const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "sejal",
            lastname: "Gupta"
        }
    }
}

// console.log(regularUser)
//  console.log(regularUser.fullname?.userfullname.firstname)  // ? this is little protected beacuse if it is present then ok otherwise it skip
 // warna if else lagate reh jaoge


 // we can also combine objects like array
//  const obj1 = {1: "a", 2: "b"}
//  const obj2 = {3: "a", 4: "b"}
//  const obj3 = {5: "a", 6: "b"}
// //  const obj4 = {obj1, obj2} // ese combine nahi hoga
// //  const obj5 = Object.assign(obj1, obj2)
//  const obj6 = Object.assign({}, obj1, obj2, obj3) // we use empty object warna saari value obj1 ko assign ho jayengi or is tarah se empty object banega

// //  console.log(obj6)
//  const obj7 = {...obj1, ...obj2, ...obj3, ...obj6}
//  console.log(obj7)

 const users = [ // all objects coming in the form of an array
    {
        id: 1,
        email: "sejal@gmail.com"
    },
    {
        id: 1,
        email: "sejal@gmail.com"
    },
    {
        id: 1,
        email: "sejal@gmail.com"
    },
    {
        id: 1,
        email: "sejal@gmail.com"
    }

]
// console.log(users[1].email)

// console.log(tinderUser)

// console.log(Object.keys(tinderUser)) // it gives an array
// console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser))

// console.log(tinderUser.hasOwnProperty('isLoggedIn')) // check if this property is present in tinderUser object or not

// destructuring the object  --> access by other names
const course = {
    coursename: "js in hindi",
    price: "1000",
    courseInstructor: "sejal"
}
// course.courseInstructor

const {courseInstructor: instructor} = course

console.log(instructor);

const navbar = () => {
    
}


