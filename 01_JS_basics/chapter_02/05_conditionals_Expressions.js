console.log("Chapter 02: Conditionals Expressions\n");
/* 1. if statement
   2. if-else statement
   3. if-else-if-else statement
   4. switch statement
   5. ternary operator
   
*/

//1. if statement is used to execute a block of code if a specified condition is true.
// Note : this code is brower specific code excute it in browser console and  browser alert is not execute if condition is false 
/*
let age = prompt("what is your age?")
age=Number.parseInt(age)
if(age>0)
{
  alert("this is valid age")
}
*/

// this code is node specific code (cosole)
const readline = require('readline');
// import * as readline from 'readline'; same hai ye bhi bus ye nya syntax hai

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("What is your age? ", function(age) {
  age = Number.parseInt(age);
  if (age > 0) {
    console.log("This is a valid age");
  } 
  rl.close();


// 2. if-else statement: is used to execute a block of code if a specified condition is true, and another block of code if the condition is false.
// Note : in both condition this code execute But only one at a time if it true compiler never check other condition(else)
/*
let age = prompt("what is your age?")
age=Number.parseInt(age)
if(age>18)
{
  alert("this is valid age")
}
else{
  alert("this is not valid age")
}
*/

// node specific code 


const rl2 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl2.question("IF-ELSE - What is your age? ", function(age2) {
    age2 = Number.parseInt(age2);
    if (age2 > 18) {
      console.log("This is a valid age (if-else)");
    } else {
      console.log("This is not a valid age (if-else)");
    }
    rl2.close();
 


// 3. if-else-if-else statement: is used to execute a block of code if a specified condition is true, and another block of code if the condition is false. then another block of code if the condition is false. and so on.
/*

let age = prompt("what is your age?")
age=Number.parseInt(age);
if(age<0)
{
  alert("this is invalid age")
}
else if(age<9)
{
  alert("you are kid and you can't even think of driving")
}
else if( age>9 && age<18)
{
  alert("you are kid and you can think of driving after 18")
}
else{
  alert("this is valid age now you can drive")
}
console.log("Done")

*/ 
  const rl3 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl3.question("IF-ELSE IF else- What is your age? ", function(age3) {
    age3 = Number.parseInt(age3);
    if (age3 <0) {
      console.log("This is a invalid age (if)");
    } else if (age3<9) 
    {
      console.log("you are kid and you can't even think of driving(else if 1)");
    }
    else if (age3>9 && age3<18 )
    {
      console.log("you are kid and you can think of driving after 18(else if 2)");
    }
    else{
      console.log("this is valid age now you can drive(else)");
    }
      console.log("Done");
      
    rl3.close(); 
  });     //rl3
   });    //rl2

  });  /// this is for 1st rl.close()  this line making code runnable in node js environment

// 4. switch statement: is used to execute one block of code among many alternatives.

//Syntax:
/*
switch (expression) {
  case caseExpression1:
    statements
  case caseExpression2:
    statements
  // …
  case caseExpressionN:
    statements
  default:
    statements
}
*/ 
// ::::Terms :::

// 1.Expression: An expression whose result is matched against each case clause.

/*
2.caseExpressionN (Optional)
A case clause used to match against expression. If the value of expression matches the value of any caseExpressionN, execution starts from the first statement after that case clause until either the end of the switch statement or the first encountered break.
*/

// 3.default (Optional)

/*
A default clause; if provided, this clause is executed if the value of expression doesn't match any of the case clauses. A switch statement can only have one default clause.
*/

/*

Description:
A switch statement first evaluates its expression. It then looks for the first case clause whose expression evaluates to the same value as the result of the input expression (using the strict equality comparison) and transfers control to that clause, executing all statements following that clause.

The clause expressions are only evaluated when necessary — if a match is already found, subsequent case clause expressions will not be evaluated, even when they will be visited by fall-through.

js
Copy to Clipboard
switch (undefined) {
  case console.log(1):
  case console.log(2):
}
// Only logs 1
If no matching case clause is found, the program looks for the optional default clause, and if found, transfers control to that clause, executing statements following that clause. If no default clause is found, the program continues execution at the statement following the end of switch. By convention, the default clause is the last clause, but it does not need to be so. A switch statement may only have one default clause; multiple default clauses will result in a SyntaxError.

*/

/*
Breaking and fall-through
You can use the break statement within a switch statement's body to break out early, often when all statements between two case clauses have been executed. Execution will continue at the first statement following switch.

If break is omitted, execution will proceed to the next case clause, even to the default clause, regardless of whether the value of that clause's expression matches. This behavior is called "fall-through".

js
Copy to Clipboard
const foo = 0;
switch (foo) {
  case -1:
    console.log("negative 1");
    break;
  case 0: // Value of foo matches this criteria; execution starts from here
    console.log(0);
  // Forgotten break! Execution falls through
  case 1: // no break statement in 'case 0:' so this case will run as well
    console.log(1);
    break; // Break encountered; will not continue into 'case 2:'
  case 2:
    console.log(2);
    break;
  default:
    console.log("default");
}
// Logs 0 and 1
In the appropriate context, other control-flow statements also have the effect of breaking out of the switch statement. For example, if the switch statement is contained in a function, then a return statement terminates the execution of the function body and therefore the switch statement. If the switch statement is contained in a loop, then a continue statement stops the switch statement and jumps to the next iteration of the loop.
*/

/*

Lexical scoping
The case and default clauses are like labels: they indicate possible places that control flow may jump to. However, they don't create lexical scopes themselves (neither do they automatically break out — as demonstrated above). For example:

js
Copy to Clipboard
const action = "say_hello";
switch (action) {
  case "say_hello":
    const message = "hello";
    console.log(message);
    break;
  case "say_hi":
    const message = "hi";
    console.log(message);
    break;
  default:
    console.log("Empty action received.");
}
This example will output the error "Uncaught SyntaxError: Identifier 'message' has already been declared", because the first const message = 'hello'; conflicts with the second const message = 'hi'; declaration, even when they're within their own separate case clauses. Ultimately, this is due to both const declarations being within the same block scope created by the switch body.

To fix this, whenever you need to use let or const declarations in a case clause, wrap it in a block.

js
Copy to Clipboard
const action = "say_hello";
switch (action) {
  case "say_hello": {
    const message = "hello";
    console.log(message);
    break;
  }
  case "say_hi": {
    const message = "hi";
    console.log(message);
    break;
  }
  default: {
    console.log("Empty action received.");
  }
}
This code will now output hello in the console as it should, without any errors.
*/
{
// Example:
  
const expr = 'Apples';
switch (expr) {
  case "Oranges":
    console.log("Oranges are $0.59 a pound.");
    break;
  case "Apples":
    console.log("Apples are $0.32 a pound.");
    break;
  case "Bananas":
    console.log("Bananas are $0.48 a pound.");
    break;
  case "Cherries":
    console.log("Cherries are $3.00 a pound.");
    break;
  case "Mangoes":
  case "Papayas":
    console.log("Mangoes and papayas are $2.79 a pound.");
    break;
  default:
    console.log(`Sorry, we are out of ${expr}.`);
}

console.log("Is there anything else you'd like?");
}

//5. ternary operator: is a shorthand for if-else statement.


//1.Syntax: condition ? exprIfTrue : exprIfFalse
//2.example: 


let a = 10;
let b = 20;
let c = a > b ? "a is greater than b" : "b is greater than a";
console.log(c);

// more example

const ag= 19;
const resu = ag >= 18 ? "You are an adult" : "You are not an adult";
console.log("AGE ternary operator")
console.log(resu);
