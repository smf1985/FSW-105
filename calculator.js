var readlineSync = require('readline-sync');

var firstNum = readlineSync.questionInt("Please enter your first number: ");
var secondNum = readlineSync.questionInt("Please enter your second number: ");
var enterOperation = readlineSync.question("Please enter the operation to perform (add, sub, mul, div): ");

function myAddition(num1, num2){
    return num1 + num2;
}
function mySubtraction(num1, num2){
    return num1 - num2;
}
function myMultiplication(num1, num2){
    return num1 * num2;
}
function myDivision(num1, num2){
    return num1 / num2;
}

function customCalculator(num1, num2, myOperation){
    if (myOperation == "add"){
        console.log("Number-1:" + num1 + " added to Number-2:" + num2 +  " returns:" + myAddition(num1, num2));
    } else if (myOperation == "sub"){
        console.log("Number-1:" + num1 + " subtratct Number-2:" + num2 +  " returns:" + mySubtraction(num1, num2));
    } else if (myOperation == "mul"){
        console.log("Number-1:" + num1 + " multiplied by Number-2:" + num2 +  " returns:" + myMultiplication(num1, num2));
    } else if (myOperation == "div"){
        console.log("Number-1:" + num1 + " divided by Number-2:" + num2 +  " returns:" + myDivision(num1, num2));
    } else {
        console.log("Operation not identified. Please correct and try again!");
    }
}

customCalculator(firstNum, secondNum, enterOperation);