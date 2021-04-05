function happy(seconds){
    console.log("I am happy after " + seconds + " Seconds");
}

// let another = function(seconds){
//     console.log("I am happy after " + seconds + " Seconds");
// }

// another(6);


// console.log(another);



// for(let i=0; i<10; i++){

// }

setTimeout(function(){
    happy(2);
}, 2000);

