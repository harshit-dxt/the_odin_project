function createGrid(){
    const gridContainer = document.querySelector('.grid-container');
    const gridSize = 50;
    for(let i = 0; i < gridSize; ++i){
        for(let j = 0; j < gridSize; ++j){
            const div = document.createElement('div');
            div.className = "grid-item";
            gridContainer.appendChild(div);
        }
    }
}

createGrid();

const gridItemAll = document.querySelectorAll('.grid-item');

function resetGrid(){
    gridItemAll.forEach((gridItem) => {
        gridItem.classList.remove('background-change');
        gridItem.addEventListener('mouseover', (e)=>{
            e.target.classList.add('background-change');
        })
    })
}

resetGrid();

function eraserActivate(){
    gridItemAll.forEach((gridItem) => {
        gridItem.addEventListener('mouseover', (e)=>{
            e.target.classList.remove('background-change');
        })
    })
}

function eraserDeactivate(){
    gridItemAll.forEach((gridItem) => {
        gridItem.addEventListener('mouseover', (e)=>{
            e.target.classList.add('background-change');
        })
    })
}


const eraserBtn = document.querySelector('#eraser');
eraserBtn.addEventListener('click', eraserActivate);

const resetBtn = document.querySelector('#reset');
resetBtn.addEventListener('click', resetGrid);

const blackBtn = document.querySelector('#black');
blackBtn.addEventListener('click', eraserDeactivate);