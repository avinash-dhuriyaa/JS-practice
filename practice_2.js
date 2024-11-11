 //For a given array with prices of 5 items ->[250, 645, 300, 900, 50] All items have an offer 
// of 10% OFF on them. Change the array to store final price after applying offer

// 1st Method

let arry = [250, 645, 300, 900, 50]
for(let i =0; i<arr.length;i++){
    arr[i] = arr[i] - (arr[i]*0.1)
    console.log(arr[i])
    }
    console.log(arr)


// 2nd method
let arr = [250, 645, 300, 900, 50]
let temp =[]
const mult=0.9;
// for(let i =0;i<arr.length; i++){
//     temp[i] = arr[i]*mult;
// }
for(let val of arr){
    temp.push(val*mult)
}
    console.log(temp)
