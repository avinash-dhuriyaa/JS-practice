// Qs. For a given array with marks of students -> [85, 97, 44, 37, 76, 60]
//Find the average marks of the entire class.

 let marks = [85, 97, 44, 37, 76, 60]
 let sum = 0;
 for(let val of marks){
    sum =sum+val;
 }
 let avg = sum/marks.length;
console.log("average marks",avg)

// Qus 2
// JavaScript mein jab ham likhte hain [1,2,3,4][1,2], toh yahaan 1,2 ko JavaScript comma operator
//  ki tarah treat karta hai. Comma operator mein sirf aakhri value consider hoti hai, toh 1,2 
//  evaluate hokar 2 ban jaata hai.

let arr = [1,2,3,4][1,2,3];
// Is code mein [1,2,3,4][2] ka matlab hai array [1,2,3,4] ke index 2 par jo value hai, usko access karna. 
// Index 2 par value 3 hai.
console.log("arr = "+arr)


// let obj={
//    1:"a",
//    2:"b",
//    "2":"b",
//    [1]:"b",
   
// }
// console.log(obj)



