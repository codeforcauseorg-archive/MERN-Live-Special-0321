let axios = require("axios")

// axios.get("https://api.github.com/users/keenwarrior").then(
//     function(response){
//         console.log(response.data);
//     }
// )

axios.get("https://api.github.com/users/yyyfffydbfbffhfhfh").then(
    function(response){
        console.log(response.data);
    }
).catch(
    function(error){
        console.log(error);
    }
)

