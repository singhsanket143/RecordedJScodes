let L = 24; // m
let H = 8; // m
let T = 0.6; // m

let brick_volume = 2304; // cm^3

let no_of_bricks = Math.ceil(0.85 * L * H * T * 1000000) / 2304;

console.log(no_of_bricks);