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
  }
}

main();
