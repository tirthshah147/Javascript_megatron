//functions

//function statement or function declaratiuon
// function run(param1="Tanmay is handsome", param2){
//     console.log(param1);
//     console.log(param2);
// }

// run("Tirthhhhhhhhh");


// function run(param1="Tanmay is handsome"){
//     console.log(param1);
// }

// run("Tirthhhhhhhhh","Sivaaaaa");


//function expression
//  var a = function(){
//     console.log("Runn")
//  }

//  a();


//Anonymous function 
// function(){

// }

//use it as a value
// function bhago(func1){
//   console.log(func1);
// }

// bhago(function(){

// })


// Named function expression

// var x = function name(){
//     console.log("Tirthhh");
//     console.log(name);
// }

// x();
// name(); will give u error

//First class function or First class citizens

//example1
// function func1(param1){
// //    console.log(param1);
//      return param1;
// }

// function func2(){
//    console.log("Tirthhhhh");
// }


// console.log(func1(func2));

//example 2
// function func1(){
//     //    console.log(param1);
//          return function() {
//              console.log("Tirth is chapri");
//          };
//     }
    
// // console.log(func1());

// var func2 = func1();
// func2();

//Higher order function
// 1. If a function func1 is taking another function func2 as arguement then func1 is known as HOF
// 2. If a function func1 is returning any function then func1 is HOF
// 3. If a function func1 does both i.e takes argument as a function and also returns a function then also func1 is HOF

//IIFE (Immediately invoked function expression)
// function greet() {
//     console.log("Hiii");
// }

// greet();

// (function() {
//    console.log("Hiii");
// })();

// (function(params) {
//     //
// })();

// (greet = function(param1) {
//     console.log("Hiii " + param1);
//  })("Tirth");

//  greet("Akshay");


 





