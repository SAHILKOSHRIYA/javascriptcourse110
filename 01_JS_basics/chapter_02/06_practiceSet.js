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
let age1 = Number.parseInt(prompt("What is your age? "));
switch(age1)
  {
    case 12 :
      console.log("You are 12 years old")
      break
    case 13  :
      console.log("You are 13 years old")
      break
      case 14  :
      console.log("You are 14 years old")
      break
      case 15:
      console.log("You are 15 years old")
      break
      case 16  :
      console.log("You are 16 years old")
      break
  
default:
console.log("You are not eligible")
  }

//Q3 : Write a JavaScript program to find whether a number is divisible by 2 and 3

let num = Number.parseInt(prompt("Enter a number: "));
if(num%2==0&&num%3==0)  
{
  console.log("The number is divisible by 2 and 3")
}
else{
  console.log("The number is not divisible by 2 and 3")
}

//Q4 : Write a JavaScript program to find whether a number is divisible by either 2 or 3
let number = Number.parseInt(prompt("Enter a number: "));
if(number%2==0 ||number%3==0)  
{
  console.log("The number is divisible  either by 2 and 3")
}
else{
  console.log("The number is not divisible by  both 2 and 3")
}
//Q 5: Print "you can drive" or "you cannot drive" based on age being greater than 18 using ternary operator
let age2 = Number.parseInt(prompt("What is your age? "));
let a = age2 > 18 ? "You can drive" : "You cannot drive"
console.log(a)