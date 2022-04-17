let temp = 23;
let isRaining = false;

if((temp >= 20 && temp <= 25) && isRaining == false) {
    console.log("You can go outside to play");
} else if ((temp >= 18 && temp <= 20) && isRaining == false) {
    console.log("Stay inside the play school");
} else {
    console.log("GO home and stay there");
}