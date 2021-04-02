let n = 5;

let row = 0;
while(row < n){

    let col = 0;
    while(col < n - row){
        process.stdout.write(String(col+1)+" ");
        col += 1;
    }
    process.stdout.write("\n");

    row += 1;
}



