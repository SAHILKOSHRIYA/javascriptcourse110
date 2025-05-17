console.log("Chapter 02: Practice Set\n")
//Q1: Use logical operators to find whether the age of a person lies between 10 and 20? 
// let age = prompt("Enter your age")
// console.log("enter your age")
const readline = require('readline');
// import * as readline from 'readline'; same hai ye bhi bus ye nya syntax hai

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("What is your age? ", function(age) {
  age = Number.parseInt(age);

if(age>10 && age<20)
{
  console.log("Your age lies between 10 and 20")
}
else
{
  console.log("Your age does not lie between 10 and 20")
}
  rl.close();
});

//Q2 : Demonstrate the use of switch case statements in a JavaScript program.
