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
  console.log("Welcome to the calculator app. Keep entering calculations.");
  console.log("Press Ctrl+C to close the application.\n");

  while (true) {
    let n1 = (await rl.question("Enter first number: ")).trim();

    let n2 = (await rl.question("Enter second number: ")).trim();

    const op = (
      await rl.question(
        `Enter the operator (Supported operators: ${ALLOWED_OPERATIONS.join(", ")}): `,
      )
    ).trim();

    n1 = Number(n1);
    n2 = Number(n2);

    if (
      !Number.isFinite(n1) ||
      !Number.isFinite(n2) ||
      !ALLOWED_OPERATIONS.includes(op)
    ) {
      console.log("Invalid input. Please enter valid values.\n");
      continue;
    }

    if (op === "/" && n2 === 0) {
      console.log("Division by zero is not allowed!\n");
      continue;
    }

    const result = OPERATION_CALLBACKS[op](n1, n2);

    console.log(`${n1} ${op} ${n2} = ${result}\n`);
  }
}

main();
