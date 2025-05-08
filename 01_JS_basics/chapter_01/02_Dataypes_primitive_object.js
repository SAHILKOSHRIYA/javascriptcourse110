//  primitive data types
/*
Data type = is a classification that specifies which type of value a variable has and what type of mathematical, relational or logical operations can be applied to it without causing an error. */
//NN BB SS U
/*
1. Number  
 2. Null  
  3. Boolean  
    4. BigInt  
      5. String 
        6. Symbol  
          7. Undefined
*/

let a = 10;
let b = null;
let c = true;
let d = BigInt("567") + BigInt("3");
let e = "SAHIL";
let f = Symbol("I am a nice symbol");
let g = undefined;
console.log(a, b, c, d, e, f, g);
console.table([a, b, c, d, e, f, g]); // table to print all the values in table format (Wrap them in an array:) like object in JS ye object likhne ka tarika hai


console.log(typeof d);
console.log(typeof d);



// 2. Objects in JS - Non primitive data type

 // object in js is a collection of key value pairs and it is a non primitive data type

const item ={

   "SAHIL": true,
    "Harrysir": false,
    "Ramjisitaji": 67,
    "shivmaa": undefined
  
}
console.log(item["SAHIL"])
console.log(item["Ramjisitaji"])

