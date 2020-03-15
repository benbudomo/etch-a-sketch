const squareGrid = document.getElementById('squareGrid');

function createGrid(rows, columns) {
    squareGrid.style.setProperty('--gridRows', rows);
    squareGrid.style.setProperty('--gridColumns', columns);

    for(let i = 0; i < (rows * columns); i++) {
        let newDiv = document.createElement('div');
        newDiv.addEventListener('mouseover', e => e.target.classList.add('backgroundColor'));
        squareGrid.appendChild(newDiv).className = 'actualSquare'
    }
}

function myFunction() {
    let userNumber = prompt('Size of grid?', '2 – 64');
    createGrid(userNumber, userNumber);
}

