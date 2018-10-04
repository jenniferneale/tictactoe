

let symbols = "XOABCDEFGHIJKLMNPQRSTUVWYZ";
const HUMAN = "Human";
const AI = "AI";

let players = {
    Human: [],
    AI: []
}

let optionsForm = document.getElementById('options');
optionsForm.addEventListener('submit', function(e) {
    e.preventDefault();
    resetTable();
    resetPlayers();
});



function cellClicked(e) {
    e.preventDefault();
    console.log("cell clicked " + e.target.id);
    
    // Mark cell with player's symbol and mark in board object
    // Check for endgame conditions
    // Make cell unclickable

    // Cycle turn
    // If it's an AI's turn, take their turn
}

const resetTable = () => {
    // Remove all elements from the board table
    let board = document.getElementById("board");
    removeElements(board);
    
    
    // Build a board based on the player's indicated size
    let boardSize = optionsForm.querySelector("#boardSize").value;
    // If I were doing this more, I might use a template library like nunjucks, 
    // or React components which are easy to iterate over.
    let counter = 0;
    for(let i=0; i<boardSize; i++) {
        let tr = document.createElement("tr");
        board.appendChild(tr);
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


console.log("I'm here!");
resetTable();
resetPlayers();