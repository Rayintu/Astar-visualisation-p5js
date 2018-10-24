class Square {

    constructor(x, y, size) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.state = 'unchecked';
        this.strokeColor = color('#000000');
        this.borderThickness = 1;
    }

    getColor(state) {
        switch (state) {
            case 'dropped':
                return color('#FF0000');
                break;
            case 'blocked':
                return color('#00CCFF');
                break;
            case 'path':
                return color('#996633');
                break;
            case 'startnode':
                return color('#ffff00');
                break;
            case 'endnode':
                return color('#9900ff');
                break;
            default:
                return color('#009933');
        }
    }

    setState(state) {
        this.state = state;
    }

    getState() {
        return this.state;
    }

    getX() {
        return this.x;
    }

    getY() {
        return this.y;
    }

    getSize() {
        return this.size;
    }

    show() {
        stroke(this.strokeColor);
        strokeWeight(this.borderThickness);
        fill(this.getColor(this.state));
        rect(this.x, this.y, this.size, this.size);
    }
}
