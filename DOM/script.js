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

/*

    BODY
        UL ( child of BODY )
            LI ( child of UL )
                BTN ( child of LI )

*/

let delBtns = document.querySelectorAll(".delete");
Array.from(delBtns).forEach(function (btn) {
  btn.addEventListener(
    "click",
    function (event) {
      console.log(event.target);
      let clickedBtn = event.target;
      let liSelected = clickedBtn.parentElement;
      let ulSelected = liSelected.parentElement;

      // console.log(ulSelected.parentElement);
      ulSelected.removeChild(liSelected);
    },
    true
  );
});

let lis = document.querySelectorAll("li");
lis.forEach(function (li) {
  li.addEventListener(
    "click",
    function (event) {
      console.log("Hii..Li is clicked");
    },
    true
  );
});
