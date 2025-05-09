
console.log("Chapter 02: Operators and Expressions\n");
// Your operators and expressions code will go here

//1. Expressions are combinations of values, variables, and operators that compute to a value.
//2. Operators are symbols that perform operations on values and variables.

console.log("Operators in JS\n");
//1.arithmetic operators
console.log("1.Arithmetic operators\n")
let a =45;
let b = 4;
console.log("a + b = ", a+b)
console.log("a - b = ", a-b)
console.log("a * b = ", a*b)
console.log("a / b = ", a/b) // gives value in decimal point
console.log("a ** b = ", a**b) // a raise to the power b Exponential operator
console.log("a % b = ", a%b + "\n")
console.log("->increment oprators \n")
console.log("a++ means first  print a then increment a = ", a++)
console.log("++a means first increment a then print a = ", ++a+"\n")
console.log("->decrement oprators\n")
console.log("a-- means first  print a then decrement a = ", a--)
console.log("--a means first decrement a then print a = ", --a+"\n")

//Q1
console.log("Q1 what will the following print in JS if a=10 \n")
a=10;
console.log("++a = ", ++a) //a ka  value 11 aur print bhi 11
console.log("a++ = ", a++) // a print hoga 11 aur value 12
console.log("--a = ", --a) // a ka value 11 aur print bhi 11 
console.log("a-- = ", a--) // a print hoga 11 aur value 10 ho jayega
console.log("a = ", a) //a ka value 10 print ho jayega
console.log("a-- = ", a--) // a print hoga 10 aur value bachegi 9
console.log("a = ", a) //a ka value 9 print ho jayega


// Assingment operators
console.log("2.Assignment operators\n")

let s = 10;
s += 5; // s = s + 5
console.log("s += 5: ", s);

s -= 3; // s = s - 3
console.log("s -= 3: ", s);

s *= 2; // s = s * 2
console.log("s *= 2: ", s);

s /= 4; // s = s / 4
console.log("s /= 4: ", s);

s %= 3; // s = s % 3
console.log("s %= 3: ", s);

s **= 2; // s = s ** 2
console.log("s **= 2: ", s);

// Comparison operators
console.log("3.Comparison operators\n")
let x = 5;
let y = 10;

console.log("x == y:", x == y);   // false
console.log("x != y:", x != y);   // true
console.log("x === y:", x === y);  // false (strict equality, checks type and value)
console.log("x !== y:", x !== y); // true (strict inequality)
console.log("x > y:", x > y);     // false
console.log("x < y:", x < y);     // true
console.log("x >= y:", x >= y);   // false
console.log("x <= y:", x <= y);   // true
// Ternary Operator
console.log("4.Ternary Operator\n")
let age = 19;
let isAdult = age >= 18 ? "Yes, is adult" : "No, not an adult";
console.log(isAdult); // Output: "Yes, is adult"

//Q2:
console.log(" Q2 difeerence between the ' ==' and '===' operators\n")
console.log("-------------------------------------------------------------------------");
console.log("| Feature           | '==' (Equality)                    | '===' (Strict Equality)           |");
console.log("-------------------------------------------------------------------------");
console.log("| Type Conversion   | Performs type conversion if needed | No type conversion               |");
console.log("| Checks            | Value equality after conversion   | Value and type equality          |");
console.log("| Example           | 5 == '5'  // true                | 5 === '5' // false                |");
console.log("| Use Case          | Loose comparison                 | Strict and type-safe comparison |");
console.log("-------------------------------------------------------------------------");
console.log("-------------------------------------------------------------------------");
console.log("| Feature           | '==' (Equality)                    | '===' (Strict Equality)           |");
console.log("-------------------------------------------------------------------------");
console.log("| Type Conversion   | Performs type conversion if needed | No type conversion               |");
console.log("| Checks            | Value equality after conversion   | Value and type equality          |");
console.log("| Example           | 5 == '5'  // true                | 5 === '5' // false                |");
console.log("| Use Case          | Loose comparison                 | Strict and type-safe comparison |");
console.log("-------------------------------------------------------------------------");
