let cells = document.querySelectorAll('.row > div');

//console.log(cells);

for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener('click', cellClicked);
}

let currentPlayer = 'X'


console.log("Player1 starts the game!");

function cellClicked() {
    event.target.textContent = currentPlayer
    
    if(currentPlayer == 'X') {
        currentPlayer = 'O';
        console.log("It's Player2's turn!");
    } else {
        currentPlayer = 'X';
        console.log("It's your turn again Player1!");
    }
}

let winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
// use to find out if X or O Won the game
// cells[].textContent

//Us if/else statement to go from x to o with the above function

//look up ===


