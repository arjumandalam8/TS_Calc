"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
function add(num1, num2) {
    return num1 + num2;
}
function subtract(num1, num2) {
    return num1 - num2;
}
function multiply(num1, num2) {
    return num1 * num2;
}
function divide(num1, num2) {
    if (num2 === 0) {
        console.error("Cannot divide by Zero");
    }
    return num1 / num2;
}
function showMenu() {
    console.log("Simple Calculator");
    console.log("1. Addition");
    console.log("2. Subtraction");
    console.log("3. Multiplication");
    console.log("4. Division");
    console.log("5. Exit");
}
function calculator() {
    var rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });
    function performOperation() {
        showMenu();
        rl.question("Choose an operation:", function (operation) {
            switch (operation) {
                case "1":
                    rl.question("Enter first number: ", function (num1) {
                        rl.question("Enter second number: ", function (num2) {
                            var number1 = parseFloat(num1);
                            var number2 = parseFloat(num2);
                            console.log("Result : ".concat(number1, " + ").concat(number2, " = ").concat(add(number1, number2)));
                            performOperation();
                        });
                    });
                    break;
                case "2":
                    rl.question("Enter first number: ", function (num1) {
                        rl.question("Enter second number: ", function (num2) {
                            var number1 = parseFloat(num1);
                            var number2 = parseFloat(num2);
                            console.log("Result : ".concat(number1, " - ").concat(number2, " = ").concat(subtract(number1, number2)));
                            performOperation();
                        });
                    });
                    break;
                case "3":
                    rl.question("Enter first number: ", function (num1) {
                        rl.question("Enter second number: ", function (num2) {
                            var number1 = parseFloat(num1);
                            var number2 = parseFloat(num2);
                            console.log("Result : ".concat(number1, " * ").concat(number2, " = ").concat(multiply(number1, number2)));
                            performOperation();
                        });
                    });
                    break;
                case "4":
                    rl.question("Enter first number: ", function (num1) {
                        rl.question("Enter second number: ", function (num2) {
                            var number1 = parseFloat(num1);
                            var number2 = parseFloat(num2);
                            console.log("Result : ".concat(number1, " / ").concat(number2, " = ").concat(divide(number1, number2)));
                            performOperation();
                        });
                    });
                    break;
                case "5":
                    console.log("Good Bye!\nExiting....");
                    rl.close();
                    break;
                default:
                    console.log("Invalid OPeration, Try Again!");
                    performOperation();
            }
        });
    }
    performOperation();
}
calculator();
