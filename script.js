let columns = 26, rows = 100;

const headerContainer = document.querySelector(".top");
const serialNumbersContainer = document.querySelector(".sno");
const mainContainer = document.querySelector(".main");

createHeaderColumns();
createSrNoRows();
createMainCells();

function createHeaderColumns(){
    for(let i=0 ; i<=columns ; i++){
        const cell = document.createElement("div");
        if(i !== 0){
            cell.innerText = String.fromCharCode(i + 64);
            cell.classList.add("cell");
            cell.classList.add("header-cell");
        }
        else{
            cell.id = "blank-cell";
            cell.classList.add("left-cell");
        }
        headerContainer.append(cell);
    }
}

function createSrNoRows(){
    for(let i=1 ; i<=rows ; i++){
        const cell = document.createElement("div");
        cell.classList.add("left-cell");
        cell.classList.add("sno-cell");
        cell.innerText = i;
        serialNumbersContainer.append(cell);
    }
}

function createRow(rowNumber){
    const row = document.createElement("div");
    row.className = "row";
    for(let i=1 ; i<=columns ; i++){
        const cell = document.createElement("div");
        cell.classList.add("cell");
        cell.contentEditable = true;
        cell.spellcheck = false;
        row.append(cell);
        cell.id = String.fromCharCode(64 + i) + rowNumber;
        cell.addEventListener("focus", onCellFocus);
    }
    mainContainer.append(row);
}

function createMainCells(){
    for(let i=1 ; i<=rows ; i++){
        createRow(i);
    }
}