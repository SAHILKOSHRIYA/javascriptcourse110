console.log("Chapter 03: Loops\n")
// loops are used to execute a block of code repeatedly.
// there are 4 types of loops in js
// 1. for loop
// 2. while loop
// 3. do while loop
// 4. for in loop
// 5. for of loop
// 6. for each loop
// 7. map loop
// 8. filter loop
// 9. reduce loop
// 10. some loop
// 11. every loop
// 12. find loop
// 13. findIndex loop
// 14. findLast loop
// 15. findLastIndex loop
// 16. flat loop
// 17. flatMap loop
// 18. from loop
// 19. of loop  
// 20. entries loop
// 21. keys loop
// 22. values loop
// 23. at loop
// 24. concat loop
// 25. copyWithin loop
// 26. fill loop
// 27. pop loop
// 28. push loop
// 29. reverse loop
// 30. shift loop  
// 31. slice loop
// 32. sort loop
// 33. splice loop
// 34. unshift loop
// 35. join loop
// 36. reduceRight loop
// 37. toLocaleString loop
// 38. toString loop
// 39. valueOf loop
// 40. includes loop
// 41. indexOf loop
// 42. lastIndexOf loop
// 43. isArray loop
// 44. length loop
// 45. prototype loop
// 46. constructor loop
// 47. toSource loop
// 48. toString loop
// 49. valueOf loop
// 50. isPrototypeOf loop
// 51. propertyIsEnumerable loop
// 52. hasOwnProperty loop

//************************************************************* */
/*1. for loop : is used to execute a block of code repeatedly.
sntax: for(initialization; condition; increment/decrement)*/
//Example:
for(let i=0; i<10; i++)
  {
    console.log(i);
  }

// factorial of a number using for loop
let n = 5;
let factorial = 1;
for (let i = 1; i <= n; i++) {
  factorial *= i;
}
console.log("Factorial of " + n + " is " + factorial);
//2.for in loop : is used to iterate over the properties of an object.
let obj={
  sahil :90,
  shiv: 89,
  shivam: 91,
  bawal: 92,
  ritikaa: 93
}

for (let a in obj)
  {
    console.log(a)
    console.log("marks of " + a + " are " + obj[a])
  }

// for of loop : is used to iterate over the values of an iterable object.

for (let b in "SAHIl")
  {
    console.log(b) // print the index of the string
    
  }
for (let b of "SAHIl")
  {
    console.log(b) // print the value of the string

  }

//Scoping in loop
let sum=0
let n1=prompt("Enter the value of n")
n=Number.parseInt(n1)
for(let i=0;i<n;i++)
  {
    sum+=(i+1)
  }
console.log("Sum of first " + n + " natural numbers is " + sum)
// console.log(i) // this will give error because i is not defined outside the loop

// but if sude Var instead of let then it will work because var is function scoped and let is block scoped