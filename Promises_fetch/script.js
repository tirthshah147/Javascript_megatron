//GET    ///READING PURPOSE
//POST   //Posting data in db
//PUT    //updTIN G DATA IN DB
//DELETE //DELETING DATA IN DB


//JSON from Object
// var obj = {name : "tirth", age : 13};
// console.log(obj);
// var jsonObj = JSON.stringify(obj);
// console.log(jsonObj);
// console.log("Tirth");


//Object from JSON

// var jsonObj = '{"name" : "tirth", "age" : 13}';
// console.log(jsonObj);
// var obj = JSON.parse(jsonObj);
// console.log(obj);


//Promises

// movePlayer('100', 'left', function(){
//     movePlayer('100','left', function(){
//         movePlayer('50','right',function(){
//             movePlayer('100','left',function(){
//                 console.log("Gem is colledted");
//             })
//         })
//     })
// })


// movePlayer('100','left')
//           .then(() => movePlayer('100','left'))
//           .then(() => movePlayer('50','right')
//           .then(() => movePlayer('100','left'))
//           .then(() => console.log("gem is collected"))


// const promise = new Promise((resolve,reject) => {
//     if (1===1) {
//         resolve("Promise resolved")
//     }else{
//         reject("Promise rejected")
//     }
// })

// promise 
//     .then((result) => {
//         console.log("I am first then");
//         return result + '?'
//     })
//     .then((result2) => result2 + '!')
//     .then((result3) => result3 + '?')
//     .catch((err) => console.log('Error!', err))
//     .then((result4) => console.log(result4));

// console.log(1);

// var run = () => 1
// console.log(run());

// Promise
//     .then((result) => )

// fetch('https://jsonplaceholder.typicode.com/posts')  
//       .then((result) => result.json())     
//       .then((resp) => console.log(resp));











