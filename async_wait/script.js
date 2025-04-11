function makeDough(){
    return new Promise(resolve => {
      setTimeout(() => {
        console.log("🔥 Water boiled");
        resolve();
      }, 2500);
    });
  }
  function addToppings(){
    return new Promise(resolve =>{
        setTimeout(() => {
            console.log("🌮 Toppings added")
            resolve();
            }, 3000);
    })
  }
  function bakePizza(){
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("🍕 Pizza baked")
            resolve();
            }, 3500);
            })
  }
  async function orderPizza(){
    await Promise.all([makeDough(),addToppings()]) // yaha pe maine promiss.all laga diya hun 
        await bakePizza()
    console.log("🍕 Pizza ready!")
  }
  orderPizza()