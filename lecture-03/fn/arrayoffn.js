let arr = [];

function hey(name){
    console.log("hurray " + name);
}


arr.push(hey);
arr.push(hey);
arr.push(hey);
arr.push(hey);
arr.push(hey);
arr.push(hey);

arr.push(function(){
    console.log("Party all night");
})

// arr[0]("Harry");

console.log(arr);
