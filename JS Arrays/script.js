//Ternary operator
// var gf = "katrina"

// if(gf === "katrina"){
//    console.log("Marry Naresh Kumar");
// }else{
//    console.log("Vicky kaushal ka suicide");
// }

// var message = condition ? answer1 : answer2

// if (condition) {
    
// } else {
    
// }


// var message = gf === "katrina" ? console.log("Marry Naresh Kumar") : console.log("Vicky kaushal ka suicide");



// if(gf === "katrina"){
//     if (bf === "Vicky kaushal") {
//         "Vicky kaushal kaa marriage"
//     }else{
//         console.log("Naresh kumar kaa marriage")
//     }
// }else{
//     console.log("Akash mavi marriage with Priyanka")
// }

// var message = gf === "katrina" ? bf === "Vicky kaushal" ? "Vicky kaushal kaa marriage"  : "Naresh kumar kaa marriage" : "Akash mavi marriage with Priyanka";

// console.log(message);


//Arrow functions

// function run(a,b){
//     console.log(a + b);
//     return "Akshay";
// }

// console.log(run());

// let run = (a, b) => {
//     console.log(a + b);
//     return "Akshay";
// }


// console.log(run(2,3));

// function run(a,b){
//     return a + b;
// }
// console.log(run(2,3));

// let run = (a,b) => a + b;
// console.log(run(3,3));

// let run = (a,b) => "Run";
// console.log(run());


//Basics of Object
// var obj = {
//   name:"Kartik",
//   car : "BMW"
// }

// obj.fatherName = "Akshay";

//Accesing the value using key
// console.log(obj.name);
// console.log(obj.car);
// console.log(obj);

// obj.name = "Priya";
// console.log(obj);



//JS Arrays

// var color1 = "red";
// var color2 = "blue";
// var color3 = "green";
// var color4 = "purple";
// var color5 = "black";

// var color = ['red', 'blue', 'green', 'purple', 'black'];

// var students = [{name:"Kartik",car : "BMW"}, {name:"Siva",car : "Audi"}]
// console.log(color);
// color[0] = "white";
// console.log(color);
// console.log(color[-1]);

// color[1] = 5;

// var color = ['red', 'blue', 'green', 'purple', 'black',"white"];


//length
// console.log(color.length);

//concat

// var color2 = ["white", 'skin'];

// var colors = color.concat(color2);
// console.log(colors);

//push
// color.push("white");
// console.log(color);

// color.push(['skin','magenta']);
// console.log(color);

// color.push({});
// console.log(color);

//reverse
// console.log(color.reverse());

//pop
// color.pop();
// console.log(color);


//shift
// color.shift();
// console.log(color);

//slice ['red' , 'blue']
// console.log(color.slice(0, 3));
// color.slice(start_index, no_of_items);
// console.log(color.slice(2, 3));

//sort
// var numbers = ["akshay","doodhiwala","kartik","zayed"];
// console.log(numbers.sort());

//toString
// console.log(color.toString());

//unshift
// console.log(color.unshift('pink','lightgreen', 'darkblue'));
// console.log(color)

//join
// var numbers = ["1", "2", "3", "4"];
// "1 + 2 + 3 + 4 + 5 + 6"
// console.log(numbers.join(" kkk "));


//includes
// console.log(color.includes("white"));

//indexOf
// console.log(color.indexOf(10));
// console.log(color.indexOf('white'));


// var color = ['red', 'blue', 'green', 'purple', 'black', "white", 'black'];
// var index = color.indexOf('black');
// console.log(index);

// const index = color.indexOf('white');

// if (index === -1) {
//     console.log("Ityem doesnt exists")
// } else {
//     color[index] = "pink";
// }

// console.log(color);


//lastIndexOf
// var color = ['red', 'blue', 'green', 'purple', 'black', "white", 'black','pink', 'black'];
// var index = color.lastIndexOf('black');
// console.log(index);

//splice (index, num_of_items_to_be_deleted)
// var color = ['red', 'blue', 'green', 'purple', 'black',"white"];

