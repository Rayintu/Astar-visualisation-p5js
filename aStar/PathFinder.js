class PathFinder{

    constructor(startNode, endNode) {
        this.currentNode = startNode;
        this.endNode = endNode;
        this.openList = [];
        this.closedList = [];
        this.pathFound = false;
    }

    findPath(){

        //FIXME
        console.log("path finding started");
        while(!this.pathFound){
            this.checkSurroundingNoDiagonal();
        }

    }

    checkSurroundingNoDiagonal(){
        playField[this.currentNode.x][this.currentNode.y].getState();
    }
}