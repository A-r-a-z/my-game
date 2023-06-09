
class GrassEater {

    constructor(x, y) {

        this.x = x;
        this.y = y;
        this.energy = 8;
        this.directions = [];

    }

    getNewCoordinates() {

        this.directions = [

            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]

        ];

    }

    chooseCell(character) {
        this.getNewCoordinates();
        var found = [];

        for (let i = 0; i < 8; i++) {

            var x = this.directions[i][0];

            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == character) {

                    found.push(this.directions[i]);

                }
            }
        }
        return found;
    }

    eat() {
        let grassN = this.chooseCell(1);
        let oneGrassN = random(grassN);
        
        if (oneGrassN) {
            console.log("g")
            this.energy++;
            matrix[this.y][this.x] = 0;
            this.x = oneGrassN[0];
            this.y = oneGrassN[1];
            matrix[this.y][this.x] = 2;

            for (var i in grassArr) {

                if (this.x == grassArr[i].x && this.y == grassArr[i].y) {
                    grassArr.splice(i, 1);
                    break;
                }
            }
        } 
        // else {
        //     this.move();
        // }
    }

    move() {
        if (this.energy > 0) {
            let emptyCells = this.chooseCell(0);
            let oneEmptyCells = random(emptyCells);

            if (oneEmptyCells) {
                this.energy--;
                matrix[this.x][this.y] = 0;
                this.x = oneEmptyCells[0];
                this.y = oneEmptyCells[1];
                matrix[this.x][this.y] = 2;
            }

        } else {
            this.die();
        }
    }

    die() {
        matrix[this.y][this.x] = 0;
        for (var i in grassEaterArr) {
            if (this.x == grassEaterArr[i].x && this.y == grassEaterArr[i].y) {
                grassEaterArr.splice(i, 1);
                break;
            }
        }
    }
}


















