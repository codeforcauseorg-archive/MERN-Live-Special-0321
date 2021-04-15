// console.log("Hello");
let axios = require('axios');

async function sayHi(){
    console.log("Ye chalega pahle");
    let res = await axios.get("https://api.github.com/users/keenwarrior");
    console.log("ye chalega baad me");
    return res.data.login;  // res.then(function(out){
    //     console.log(out.data.login);
    // })
}

sayHi().then(out=>console.log(out))

console.log("Yaayyyyyy")