// ['red', 'pink', 'magenta','blue', 'green', 'purple', 'black',"white"]
// color.splice(0,1);
// color.splice(1,2,'pink', 'magenta', 'violet');
// console.log(color);

//slice (index1, index2) subarray
// const fruits = ["Bana", "Ora", "Lem", 'App', 'Man'];
// console.log(fruits.slice(0,3));

//looping array methods
// var arr = [
//     {name:"Tirth", age:23},
//     {name:"Rahul", age:12}, 
//     {name:"sandeep", age:50}, 
//     {name:"Siva", age:20}
// ]

// for (let index = 0; index < arr.length; index++) {
//     console.log(arr[index].name);
    
// }

//forEach

// item = {name:"Rahul", age:12}
// index = 1
// arr = [
//     {name:"Tirth", age:23},
//     {name:"Rahul", age:12}, 
//     {name:"sandeep", age:50}, 
//     {name:"Siva", age:20}
// ]

// var arr = [
//     {name:"Tirth", age:23},
//     {name:"Rahul", age:12}, 
//     {name:"sandeep", age:50}, 
//     {name:"Siva", age:20}
// ]


// arr.forEach(function(item,index){
//      console.log(item.name, index)
// })

//filter 
// var filteredArray = [];
// for (let index = 0; index < arr.length; index++) {
//     if (arr[index]['age'] >= 18) {
//         filteredArray.push(arr[index])
//     }
// }
// console.log(filteredArray);

// [{name:"Tirth", age:23},{name:"sandeep", age:50},  {name:"Siva", age:20} ]
// var filteredArray = arr.filter(function(item){
//     if (item.age >= 18) {
//         return true
//     }
// })

// var arr = [
//     {name:"Tirth", age:23},
//     {name:"Rahul", age:12}, 
//     {name:"sandeep", age:50}, 
//     {name:"Siva", age:20}
// ]


// var filteredArray = arr.filter(function(item){
//     return item.age >= 18    
// })

// var filteredArray = arr.filter((item) => item.age >= 18);
// console.log(filteredArray);

//map
// var arr = [
//     {name:"Tirth", age:23},
//     {name:"Rahul", age:12}, 
//     {name:"sandeep", age:50}, 
//     {name:"Siva", age:20}
// ]

// var ageArr = [];
// for (let index = 0; index < arr.length; index++) {
//     ageArr.push(arr[index].age + 2);
    
// }
// console.log(ageArr);


// var arrAge = arr.map(function(item){
//     return item.age + 2;
// });
// console.log(arrAge);

// var arrAge = arr.map((item) => item.age + 2);
// console.log(arrAge);


//reduce
// var arr = [
//     {name:"Tirth", age:23},
//     {name:"Rahul", age:12}, 
//     {name:"sandeep", age:50}, 
//     {name:"Siva", age:20}
// ]

// let sumOfAge = 0;
// for (let index = 0; index < arr.length; index++) {
//     sumOfAge = sumOfAge + arr[index]['age']
// } 
// console.log(sumOfAge);

// let count = 0;
// for (let index = 0; index < arr.length; index++) {
//     count = count+ 1;
// } 
// console.log(count); //arr.length


// var sumOfAg = arr.reduce(function(total, item){
//     return total + item.age;
// }, 0)
// console.log(sumOfAg);

//some
// var arr = [
//     {name:"Tirth", age:23},
//     {name:"Rahul", age:18}, 
//     {name:"sandeep", age:50}, 
//     {name:"Siva", age:20}
// ]

// var hasAdultStud = arr.some(function(item){
//     return item.age >= 18;
// })

// console.log(hasAdultStud);


//every

// var hasAllAdultStud = arr.every(function(item){
//     return item.age >= 18;
// })

// console.log(hasAllAdultStud);

//find
// var foundAdultStud = arr.find((item) => item.age >= 18);
// console.log(foundAdultStud);

//Remove duplicates from array
let a = [1,2,5,2,3,3,4,7];
// let b = [1,2,5,3,4,7];

// for (let index = 0; index < a.length; index++) {
//    if (b.indexOf(a[index]) === -1) {
//        b.push(a[index]);
//    }
// }

// console.log(b);

console.log([...new Set(a)]);



