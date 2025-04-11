let btn = document.getElementById("result")
function orderPizza(){
    btn.textContent = "Pizza bana rahe hain... please wait 😋";
    let pizzaPrmoise = new Promise(function(resolve,reject){
        setTimeout(function(){
            let pizzaready = Math.random()>0.3;
            if(pizzaready){
                resolve("Pizza agya hai");
                
            }else{
                reject("Pizza nahi aya ");
            }
        },2000)
    
});
pizzaPrmoise
.then(function(message){
    document.getElementById("result")
    btn.textContent = message;
    })
    .catch(function(error){
        document.getElementById("result")
        btn.textContent = error;
        })
}
   
