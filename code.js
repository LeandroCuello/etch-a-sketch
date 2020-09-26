
//for creating the grid.
gridCreator(16);
function gridCreator(amountOfColums){

    const gridContainer = document.querySelector('#gridContainer');

    gridContainer.innerHTML = '';

    if (typeof(amountOfColums)!="number" ||
    amountOfColums<1||
    amountOfColums>50) return 'ERROR';

    let amountOfrows = amountOfColums;

    for(let colums=0; colums<amountOfColums;colums++){

        for(let rows=0; rows<amountOfrows;rows++){

            const  gridCell = document.createElement('div');
            
            gridCell.classList.add('grid_cell');
            gridCell.style.setProperty('grid-column',colums+1);
            gridCell.style.setProperty('grid-row', rows+1);
            gridContainer.appendChild(gridCell);
        }
    }
    addEventListenerToCells()
}

// created to create evente listeners after the grid is created or modified.
function addEventListenerToCells(){
    const gridCells = Array.from(document.querySelectorAll(".grid_cell"));
    gridCells.forEach(cell => cell.addEventListener('mouseover', PaintIblack));
}

//color fuctions
function PaintIblack(e){
    this.style.setProperty('background-color', 'black');
}
