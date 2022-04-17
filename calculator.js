let result;
const operator = "-";
let num1 = 10;
let num2 = 30;

switch(operator) {
    case "+":
        result = num1 + num2;
        break;
    case "-":
        result = num1 - num2;
        break;
    case "*":
        result = num1 * num2;
        break;
    case "/":
        result = num1 / num2;
        break;
    default:
        console.log("Invalid operator");
}

console.log(result);