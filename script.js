const cells = document.querySelectorAll('.cell');
const status = document.getElementById('status');
const restartBtn = document.getElementById("restart");


const tictac = ["", "", "", "", "", "", "", "", ""]

let currentPlayer = 'x'

let gameOver = false;

const winCombos = [
  [0,1,2],[3,4,5],[6,7,8], 
  [0,3,6],[1,4,7],[2,5,8], 
  [0,4,8],[2,4,6]           
];



function renderBoard() {
  cells.forEach((cell, index) => {
    cell.textContent = tictac[index]
  });
  if (!gameOver) {
    status.textContent = `Ход игрока ${currentPlayer}`;
  }
}

function checkWinner(){
  for (let combo of winCombos){
    if (tictac[combo[0]] !== '' &&
      tictac[combo[0]] === tictac[combo[1]] &&
      tictac[combo[1]] === tictac[combo[2]]) {
        status.textContent = `${tictac[combo[0]]} победил`
        gameOver = true;
        return;
      }
  }
}

function checkDraw(){
  if(!tictac.includes("") && !gameOver) {
    status.textContent = 'Ничья';
    gameOver = true;
  }
}

function makeMove(index){
  if(gameOver) return;
  if (tictac[index] === ""){
    tictac[index] = currentPlayer;
    currentPlayer = currentPlayer === "x" ? "o" : "x";
    renderBoard();
    checkWinner();
    checkDraw();
  }
}


cells.forEach((cell, index) => {
  cell.addEventListener('click', () => makeMove(index));
})