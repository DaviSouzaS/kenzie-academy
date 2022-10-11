function payment(value) {
    if (value >= 25) {
        return true;
    }
    return false;
}

function hamburguer() {
    return "hamburguer pronto";
}

// function fastFood(value) {

//     const res = new Promise((resolve, rejected) => {

//       if (payment(value)) {
//         resolve(hamburguer());} 

//         else {
//         rejected("pagamento insuficiente");
//       }
//     });

//     return res;
// }


function fastFood(pagamento) {
    const res = new Promise((resolve, rejected) => {
      if (payment(pagamento)) {
        setTimeout(() => {
          resolve(hamburguer());
        }, 3000);
      } else {
        setTimeout(() => {
          rejected("pagamento insuficiente");
        }, 3000);
      }
    });
    return res
}    

//fastFood(60).then((res) => console.log(res)); hamburguer pronto

//fastFood(10).then((res) => console.log(res));! Uncaught (in promise) pagamento insuficiente

fastFood(60)
.then((res) => console.log(res))
.catch((err) => console.log(err)); // hamburguer pronto
  
fastFood(10)
.then((res) => console.log(res))
.catch((err) => console.log(err)); // pagamento insuficiente