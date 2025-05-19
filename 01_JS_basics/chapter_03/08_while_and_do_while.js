console.log("Chapter 03: Loops\n")
//2. while loop : is used to execute a block of code repeatedly as long as a specified condition is true.
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