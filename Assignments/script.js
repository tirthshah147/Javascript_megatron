// JS code here
// let textBox = document.getElementById('evaluatedText');
// let wordCountDiv = document.getElementById('wordCount');

// textBox.addEventListener('input',function(event){
//   let val = event.target.value;
//   let wordList = val.match(/\w+/g);
//   wordList = wordList ? wordList : [];
//   wordCountDiv.textContent = wordList.length;
// })

// let box = document.getElementById('box');
// let bool = false;
// box.addEventListener('mouseover', function(){
//   if(!bool){
//     console.log(bool);
//     box.style.transform = 'rotate(180deg)';
//     bool = true;
//   }else{
//     console.log(bool);
//     box.style.transform = 'rotate(-0deg)';
//     bool = false;
//   }
// })

let boxes =  document.querySelectorAll('.box');
console.log(boxes);
let playerCount = 0;

boxes.forEach(element => {
  element.addEventListener('click',updateSudoku);
});

let sudokuArr = ['','','','','','','','',''];
console.log(sudokuArr);

let winnerTerms = [
  [0,1,2], 
  [3,4,5],
  [6,7,8],
  [0,4,9],
  [2,4,6],
  [0,3,6],
  [1,4,7],
  [2,5,8]
]

function checkWinner(){
  let winner = false;

  winnerTerms.forEach((winArr) => {
    console.log(winArr);
    console.log(sudokuArr);
    if ((sudokuArr[winArr[0]] === sudokuArr[winArr[1]] && sudokuArr[winArr[1]] === sudokuArr[winArr[2]]) && (sudokuArr[winArr[0]] !== '' && sudokuArr[winArr[1]] !== '') && sudokuArr[winArr[2]] !== '') {
      winner = true;
    }
  })

  console.log(winner);

  let sudokuFull = sudokuArr.filter(item => item === '').length === 0;
  console.log(sudokuFull);
  if (winner !== true && sudokuFull === true) {
    document.querySelector('h3').textContent = "Draw!"
  }else if (winner === true) {
    if (playerCount === 0) {
      document.querySelector('h3').textContent = "Player 2 wins"
    }else{
      document.querySelector('h3').textContent = "Player 1 wins"
    }
  }
}

function updateSudoku(event){
  let id = event.target.getAttribute('data-attr');
  let box = document.getElementById(id);
  console.log(box);
  console.log(sudokuArr[Number(id)]);

  if (sudokuArr[Number(id)] === '') {
    if(playerCount === 0){
      sudokuArr[Number(id)] = "O";
      box.textContent = "O";
      playerCount = 1;
   }else{
      sudokuArr[Number(id)] = "X";
      box.textContent = "X";
      playerCount = 0;
   }
  }
   
  

  console.log(sudokuArr);

  checkWinner();

}

