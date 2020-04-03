let lastGridNumber = 256; 
createNewGrid(lastGridNumber); //creates first grid with 16 squares

function createNewGrid(squareNumber){
    const container = document.querySelector("#container");
    let gridWidth = (Math.sqrt(squareNumber));
    for(i = 0; i < squareNumber; i++){
        const gridSquare = document.createElement("div");
        gridSquare.id = "div" + i;
        gridSquare.classList.add("boxes");
        gridSquare.style.width = ((960/gridWidth) + "px");
        gridSquare.style.height = ((960/gridWidth) + "px");
        gridSquare.setAttribute;
        container.appendChild(gridSquare);
    }
    const boxColors = document.querySelectorAll(".boxes");
    boxColors.forEach((div) =>{
        div.addEventListener("mouseover", (e) => {
            e.target.style.background = "black";
    });
});
}

function removeGrid(squareNumber){
    const container = document.querySelector("#container");
    for(i = 0; i < squareNumber; i++){
        container.removeChild(container.lastChild);
    }
}

const clearGrid = document.querySelector("#clear-button")
clearGrid.addEventListener("click", function(e) {
    let gridLength = prompt("How many boxes long would you like the grid to be?");
    let currentGridNumber = gridLength * gridLength;
    removeGrid(lastGridNumber);
    createNewGrid((currentGridNumber))
    lastGridNumber = currentGridNumber;
}); 




