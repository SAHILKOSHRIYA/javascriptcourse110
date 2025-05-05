//  var let const
//  there are many probleam before ES6 Ecma script 6 DOC that why there is deff between var and  let const
/* 
   1.Var is fuction scope 
   2.let and const is block scope
   3. var can be redeclared and updated
   4. let cant be redeclared but can be  updated= reinitialized
   5. const can not be redeclared and updated
   6. var is gloabl scope and let and const is block scope
   7. var is hoisted and let and const is not hoisted but lete and const is hoisted but not initialized
   8. let and const are trape in temporal dead zone
   10. temporal dead zone is the time between the hoisting and initialization of let and const
   

   */
//  ******* Note = alt + click to selct multiple lines

//1.Var:- Function scope
console.log("1.Var:- Function scope");
var a = 10; // global scope
var a = "SAHIL"; // redeclared
console.log(a);
{
  var a = 20; // block scope ,local scope
  console.log(a);
}

console.log(a); // o/p = 20

//2. let - AS block scope
console.log("2. let - AS block scope");
let b = 10;
// let b=20; // gives error Synatx error author already been declared
{
  let b = 20;
  console.log(b); // o/p = 20
}
console.log(b); // o/p = 10

//3. const - AS block scope
console.log("const - AS block scope");
const c = 10;
/* 
   const c=20;  gives error  Assignment to constant variable.
   c=20; // gives error  Assignment to constant variable.
*/
{
  const c = 20;
  console.log(c); // o/p = 20
}
console.log(c); // o/p = 10

/* 
  const S; gives error - Missing initializer in const declaration.
  correction  const S=10;
*/
