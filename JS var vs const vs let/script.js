// var - global scope & functional scope when defined in a function


//Example 1 - where we are defining our variable again in functional scope

// x = 2
// function run(){
//     var x = 3;
//     console.log(x);
// }
// //global scope
// console.log(x); //print 2
// run();

// x = 3;
// console.log(x); //print 3
// //functional scope

// console.log(x); //print 2


// var x = 2;    
// function run(){
//     var x = 3;
//     console.log(x);
// }
// console.log(x);
// run();
// console.log(x);


//Example 2 - where we are assigning a new value to a varibale we have in global scope

// x = 2 
// x = 3
// function run(){
//     x = 3;
//     console.log(x);
// }
// console.log(x); //print 2
// // global scope

// run();
// console.log(x); //print 3


// console.log(x); //print 3
// // functional scope


// var x = 2;    
// function run(){
//     x = 3;
//     console.log(x);
// }
// console.log(x);
// run();
// console.log(x);


//Example 3 

// var x = 2;    
// function run(){
//     var x = 0;
//     x = 3;
//     console.log(x);
// }
// console.log(x);
// run();
// console.log(x);


// let - block scope

// let x = 2;
// function run(){
//     let x = 4;
//     console.log(x);
// }

// run();

// {
//     let z = 3;
// }

// console.log(z); 

// {
//     var z = 3;
// }

// console.log(z); 

// var x = 2;
// var x = 3;

// console.log(x); 

// let x = 2;
// let x = 3;

// console.log(x); 


// Uncaught ReferenceError: z is not defined vs undefined

// var z;

// z -> 4595045045950 (undefined)

//const


//Mon - Fri 

// Morning - [Personal Learning (individual projects, notes, self learning, assignment)]
// 8 - 10 p.m  - Normal Class
// 10 - 11 p.m - Group session    [Discuss Assignments, doubts, make projects]
// 11 - 12 p.m - Mentor session   if not [family time, Personal Learning (individual projects, notes, self learning, assignment)]


//Sat - Sun

// Group session    [Discuss Assignments, doubts, make projects] MUST [2 hrs+]
// [Personal Learning (individual projects, notes, self learning, assignment)]
// Some quality family spent
// Movie







