let n = 5;

let row = 0;
let row_mirr = 0;
while(row_mirr < 2 * n - 1){

    let col = 0;
    while(col <= row){
        process.stdout.write("* ");
        col += 1;
    }
    process.stdout.write("\n");

    if(row_mirr < n-1){
        row += 1;
    } else {
        row -= 1;
    }
    

    row_mirr += 1;
}

