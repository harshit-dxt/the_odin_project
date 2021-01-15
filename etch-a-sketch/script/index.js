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

function resetGrid(){
    gridItemAll.forEach((gridItem) => {
        gridItem.style.backgroundColor = 'white';
        gridItem.addEventListener('mouseover', (e)=>{
            e.target.style.backgroundColor = 'black';
        })
    })
}

createGrid();

const gridItemAll = document.querySelectorAll('.grid-item');
let color = 0;
const allowedColor = ['#ff0000', '#ffa500', '#ffff00', '#008000', '#0000ff', '#4b0082', '#ee82ee'];
resetGrid();

function eraserActivate(){
    gridItemAll.forEach((gridItem) => {
        gridItem.addEventListener('mouseover', (e)=>{
            e.target.style.backgroundColor = 'white';
        })
    })
}

function rainbowActivate(){
    gridItemAll.forEach((gridItem)=>{
        gridItem.addEventListener('mouseover', (e)=>{
            console.log(e.target.classList);
            e.target.style.backgroundColor = allowedColor[color];
            color = (color+1) % 7;
        })
    })
}

function eraserDeactivate(){
    gridItemAll.forEach((gridItem) => {
        gridItem.addEventListener('mouseover', (e)=>{
            e.target.style.backgroundColor = 'black';
        })
    })
}



const eraserBtn = document.querySelector('#eraser');
eraserBtn.addEventListener('click', eraserActivate);

const resetBtn = document.querySelector('#reset');
resetBtn.addEventListener('click', resetGrid);

const blackBtn = document.querySelector('#black');
blackBtn.addEventListener('click', eraserDeactivate);

const rainbowBtn = document.querySelector('#rainbow');
rainbowBtn.addEventListener('click', rainbowActivate);