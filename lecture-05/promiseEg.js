
function orderSamosa() {
  
    let promise = new Promise(function(accept, reject){
        setTimeout(function(){
            accept("Ye lo samose");
        }, 3000);

        setTimeout(function(){
            reject("Khatam ho gye");
        }, 3000);
    });

    return promise;
}

let pr = orderSamosa();

let handleA = function(first, second){
    console.log("Responded", first, second);
}

let rejectA = function(error){
    console.log(error);
}


pr.then(handleA).catch(rejectA);

console.log("Ordered samosa");

