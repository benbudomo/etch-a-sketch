const squareGrid = document.getElementById('squareGrid');
let userNumber = 8;

function createGrid(rows, columns) {
    squareGrid.style.setProperty('--gridRows', rows);
    squareGrid.style.setProperty('--gridColumns', columns);

    for(let i = 0; i < (rows * columns); i++) {
        let newDiv = document.createElement('div');
        newDiv.addEventListener('mouseover', e => e.target.classList.add('backgroundColor'));
        squareGrid.appendChild(newDiv).className = 'actualSquare'
    }
}

function clearGrid() {
    let currentDivs = document.querySelectorAll('.actualSquare');
    currentDivs.forEach(div => {
        squareGrid.removeChild(div);
    });
}

function newGrid() {
    let userNumber = prompt('Size of grid:', '16');
    clearGrid();
    createGrid(userNumber, userNumber);
}

function randomColors() {
    newGrid();
    let currentDivs = document.querySelectorAll('.actualSquare');
    currentDivs.forEach(div => {
        div.addEventListener('mouseover', (e) => {
            let randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
            div.style.backgroundColor = randomColor;
        })
    });
}

createGrid(userNumber, userNumber);

