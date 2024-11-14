// Qus1.Remove Elements from a JavaScript Array
let arr = [1,22,33,44,55,66,77]
  arr.pop();
console.log(arr) // output [ 1, 22, 33, 44, 55, 66 ]

// Qus2.How to Remove Duplicate Elements from JavaScript Array
let arr1 = [1,2,2,3,4,4,5,6]
let arry=[...new Set(arr1)];
console.log(arry) // output [ 1, 2, 3, 4, 5, 6 ]
