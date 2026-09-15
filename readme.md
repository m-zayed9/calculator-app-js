# Node.js CLI Calculator

A simple calculator that runs directly in your terminal.

You can use it to perform basic mathematical calculations without opening a graphical calculator.

## Features

- Addition
- Subtraction
- Multiplication
- Division
- Decimal numbers
- Input validation
- Protection against division by zero
- Continuous calculations
- Runs directly in the terminal

## Requirements

Before using the calculator, you need to have **Node.js** installed on your computer.

Check if Node.js is installed:

```bash
node --version
```

You should see a version number such as:

```text
v22.0.0
```

You will also need npm, which normally comes installed with Node.js.

Check npm:

```bash
npm --version
```

---

# Installation

## 1. Clone the Repository

Clone the project from GitHub:

```bash
git clone https://github.com/m-zayed9/calculator-app-js.git
```

Then move into the project directory:

```bash
cd calculator-app-js
```

## 2. Install Dependencies

Run:

```bash
npm install
```

> This calculator currently does not require any external packages, but running `npm install` is safe and prepares the project for any dependencies defined in the project.

---

# Running the Calculator

Start the calculator with:

```bash
node app.js
```

You should see:

```text
Welcome to the calculator app. Keep entering calculations.
Press Ctrl+C to close the application.

Enter first number:
```

The calculator is now ready to use.

---

# How to Use

The calculator will ask you for:

1. First number
2. Second number
3. Mathematical operation

For example:

```text
Enter first number: 10
Enter second number: 5
Enter the operator: +
```

The calculator will display:

```text
10 + 5 = 15
```

After displaying the result, you can perform another calculation.

---

# Supported Operations

| Operation      | Symbol | Example  | Result |
| -------------- | ------ | -------- | ------ |
| Addition       | `+`    | `10 + 5` | `15`   |
| Subtraction    | `-`    | `10 - 5` | `5`    |
| Multiplication | `*`    | `10 * 5` | `50`   |
| Division       | `/`    | `10 / 5` | `2`    |

---

# Decimal Numbers

Decimal numbers are supported.

Example:

```text
Enter first number: 10.5
Enter second number: 2
Enter the operator: *
```

Result:

```text
10.5 * 2 = 21
```

---

# Invalid Input

If you enter something that is not a valid number, the calculator will display an error.

Example:

```text
Enter first number: hello
Enter second number: 10
Enter the operator: +
```

You will see:

```text
Invalid input. Please enter valid values.
```

You can then try again.

---

# Division by Zero

The calculator does not allow division by zero.

Example:

```text
Enter first number: 10
Enter second number: 0
Enter the operator: /
```

The calculator will display:

```text
Division by zero is not allowed!
```

You can then enter another calculation.

---

# Multiple Calculations

You don't need to restart the calculator after every calculation.

For example:

```text
10 + 5 = 15

20 * 3 = 60

100 / 4 = 25

50 - 20 = 30
```

The calculator will continue asking for new calculations until you stop it.

---

# Exiting the Calculator

To close the calculator, press:

```text
Ctrl + C
```

You will then return to your normal terminal.

---

# Complete Example

```text
Welcome to the calculator app. Keep entering calculations.
Press Ctrl+C to close the application.

Enter first number: 25
Enter second number: 5
Enter the operator: /

25 / 5 = 5

Enter first number: 10
Enter second number: 20
Enter the operator: +

10 + 20 = 30

Enter first number: 7.5
Enter second number: 2
Enter the operator: *

7.5 * 2 = 15
```

---

# Quick Start

If Node.js is already installed, you can get started with:

```bash
git clone https://github.com/m-zayed9/calculator-app-js.git
cd calculator-app-js
npm install
node app.js
```

Then follow the instructions displayed in the terminal.

---

# Troubleshooting

### `node` is not recognized

If you see an error similar to:

```text
'node' is not recognized as an internal or external command
```

Node.js is probably not installed or is not available in your system's PATH.

Install Node.js and then open a new terminal.

### `npm` is not recognized

Make sure Node.js is installed correctly and then restart your terminal.

### The calculator does not start

Make sure you are inside the project directory:

```bash
cd calculator-app-js
```

Then run:

```bash
node app.js
```

### I entered the wrong value

The calculator will display an error and allow you to try again.

---

# Repository

The source code is available on GitHub:

**https://github.com/m-zayed9/calculator-app-js**

---

# License

This project is for learning and educational purposes.
