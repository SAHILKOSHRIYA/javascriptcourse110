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