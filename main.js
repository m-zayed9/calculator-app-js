const readline = require("readline/promises");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const ALLOWED_OPERATIONS = ["+", "-", "*", "/"];
const OPERATION_CALLBACKS = {
  "+": (a, b) => a + b,
  "-": (a, b) => a - b,
  "*": (a, b) => a * b,
  "/": (a, b) => a / b,
};

async function main() {
  console.log(
    "Welcome to the calculator app , keep writing your input. to close press Ctrl+C.",
  );
  while (true) {
    let n1 = (await rl.question("Enter first number: ")).trim();
    let n2 = (await rl.question("Enter second number: ")).trim();
    const op = (
      await rl.question(
        "Enter the operator: (Supported Operators -> " +
          ALLOWED_OPERATIONS.concat(" : "),
      )
    ).trim();

    if (isNaN(n1) || isNaN(n2) || !ALLOWED_OPERATIONS.includes(op)) {
      console.log("Invalid Input , please check you have entered valid input");
      continue;
    }
    n1 = parseInt(n1);
    n2 = parseInt(n2);

    if (op == "/" && n2 == 0) {
      console.log("Division By Zero is no allowed !!! ");
      continue;
    }
    console.log(n1, op, n2, " = ", OPERATION_CALLBACKS[op](n1, n2));
  }
}

main();
