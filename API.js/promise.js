//  JavaScript में Promise asynchronous operations का result handle करने के लिए उपयोग होता है। इसकी 2 states होती हैं:
//  resolve (success), और Rejected (failure)। Promises को manage करने के लिए .then() (resolve),
//  .catch() (Rejected), methods का उपयोग किया जाता है।

let promiseOne = new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("asncy task complete")
        resolve();
    },100)
}) 
promiseOne.then(function(){
    console.log("then block")
})
 let Promise1 = new Promise((resolve, reject) =>{
    let age =8;
    if(18<=age){
        resolve("You are eligible to vote")
    } else{
        reject("You are not eligible to vote")
    }

 }
)
// Promise1.then((value) => {
//     console.log(value);
// }).catch((Error)=>{
//     console.log(Error);
// })

let user=[
{userid: 1,name: avinash,gender: male},
{userid: 2,name: rohit,gender: male},
{userid: 3,name: pratyush,gender: male},
]
console.log(user)