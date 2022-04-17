for(let i = 0; i < 10; i++) {
    if(i == 7 || i == 3) {
        continue;
    }
    console.log(i)
}

let i = 20;
while(i > 0) {
    if(i%3 == 0) {
        i--;
        continue;
    }
    console.log(i);
    i--;
}
console.log("*****");

for(let i = 0; i < 10; i++) {
    for(let j = i; j < 10; j++) {
        if((i+j)%3 == 0) continue;
        console.log(i, j);
    }
}