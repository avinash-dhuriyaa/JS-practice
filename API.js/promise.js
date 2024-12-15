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