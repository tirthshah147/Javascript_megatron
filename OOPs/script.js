//Everything in JS is Object
var studNameOne = "Sandeep"
var stuAgeOne = 13
var studClassOne = 12

var studNameTwo = "Sandipani"
var stuAgeTwo = 11
var studClassTwo = 11


function pass(name){
    console.log(`${name} has passed`)
}

function fail(name){
    console.log(`${name} has failed`)
}

// console.log(this);


var studOne = {
    name: "Sandeep",
    age : 13,
    class : 12,
    pass(){
        console.log(this.name + " has passed");
    },
    fail(){
        console.log(this.name + " has failed");
    }

}

var studTwo = {
    name: "Sandipani",
    age : 11,
    class : 11,
    pass(){
        console.log(this.name + " has passed");
    },
    fail(){
        console.log(this.name + " has failed");
    }
}


var studThree= {
    name: "Sandipani",
    age : 11,
    class : 11,
    pass(){
        console.log(this.name + " has passed");
    },
    fail(){
        console.log(this.name + " has failed");
    }
}

// let state = "age";
// console.log(studOne[state]);

// state = "class";
// console.log(studOne[state]);

// console.log(studOne.age);
// console.log(studOne['age']);


// console.log(studOne.name);



class Student{
    constructor(age, name){
        this.age = age,
        this.name = name
    }
    pass(){
        console.log(`${this.name} is passed`);
        // return {
        //     fail(){
        //         console.log("I am another object");
        //     }
        // }
    }
    fail(){
        console.log(`${this.name} is failed`)
        return this;

    }
    run(){
        console.log(`${this.name} is running!`)
    }

   
    //properties
    //methods
}

//new keyword

// creates an empty object {age:13 }
// this -> {age : 13, name : "Tirth"}
// this to the empty object you have created
// it calls constructor function

var studOne = new Student(13, "Tirth");
var studTwo = new Student(11, "Tirthyyyy");
console.log(studOne);
console.log(studTwo);

console.log(studOne.fail());

studOne.fail().run();
// studTwo.fail().run();

// studOne.run();
// studTwo.fail();
// studTwo.run();

// studOne.pass().fail();


// class

// obj1
// name:"tirth"
// age:13
// pass(){
//     console.log(`tirth is passed`)
// }
// fail(){
//     console.log(`tirth is failed`)
//     return obj1;

// }
// run(){
//     console.log(tirthj is running!`)
// }


// obj2
// name:"tirthyyy"
// age:12
// pass(){
//     console.log(`tirthyyy is passed`)
// }
// fail(){
//     console.log(`tirthyyy is failed`)
//     return obj2;

// }
// run(){
//     console.log(tirthyyy is running!`)
// }


//Class Inheritance
// class Instructor extends Student{
//     takeSession(){
//         console.log(`${this.name} is taking session`);
//     }
// }

// var instructor1 = new Instructor(15, "Sandeep");
// instructor1.takeSession();

// Call by value VS Call by reference

// a -> 1234 = 2
// b -> 1256 = 1

// var a = 1;      
// var b = a;       
// console.log(a); // 1
// console.log(b); // 1

// a = 2;

// console.log(a); // 2
// console.log(b); // 1


// arr2 -> arr1 -> 1234 = [3,2]
// var arr1 = [1,2];    
// var arr2 = arr1;      
// console.log(arr1); // [1,2]
// console.log(arr2); // [1,2]


// arr1[0] = 3;
// console.log(arr1); // [3,2]
// console.log(arr2); // [3,2]


// var obj1 = {
//     name:"tirth",
//     age:13,
//     // ...
// }

// obj2 = obj1;
// console.log(obj1);
// console.log(obj2);

// obj2.name = "Tararumpum"
// console.log(obj1);
// console.log(obj2);

// obj2 = {
//     name:"Tararumpum",
//     age : 13
// }

// var obj1 = {
//     name:"tirth",
//     age:13,
//     // ...
// }


// var obj2 = {
//     ...obj1,
//     name:"Tararumpum"
// }

// console.log(obj1);
// console.log(obj2);



class Student{
    constructor(age, name){
        this.age = age,
        this.name = name
    }

    pass(){
        console.log(`${this.name} is passed`);
    }
    fail(){
        console.log(`${this.name} is failed`)
        return this;

    }
    run(){
        console.log(`${this.name} is running!`)
    }


}

// {}
// this -> {}
// runs the constructor function



// Class Inheritance
class Instructor extends Student{
    constructor(age,name,designation){
       super(age,name);
       this.designation = designation;
    }
    takeSession(){
        console.log(`${this.name} is taking session`);
        super.run();
    }
    pass(){
        console.log(`${this.name} is succcesss`);
    }
}

var instructor1 = new Instructor(15, "Sandeep","Senior");
instructor1.takeSession();
// console.log(instructor1);

// var student1 = new Student(15, "Sandeep");
// student1.takeSession();