function date(){
    let p = document.getElementsByClassName('hello');
    // let x = new Array();
    let x = [];
    x.push(p[0]);
    x.push(p[1]);
    x.push(p[2]);

    console.log(2%10);
    console.log(typeof p);
    x.map(function (value, index){
        value.innerHTML = "kaha";
    })
    
    console.log(p);

}