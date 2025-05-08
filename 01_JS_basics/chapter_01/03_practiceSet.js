console.log("03_practiceSet.js\n");
//Q1
console.log(
   "Q1 create a variable of type string and try to add a number to it .\n",
);
//console.log("\n"); // it gives double line break
let a = "a";
let b = 10;
console.log(a + b + "\n");

//Q2
console.log(
   "Q2 use typeof operator to find the datatype of the string in last question.\n",
);
console.log(typeof a);
console.log(typeof a);
//  but for a+b it will give string as output because string + number = string and use () for typeof operator otherwise it calculate 1st variable and give out put

console.log(typeof (a + b) + "\n");
//Q3
console.log(
   "Q3 create a const object in javascript can you change it to hold a number later.\n",
);

const student = {
   name: "Sahil",
   baranch: "MCA",
   rollNo: 22223110,
   age: 23,
   company: "Vrize pvt ltd",
};
console.table(student);
console.log(typeof student + "\n");
console.log(student.name);
console.log(student["name"]); // both are same
console.log(student.name, student.age, student.company + "\n");

// Q4
console.log(
   "Q4 try to add a new key to the const object in problem 3 were you able to do it.\n",
);

student.fatherName = "Yashwani koshriya";
student.motherName = "Dropati koshriya";
console.log(student.fatherName);
console.log(student.motherName);
console.log("\n");

//Q5
console.log(
   "Q5 write a js program to create a word meaning dictionary of 5 words.\n",
);
const dictionary = {
   React: "A JavaScript library for building user interfaces.",
   JavaScript: "A high-level, interpreted programming language.",
   HTML: "The standard markup language for creating web pages.",
   CSS: "A stylesheet language used for describing the presentation of a document written in HTML or XML.",
   Algorithm:
      "A process or set of rules to be followed in calculations or other problem-solving operations.",
};

console.log(dictionary.React);
console.log(dictionary.JavaScript);
console.log(dictionary.HTML);
console.log(dictionary.CSS);
console.log(dictionary.Algorithm);
