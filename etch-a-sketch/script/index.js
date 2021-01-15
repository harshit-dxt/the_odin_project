function createGrid(){
    const gridContainer = document.querySelector('.grid-container');
    const gridSize = 16;
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
console.log(gridItemAll);
gridItemAll.forEach((gridItem) => {
    console.log(gridItem);
    gridItem.addEventListener('mouseover', (e)=>{
        e.target.style.color = 'black';
        e.target.classList.add('background-change');
    })
})

function resetGrid(){
    gridItemAll.forEach((gridItem) => {
        gridItem.classList.remove('background-change');
    })
}

const resetBtn = document.querySelector('#reset');
resetBtn.addEventListener('click', resetGrid);



