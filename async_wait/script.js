function makeDough(){
    return new Promise(resolve => {
      setTimeout(() => {
        console.log("🔥 Water boiled");
        resolve();
      }, 2000);
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
            }, 4000);
            })
  }
  async function orderPizza(){
    await makeDough()
    await addToppings()
    await bakePizza()
    console.log("🍕 Pizza ready!")
  }
  orderPizza()