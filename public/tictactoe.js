

let symbols = "XOABCDEFGHIJKLMNPQRSTUVWYZ";
const HUMAN = "Human";
const AI = "AI";

let players = {
    Human: [],
    AI: []
}

let board = [...Array(9).keys()];

// First player could later be randomized with a coin flip
let currentPlayer = -1;

let optionsForm = document.getElementById('options');
optionsForm.addEventListener('submit', function(e) {
    e.preventDefault();
    resetTable();
    resetPlayers();
    cycleTurn();
});



const sleep = ms => {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

function cellClicked(e) {
    e.preventDefault();
    takeTurn(e.target.id);
}

// returns the index of the cell for the best move
let randomMove = () => {
    let empties = board.filter(curr => typeof curr == "number");
    let rand = empties[Math.floor(Math.random() * empties.length)];
    return rand;
    
}

const takeTurn = cellToMark => {
    // Mark cell with player's symbol and mark in board object
    let allPlayers = players.Human.concat(players.AI);
    let symbol = allPlayers[currentPlayer];
    let cell = document.getElementById(cellToMark);
    cell.innerText = symbol;
    board[cellToMark] = symbol;
    // Check for endgame conditions

    // Make cell unclickable
    cell.style.pointerEvents = "none";
    // Cycle turn
    cycleTurn();
}

async function cycleTurn() {
    let allPlayers = players.Human.concat(players.AI);
    (currentPlayer>= allPlayers.length -1) ? currentPlayer = 0 : currentPlayer++;
    document.getElementById("currentPlayer").innerText = "Player " + allPlayers[currentPlayer] + "'s Turn...";
    // If the new current player is an AI, take their turn
    if(currentPlayer >= players.Human.length) {
        await sleep(1000);
        takeTurn(randomMove());
    }
}

const resetTable = () => {
    // Remove all elements from the board table
    let boardTable = document.getElementById("board");
    removeElements(boardTable);

    // Build a board based on the player's indicated size
    let boardSize = optionsForm.querySelector("#boardSize").value;
    board = [...Array(Math.pow(boardSize,2)).keys()];
    // If I were doing this more, I might use a template library like nunjucks, 
    // or React components which are easy to iterate over.
    let counter = 0;
    for(let i=0; i<boardSize; i++) {
        let tr = document.createElement("tr");
        boardTable.appendChild(tr);
        for(let j=0; j<boardSize; j++) {
            let td = document.createElement("td");
            td.classList = "cell";
            td.id = counter++;
            td.innerText = td.id;
            td.addEventListener('click', cellClicked);
            tr.appendChild(td);
        }
    }
}

const removeElements = elem => {
    while (elem.firstChild) {
        elem.removeChild(elem.firstChild);
    }
}

const resetPlayers = () => {
    // Remove players from index
    let playerIndex = document.getElementById("playerIndex");
    removeElements(playerIndex);
    players = {
        Human: [],
        AI: []
    }
    currentPlayer = -1;
    // List the humans and AIs
    let numHumans =optionsForm.querySelector("#numHumans").value;
    let numAIs =optionsForm.querySelector("#numAIs").value;
    let symbolArr = symbols.split("");
    symbolArr = updatePlayerIndex(playerIndex, numHumans, HUMAN, symbolArr);
    symbolArr = updatePlayerIndex(playerIndex, numAIs, AI, symbolArr);
}

function updatePlayerIndex(playerIndex, num, species, symbolArr) {
    
    if(num>0) {
        let header = document.createElement("h3");
        header.innerText = species + " Players";
        playerIndex.appendChild(header);
        let ol = document.createElement("ul");
        playerIndex.appendChild(ol);
        for(let i=0; i<num; i++) {
            let playerSymbol = symbolArr.shift();
            players[species].push(playerSymbol);
            let playerLine = document.createElement("li");
            playerLine.innerText = "Player " + playerSymbol;
            ol.appendChild(playerLine);
        }
    } 
    
    return symbolArr;
}


console.log("Let's play!");
resetTable();
resetPlayers();
cycleTurn();