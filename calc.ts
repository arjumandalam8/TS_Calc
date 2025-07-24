import * as readline from "readline";

function add(num1: number, num2: number): number {
  return num1 + num2;
}

function subtract(num1: number, num2: number): number {
  return num1 - num2;
}

function multiply(num1: number, num2: number): number {
  return num1 * num2;
}

function divide(num1: number, num2: number): number {
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
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  function performOperation() {
    showMenu();
    rl.question("Choose an operation:", (operation: string) => {
      switch (operation) {
        case "1":
          rl.question("Enter first number: ", (num1: string) => {
            rl.question("Enter second number: ", (num2: string) => {
              const number1 = parseFloat(num1);
              const number2 = parseFloat(num2);
              console.log(
                `Result : ${number1} + ${number2} = ${add(number1, number2)}`
              );
              performOperation();
            });
          });
          break;
        case "2":
          rl.question("Enter first number: ", (num1: string) => {
            rl.question("Enter second number: ", (num2: string) => {
              const number1 = parseFloat(num1);
              const number2 = parseFloat(num2);
              console.log(
                `Result : ${number1} - ${number2} = ${subtract(
                  number1,
                  number2
                )}`
              );
              performOperation();
            });
          });
          break;
        case "3":
          rl.question("Enter first number: ", (num1: string) => {
            rl.question("Enter second number: ", (num2: string) => {
              const number1 = parseFloat(num1);
              const number2 = parseFloat(num2);
              console.log(
                `Result : ${number1} * ${number2} = ${multiply(
                  number1,
                  number2
                )}`
              );
              performOperation();
            });
          });
          break;
        case "4":
          rl.question("Enter first number: ", (num1: string) => {
            rl.question("Enter second number: ", (num2: string) => {
              const number1 = parseFloat(num1);
              const number2 = parseFloat(num2);
              console.log(
                `Result : ${number1} / ${number2} = ${divide(number1, number2)}`
              );
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
