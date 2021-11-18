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

var color = ['red', 'blue', 'green', 'purple', 'black',"white"];


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


//splice
// var color = ['red', 'blue', 'green', 'purple', 'black',"white"];

// ['red', 'pink', 'magenta','blue', 'green', 'purple', 'black',"white"]
// color.splice(0,1);
// color.splice(1,2,'pink', 'magenta', 'violet');
// console.log(color);