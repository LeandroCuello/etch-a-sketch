//setting DOMS elements as variables
const gridContainer = document.querySelector('#gridContainer');
const cellManageDisplay = document.querySelector('#cm_display');
const cellManageAddBtn = document.querySelector('#cm_more');
const cellManageRestBtn = document.querySelector('#cm_less');
const blackSelector = document.querySelector('#black_selector');
const whiteSelector = document.querySelector('#white_selector');
const colorsSelector = document.querySelector('#colors_selector');
const eraseButton = document.querySelector('#erase');

//Array with color options
const colorsOptions = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];

//defaults setting for when the browser is open.
gridCreator(+cellManageDisplay.getAttribute('placeholder'));
let colorSelected = 'black';
//logic for the bottuns to add or rest from the display
cellManageAddBtn.addEventListener('click', () => botttunPress(1));
cellManageRestBtn.addEventListener('click', () => botttunPress(-1))

function botttunPress (addedNumber){
    let tmpNumber = +cellManageDisplay.value;
    tmpNumber += addedNumber;    
    gridCreator(tmpNumber);
}
//logic for erase button
eraseButton.addEventListener('click', createGrid);

//logic for the color select bottuns
blackSelector.addEventListener('click', () => colorSelector("black"));
whiteSelector.addEventListener('click', () => colorSelector("white"));
colorsSelector.addEventListener('click', () => colorSelector("colors"));

function colorSelector(color){

    blackSelector.classList.remove('press_color_selector');
    whiteSelector.classList.remove('press_color_selector');
    colorsSelector.classList.remove('press_color_selector');

    if(color == "black"){
        blackSelector.classList.add('press_color_selector');
    }else if(color == "white"){
        whiteSelector.classList.add('press_color_selector');
    }else{
        colorsSelector.classList.add('press_color_selector');
    }
    
    colorSelected = color;
}

//add events listener to notice a change in the display that shows the amount of
//colums the grid has.
cellManageDisplay.addEventListener('change', createGrid);

function createGrid(){
    gridCreator(cellManageDisplay.value);
}

//for creating the grid.
function gridCreator(amountOfColums){

    cellManageDisplay.value = amountOfColums;
    amountOfColums = +amountOfColums;
    gridContainer.innerHTML = '';

    if ( isNaN(amountOfColums) ||
    amountOfColums<2||
    amountOfColums>64){
        amountOfColums = 2;
        cellManageDisplay.value = 2;
    }

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
    gridCells.forEach(cell => cell.addEventListener('mouseover', painter));
}

//color fuctions
function painter(){
    if (colorSelected != "colors"){
        this.style.setProperty('background-color', colorSelected);
    }else{
        this.style.setProperty('background-color', colorsOptions[getRandomInt(colorsOptions.length -1)])
    }
}

//choose a random number
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}
