function mouseDragged() {
    for (let x = 0; x < gridWidth; x++) {
        for (let y = 0; y < gridHeight; y++) {
            if (checkIfMouseIsOnSquare(playField[x][y].getX(), playField[x][y].getY())) {
                if (playField[x][y].getState() === 'unchecked') {
                    playField[x][y].setState('blocked');
                }
            }
        }
    }
}

function mousePressed() {
    for (let x = 0; x < gridWidth; x++) {
        for (let y = 0; y < gridHeight; y++) {
            if (checkIfMouseIsOnSquare(playField[x][y].getX(), playField[x][y].getY())) {
                if (playField[x][y].getState() === 'unchecked') {
                    playField[x][y].setState('blocked');
                }
            }
        }
    }
}

function deleteStartNode() {
    for (let x = 0; x < gridWidth; x++) {
        for (let y = 0; y < gridHeight; y++) {
            if (playField[x][y].getState() === 'startnode') {
                playField[x][y].setState('unchecked');
            }
        }
    }
}

function deleteEndNode() {
    for (let x = 0; x < gridWidth; x++) {
        for (let y = 0; y < gridHeight; y++) {
            if (playField[x][y].getState() === 'endnode') {
                playField[x][y].setState('unchecked');
            }
        }
    }
}

function keyPressed() {
    if (key === 'd' || key === 'D') {
        for (let x = 0; x < gridWidth; x++) {
            for (let y = 0; y < gridHeight; y++) {
                if (checkIfMouseIsOnSquare(playField[x][y].getX(), playField[x][y].getY())) {
                    playField[x][y].setState('unchecked');
                }
            }
        }
    } else if (key === 's' || key === 'S') {
        for (let x = 0; x < gridWidth; x++) {
            for (let y = 0; y < gridHeight; y++) {
                if (checkIfMouseIsOnSquare(playField[x][y].getX(), playField[x][y].getY())) {
                    if (playField[x][y].getState() !== 'blocked') {
                        if (startExists) {
                            deleteStartNode();
                        }
                        playField[x][y].setState('startnode');
                    }
                }
            }
        }
    } else if (key === 'e' || key === 'E') {
        for (let x = 0; x < gridWidth; x++) {
            for (let y = 0; y < gridHeight; y++) {
                if (checkIfMouseIsOnSquare(playField[x][y].getX(), playField[x][y].getY())) {
                    if (playField[x][y].getState() !== 'blocked') {
                        if (endExists) {
                            deleteEndNode();
                        }
                        playField[x][y].setState('endnode');
                    }
                }
            }
        }
    }
}


function checkIfMouseIsOnSquare(squareX, squareY) {
    if (pmouseX >= squareX && pmouseX <= squareX + squareSize && pmouseY >= squareY && pmouseY <= squareY + squareSize) {
        return true;
    }
    else {
        return false;
    }
}