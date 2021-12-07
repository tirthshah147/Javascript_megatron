// var links = document.getElementsByClassName('navbar__links');
// console.log(Array.isArray(Array.from(links)));
// console.log(links);
// console.log(Array.from(links));
// Array.from(links).forEach(function(link){
//     console.log(link);
// })

// Array.isArray([1,2,3,4])
// var x = Array.from(links);
// console.log(x);
// x.forEach(function(link){
//     console.log(link);
// })

// console.log(links);


// const xyz = document.querySelectorAll('.navbar__links');
// console.log(xyz);

// xyz.forEach(function(item){
//     console.log(item);
// })

// var sagar = document.querySelector('#header #navbar li:nth-child(3)');
// console.log(sagar);

// var allli = document.querySelectorAll('#header li');

// allli.forEach(function(item){
//     item.textContent += " Admin"
// })

// allli.forEach(function(item){
//     item.innerHTML += "<h3> Hiiii!</h3> <h2>krjkjgk</h2>";
// })


//DOM NODES
// const header = document.getElementById('header');
// console.log('NodeType of this header is', header.nodeType);
// console.log('Nodename of this header is', header.nodeName);
// console.log('Does Header has a child node?', header.hasChildNodes());

// var cloneOfHeader = header.cloneNode(true);
// console.log(cloneOfHeader);




//traversing a DOM
// const navbar = document.getElementById('navbar');
// console.log('the parent node of navbar is', navbar.parentNode);
// console.log('the parent element of navbar is', navbar.parentElement);
// console.log('the parent element of parent element of navbar is', navbar.parentElement.parentElement);

// console.log('the child node of navbar is', navbar.childNodes);
// console.log('the child node of navbar is', navbar.children);


// console.log('next sibling of navbar is', navbar.nextElementSibling.nextElementSibling);
// console.log('next sibling of navbar is', navbar.nextSibling);
// console.log('previous sibling of navbar is', navbar.previousElementSibling);

// navbar.previousElementSibling.innerHTML = "<i>Immortal</i>";

// function addClickToDelButtons(){
//     let delBtns = document.querySelectorAll('.delete');
//     Array.from(delBtns).forEach(function(btn){
//         btn.addEventListener('click',function(event){
//            console.log(event.target);
//            let clickedBtn = event.target;
//            let liSelected = clickedBtn.parentElement;
//            let ulSelected = liSelected.parentElement;
//            ulSelected.removeChild(liSelected);
//         //    console.log(li);
//         },true)
//     })
// }

// addClickToDelButtons();

const list = document.querySelector('.list');

list.addEventListener('click',function(e){
    console.log('Ul elements are clicked')
    if (e.target.className === 'delete') {
        // console.log('Delete button is clicked')
        const li = e.target.parentElement;
        list.removeChild(li);
    }
})





// let lis = document.querySelectorAll('li');
// lis.forEach(function(li){
//     li.addEventListener('click', function(event){
//         console.log('Hii..Li is clicked');
//     }, true)
// })

const addTodoForm = document.forms['todo-add-form'];
console.log(addTodoForm.querySelector('input[type="text"]'));


addTodoForm.addEventListener('submit',function(event){
    event.preventDefault();
    const value = addTodoForm.querySelector('input[type="text"]').value;
    
    //creating elements
    const li = document.createElement('li');
    const foodTitle = document.createElement('span');
    const deleteButton = document.createElement('button');

    //let's add content
    foodTitle.textContent = value;
    deleteButton.textContent = "Click Me";

    //add classes
    foodTitle.className = 'food'
    deleteButton.className = 'delete'
    
    //append span & button to li
    li.appendChild(foodTitle);
    li.appendChild(deleteButton);
    list.appendChild(li);



    // deleteButton.addEventListener('click',function(event){
    //     console.log(event.target);
    //     let clickedBtn = event.target;
    //     let liSelected = clickedBtn.parentElement;
    //     let ulSelected = liSelected.parentElement;
    //     ulSelected.removeChild(liSelected);
    //  //    console.log(li);
    //  }) //second way
    
    // addClickToDelButtons(); //first way

})

// but1.delete  click=''
// but2.delete  click=''
// but3.delete   click=''
// but4.delete   click=''

// but5.delete click=''

// document.querySelectorAll("a[href='www.google.com']")
