console.log("Chapter 03: Practice Set\n")
const prompt=require('prompt-sync')();
//Q1 : Write a program to print the marks of a student in an object using for loop

let marks={
    harry:98,
    rohan:70,
    aakash:7,
  monika:4
}

for(let i=0;i<Object.keys(marks).length;i++) // me adal rha ha
  {
   console.log("the marks of the studets are "+Object.keys(marks)[i]+ " are " +marks[Object.keys(marks)[i]]) 
  }

//Q2 : Write a program in Q1 using for in loop


for(let key in marks )
  { 
    console.log(key)
     console.log("the marks of the studets are "+Object.keys(marks)[key]+ " are " +marks[Object.keys(marks)[key]]) 

    console.log("the marks of the studets are "+key +"are"+marks [key])
  }

//Q3 : Write a program to print "try again" until the user enters the correct number
console.log("Q3\n")
let  cn =4
let i
while (i !=cn)
  {
    i=prompt("Enter the number")
    if(i !=cn)
    {
      console.log("try again")
    }
  }
console.log("you have entered the correct number")

//Q4 : Write a function to find mean of 5 numbers
console.log("Mean of 5 no using arrow function ")
const mean = (a,b,c,d)=>
  {
   return (a+b+c+d)/4
  }
console.log(mean(4,5,6,7))

