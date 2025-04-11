function propose() {
    const result = document.getElementById("result");
    result.textContent = "Soch rahi hai... please wait 😅💭";

    let shaadiPromise = new Promise((resolve, reject) => {
      setTimeout(() => {
        let willSayYes = Math.random() > 0.4; // 60% chance "yes"
        if (willSayYes) {
          resolve("❤️ Haan keh diya! Shaadi Mubarak! 🥳💐");
        } else {
          reject("💔 Sorry... Tum ache ho, par mujhe career banana hai 😭");
        }
      }, 3000); // 3 second ka suspense
    });

    shaadiPromise
      .then(message => {
        result.textContent = message;
      })
      .catch(error => {
        result.textContent = error;
      });
  }