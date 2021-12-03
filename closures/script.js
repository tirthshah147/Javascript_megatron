
// function run(){
//     var sleep = "I am sleeping";
//     walk();
//      function walk(){
//          console.log(sleep);
//      }
//     //  console.log(walk);
// }

// run();


// console.log(sleep); //i am sleeping
// //scope of function walk

// function walk(){
//     console.log(sleep);
// }
// var sleep= "I am sleeping";
//functional scope of run


// function run(){
//     var sleep = "I am sleeping";
//     walk();
//      function walk(){
//          console.log(sleep);
//      }
//     //  console.log(walk);
// }
// //global scope
// run();
// console.log(sleep);



//Example on closure
function x(){
    let vari = 1;
    return function(){
        console.log(vari);
    }
}

var z = x();
z();




