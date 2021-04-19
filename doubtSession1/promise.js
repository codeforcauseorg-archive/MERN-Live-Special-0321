// let pr = new Promise(function(accept, reject){
//     setTimeout(reject, 2000, "reject ho gya");
//     setTimeout(accept, 2000, "accpet ho gya");
   
// })

// console.log(typeof pr);


// pr.then(function (res){
//     console.log(res);
// })
// .catch(function (err){
//     console.log(err);
// })


let axios = require("axios")

// axios.get("https://api.github.com/users/keenwarrior").then(
//     function(response){
//         console.log(response.data);
//     }
// )

let promise = axios.get("https://api.github.com/users/keenwarrior");

promise.then(function(res){
    console.log(res.data);
}).catch((err)=>{
    console.log(err);
});

console.log(promise.data);