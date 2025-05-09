
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
console.table([
  {
    Operator: '==',
    Description: 'Checks equality of values after type conversion (type coercion).',
    Type_Check: 'No',
    Type_Coercion: 'Yes',
    Use_Case: 'Used when data types may differ and type conversion is acceptable.',
    Example: `"5" == 5`,
    Output: true
  }
     ,
  {
    Operator: '===',
    Description: 'Checks equality of both value and type (strict comparison).',
    Type_Check: 'Yes',
    Type_Coercion: 'No',
    Use_Case: 'Used when both value and data type must match.',
    Example: `"5" === 5`,
    Output: false
  }
]);
console.log("\n")
//3. Logical operators
console.log("5.Logical operators\n")

let p = 5;
let q = 10;

console.log("p > 0 && q < 15:", p > 0 && q < 15);  // true (both conditions are true)
console.log("p > 0 || q > 15:", p > 0 || q > 15);  // true (at least one condition is true)
console.log("!(p > 0):", !(p > 0));            // false (negation of true)