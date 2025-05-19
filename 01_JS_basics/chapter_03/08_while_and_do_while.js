console.log("Chapter 03: Loops\n")
const prompt= require('prompt-sync')();

 
//2. while loop : is used to execute a block of code repeatedly as long as a specified condition is true. 
//ek hi condtion ko bar bar chalane k liye jab tak vo false nhi ho jaye
/*
Syntax: while(condition) 
{ 
code to be executed 
}
*/
let n = prompt("Enter the value of n")
n = Number.parseInt(n)
let i =0 ;
while(i<n)
  {
    console.log(n)
    i++;
  }

//3. do while loop : is used to execute a block of code repeatedly as long as a specified condition is true. but it will execute at least once even if the condition is false.
let n1 = prompt("Enter the value of n")
n1 = Number.parseInt(n)
let j = 10 ;
do // atleat ek bar karo
{
    console.log(j)
    j++;
}while(j<n1)