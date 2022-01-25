let cells = document.querySelectorAll('.row > div');

let hasWon = document.querySelector("#has-won");

let reloadButtom = document.querySelector("#reload");


//console.log(cells);

for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener('click', cellClicked, { once: true });
};

let playerOne = 'X';
let playerTwo = "O";
let currentPlayer = playerOne;

function switchPlayers() {
    if (currentPlayer === playerOne) {
        currentPlayer = playerTwo;
        console.log("It's Player2's turn!");

    } else {
        currentPlayer = playerOne;
        console.log("It's your turn again Player1!");
    }
}

console.log("Player1 starts the game!");

function cellClicked() {
    if (event.target.textContent == "") {
        event.target.textContent = currentPlayer

        if (playerWon()) {
            console.log("Winner is " + (currentPlayer));
            hasWon.innerHTML = `${currentPlayer} has won!`;
            endGame();
        }
        if (isDraw()) {
            hasWon.innerHTML = `It's a Draw!`;
        }
        switchPlayers();
    }

}

function endGame() {
    for (let i = 0; i < cells.length; i++) {
        cells[i].removeEventListener('click', cellClicked, { once: true });
    }
}

function reset() {
    window.location.reload(true);
}

reloadButtom.addEventListener('click', reset);


function playerWon() {
    if (cells[0].textContent === currentPlayer) {
        if (cells[1].textContent === currentPlayer && cells[2].textContent === currentPlayer) {
            return true;
        }
        if (cells[3].textContent === currentPlayer && cells[6] === currentPlayer) {
            return true;
        }
        if (cells[4].textContent === currentPlayer && cells[8] === currentPlayer) {
            return true;
        }
    }
    if (cells[8].textContent === currentPlayer) {
        if (cells[2].textContent === currentPlayer && cells[5].textContent === currentPlayer) {
            return true;
        }
        if (cells[6].textContent === currentPlayer && cells[7].textContent === currentPlayer) {
            return true;
        }
    }
    if (cells[4].textContent === currentPlayer) {
        if (cells[1].textContent === currentPlayer && cells[7].textContent === currentPlayer) {
            return true;
        }
        if (cells[3].textContent === currentPlayer && cells[5].textContent === currentPlayer) {
            return true;
        }
        if (cells[2].textContent === currentPlayer && cells[6].textContent === currentPlayer) {
            return true;
        }
    }

};

function isDraw() {
    if (cells[0].textContent != "" &&
        cells[1].textContent != "" &&
        cells[2].textContent != "" &&
        cells[3].textContent != "" &&
        cells[4].textContent != "" &&
        cells[5].textContent != "" &&
        cells[6].textContent != "" &&
        cells[7].textContent != "" &&
        cells[8].textContent != "") {
        return true;
    } else {
        return false;
    }
}


