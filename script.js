const container = document.getElementById('container');
const clearBtn = document.getElementById('clearBtn');
const chooseSize = document.getElementById('chooseSize');
let gridSize = 30;
let colorChoice = 'black';
makeGrid(gridSize);

function makeGrid(gridSize){
    container.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
    container.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
        const boxes = container.querySelectorAll('div');
        boxes.forEach((div) => div.remove());
        for(let i = 0; i < (gridSize * gridSize); i++){
            const box = document.createElement('div');
            box.className = 'grid-items';
            container.appendChild(box);

            // Draws in every cell/box in grid. Default color: red
            box.addEventListener('mouseover', colorBox); 

        } // end of: for loop

} // end of: makeGrid()



// Clears drawing on grid
function clearGrid(){
    const gridItems = document.querySelectorAll('.grid-items');
    gridItems.forEach((grid) => {
        grid.style.backgroundColor = 'white';
    }) // end of: forEach()
} // end of: clearGrid()


function chooseSizeGrid(input){
     const sizeAdjustDiv = document.getElementById('sizeAdjustDiv');
     const invalidSize = document.getElementById('invalidSize');
    if(input > 0 && input <= 80 ){
        makeGrid(input);
        invalidSize.innerText = 'Valid Range: 1 - 80';
        console.log('valid grid size value');
    } else if (input < 0) {
        sizeAdjustDiv.appendChild(invalidSize);
        invalidSize.innerText = 'Invalid Size: Too Low. Valid Range: 1 - 80';
        console.log('invalid');
    }
     else if (input >= 80){
        sizeAdjustDiv.appendChild(invalidSize);
        invalidSize.innerText = 'Invalid Size: Too High. Valid Range: 1 - 80';
        console.log('invalid');
    }
    else if (typeof input === 'string'){
        sizeAdjustDiv.appendChild(invalidSize);
        invalidSize.innerText = 'Invalid Size. Your input is not a number.';
        console.log('not a number');
    }
        // sizeAdjustDiv.appendChild(sizeTooBig);
    
}



function colorBox(){
    this.style.backgroundColor = colorChoice;
}

function changeColor(choiceButton){
    colorChoice = choiceButton;
    colorBox(choice);
}



// Event Listener for changing the grid size. Value of input tag is taken and use as argument for function chooseSizeGrid()
chooseSize.addEventListener('change', () => {
    const size = chooseSize.value;
    chooseSizeGrid(size);
});




// eraserBtn.addEventListener('click', () => {
//     const box = document.querySelector('.grid-items');
//     box.addEventListener('mouseover', () => box.style.backgroundColor = 'white');
// });



// Clears grid using clear button
// clearBtn.addEventListener('click', () => clearGrid());



// makeGrid();