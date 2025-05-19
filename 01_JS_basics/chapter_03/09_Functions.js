console.log("Chapter 03: Functions\n")
const prompt= require ('prompt-sync')();
// Functions are a block of code that can be executed when called. 
// Js function is block of code dessinged to perform a particular task.
// 2.use to reuse code. and 
// 3.make code more readable and maintainable.
// 4. make code more modular.

/*
syntax: function functionName(parameters)
*/ 
let x = prompt("Enter the first number: ")
x=Number.parseInt(x)
let y = prompt("Enter the second number: ")
y=Number.parseInt(y)
function onePlusAvg(x,y)
{
  console.log("Done")
  return 1+(x+y)/2
}

console.log("one plus average of x and y is ", onePlusAvg(x,y))


// Arow function

const sum = (x,y) =>
  {
    return x+y;
  }
 console.log("sum of x and y is ",sum(x,y))

// return without parameterd  

const hello = () =>
  {
    console.log("Hello world")
    return "hi"
  }
console.log(hello())
let v = hello();
console.log(v)