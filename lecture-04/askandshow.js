let readlineSync = require('readline-sync');
let axios = require("axios");
const download = require('image-downloader');

let username = readlineSync.question('What is your github username? : ');


let url = "https://api.github.com/users/" + username;

axios.get(url).then(
    function(response){
        console.log(response.data.name);
        
        const options = {
            url: response.data.avatar_url,
            dest: './photos/'+username+".jpg"                // will be saved to /path/to/dest/image.jpg
        }
          
        download.image(options);

    }
).catch(
    function(error){
        console.log(error);
    }
)





