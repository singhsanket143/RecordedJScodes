for(let i = 1; i < 20; i++) {
    if(i != 7 && (i%7==0)) {
        break;
    }
    console.log(i)
}
let i = 20;
while(i != 0) {
    if(i < 10) {
        break;
    }
    console.log(i);
    i = i - 2;
}

//
console.log("********");


for(let i = 0; i < 10; i++) {
    for(j = i; j < 10; j++) {
        if(i + j > 5) break;
        console.log(i, j);
    }
}