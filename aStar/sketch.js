let gridHeight;
let gridWidth;
let squareSize;
let amountOfSquares;

let startExists = true;
let endExists = true;

let playField = [];

function setup() {
    createCanvas(1200, 800);
    background(0);
    angleMode(DEGREES);

    squareSize = height / 20;
    gridHeight = height / squareSize;
    gridWidth = width / squareSize;

    for (let x = 0; x < gridWidth; x++) {
        playField[x] = [];
        for (let y = 0; y < gridHeight; y++) {
            playField[x][y] = new Square(x * squareSize, y * squareSize, squareSize);
        }
    }

    playField[4][9].setState('startnode');
    playField[25][9].setState('endnode');
}

function draw() {
    for (let x = 0; x < gridWidth; x++) {
        for (let y = 0; y < gridHeight; y++) {
            playField[x][y].show();
        }
    }
}


