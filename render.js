"use strict";

let xmlns = "http://www.w3.org/2000/svg"

let board = []


function emptyBoard() {
    for (let x = 0; x < 12; x++) {
        board[x] = 0
    }

}

function toggleCell(x) {
    board[x] = !board[x]
}

// determines whether a cell is alive
function isAlive(x) {

    return board[x];
}


function render() {

    let gameDiv = document.getElementById("game")
    gameDiv.innerHTML = ""


    let row = document.createElementNS(xmlns, "g")
    row.setAttribute("class", "gamerow")
    gameDiv.appendChild(row)



    let t = document.createElementNS(xmlns, "rect")
    t.setAttribute("x", 23)
    t.setAttribute("y", 0)
    t.setAttribute("width", 23)
    t.setAttribute("height", 120)
    t.classList.add("whitekey")

    if (isAlive(0)) {
        t.classList.add("alive")
    }

    let handler = function(evt) {
        ToggleCell(x)
        render()
    }

    t.addEventListener("mousedown", handler)

    row.appendChild(t)



}


window.render = {

    getW: function() { return w },

    getH: function() { return h },

    isAlive: isAlive,

    emptyBoard: emptyBoard,

    toggleCell: toggleCell



}