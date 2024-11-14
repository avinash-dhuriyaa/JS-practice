// 1.push()-Ye method array ke end mein ek item add karta hai.
let arr = [1,2,3,4,5,6]
arr.push(7)
console.log(arr) // output = [1,2,3,4,5,6,7]


// 2.pop()-Ye method array ke end se ek item remove karta hai.
let arr1 = [1,2,3,4,5,6]
arr1.pop()
console.log(arr1) // output = [1,2,3,4,5]


// 3.shift() – Ye method array ke pehle element ko remove karta hai.
let arr2 = [1,2,3,4,5,6]
arr2.shift()
console.log(arr2) // output = [2,3,4,5,6]


//4.unshift() – Ye method array ke beginning mein ek item add karta hai.
let arr4 = [1,2,3,4,5]
arr4.unshift(0)
console.log(arr4) // output = [0,1,2,3,4,5]


//5 length – Ye property array mein total elements ki ginti batati hai.
let arr5 = [1,2,3,4,5]
console.log(arr5.length) // output = 5


//6.join() Ye method string mai , and ya space dalne ke liye use krt hai
let names =['avi','rohit','pratyush']
let nameString = names.join(',')
console.log(nameString) // output = avi,rohit,pratyush


//7.concat() ye method do ya zyada arrays ko jodne aur ek naya array banane ke liye use hota hai.
let name1 =['avi','rohit','pratyush']
let name2 =['Anu','Nashu','Dr']
let joined = name1.concat(name2)
console.log(joined) // output = [ 'avi','rohit','pratyush','Anu','Nashu','Dr' ]
