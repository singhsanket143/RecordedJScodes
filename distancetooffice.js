let x = 4; // km/h
let y = 20; // min

let T = y*(x+1) - 5*(x+2);

let dist = Math.floor((x)*(T+y)/60);

console.log(dist);