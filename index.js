
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");
class Tetris {
    constructor() {
        this.grid = Array(20).fill(null).map(() => Array(10).fill(0));
        this.block = null;
        this.createNewBlock();
    }

    createNewBlock() {
        this.block = {
            shape: [
                [0, 1, 0],
                [0, 1, 0],
                [0, 1, 0],
            ],
            position: { x: 5, y: 0 },
        };
    }

    moveBlockDown() {
        this.block.position.y++;
        if (this.checkCollision()) {
            this.block.position.y--;
            this.updateGrid();
            this.checkRows();
            this.createNewBlock();
        }
    }

    rotateBlock() {
        // Implementação da rotação do bloco
    }

    moveBlockLeft() {
        this.block.position.x--;
        if (this.checkCollision()) {
            this.block.position.x++;
        }
    }

    moveBlockRight() {
        this.block.position.x++;
        if (this.checkCollision()) {
            this.block.position.x--;
        }
    }

    checkCollision() {
        // Implementação da verificação de colisão
        return false; // Substitua pela lógica real de colisão
    }

    updateGrid() {
        // Implementação da atualização da grade
    }

    checkRows() {
        // Implementação da verificação e remoção de linhas completas
    }

    draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        this.grid.forEach((row, y) => {
            row.forEach((value, x) => {
                if (value) {
                    drawBlock(x, y, "blue");
                }
            });
        });
        this.block.shape.forEach((row, y) => {
            row.forEach((value, x) => {
                if (value) {
                    drawBlock(this.block.position.x + x, this.block.position.y + y, "red");
                }
            });
        });
    }
}

function drawBlock(x, y, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x * 30, y * 30, 30, 30);
    ctx.strokeStyle = "black";
    ctx.strokeRect(x * 30, y * 30, 30, 30);
}

const game = new Tetris();

function updateGame() {
    game.moveBlockDown();
    game.rotateBlock();
    game.moveBlockDown();
    game.moveBlockLeft();
    game.moveBlockDown();
    game.moveBlockRight();
    game.moveBlockDown();
    game.checkCollision();
    game.updateGrid();
    game.checkRows();
    game.draw();
}

document.getElementById("btn").addEventListener("click", updateGame);