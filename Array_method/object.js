// let user ={
//     name: "John",
//     age: 30,
//     occupation: "Software Engineer",
//     hobbies: ["reading", "hiking", "coding"],
//     location: "Allahabad"
// }
// console.log( user.age)


// let user ={}
// user.name = "John"
// user.age = 30
// user.occupation = "Software Engineer"
// user.hobbies = ["reading", "hiking", "coding"]
// user.location = "Allahabad"
// let user2 ={
//    email: "avi@hmail.com",
//    fullname : { 
//     userfullname :{
//         firstname : "tony",
//         lastname : "Doe",
//     }

//    }
// }
// console.log(user2.fullname.userfullname.firstname)
     
let obj1= {1: "A",2:"B"}
let obj2 = {3: "C",4:"D"}
let obj3 ={obj1,obj2}
 obj3 = Object.assign(obj1,obj2)
console.log(obj3)