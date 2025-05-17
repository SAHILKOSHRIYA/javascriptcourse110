console.log("Chapter 02: Practice Set\n")
//Q1: Use logical operators to find whether the age of a person lies between 10 and 20? 
// let age = prompt("Enter your age")
// console.log("enter your age")
const prompt = require('prompt-sync')();

const age = Number.parseInt(prompt("What is your age? "));
if(age>10 && age<20) {
  console.log("Your age lies between 10 and 20")
} else {
  console.log("Your age does not lie between 10 and 20")
}

//Q2 : Demonstrate the use of switch case statements in a JavaScript program.
