// const inputElem = document.querySelector('#listInput');
// const listView = document.querySelector('.listView');
// console.log(listView);
// const addButton = document.querySelector('#addButton');
// console.log(addButton);

// taskList = [];

// addButton.addEventListener('click',() => {
    
//     taskList.push(inputElem.value);
//     console.log(taskList);
//     localStorage.setItem('listItems', JSON.stringify(taskList));
//     showList();

// })


// showList();


// function showList(){
//     let output = '';
//     let localItems = JSON.parse(localStorage.getItem('listItems'));
//     console.log(localItems);
//     if (localItems !== null) {
//         taskList = localItems;
//     }

//     taskList.forEach((item,index) => {
//         output +=  `
//         <div class="itemContainer">
//             <span>${item}</span> <button onclick="deleteItem(${index})">Delete</button>
//         </div>  
//         `
//     });
    
//     listView.innerHTML = output;
//     console.log(output);
    
// }


// function deleteItem(index){
//     taskList.splice(index,1);
//     localStorage.setItem('listItems', JSON.stringify(taskList));
//     showList();
// }







