import * as fs from 'fs';

let text = fs.readFileSync('input.txt', 'utf8');

let numberOfHouses: number = 1;     // Santa always starts at one house & it gets a present

let originHouseVisits: number = 1;

// Positions on x,y plane for santa
let santaX: number = 0;
let santaY: number = 0;

// Positions on x,y plane for robo-santa
let roboX: number = 0;
let roboY: number = 0;

let quad1: number[][] = createQuadrant();         // x > 0 & y > 0
let quad2: number[][] = createQuadrant();         // x < 0 & y > 0
let quad3: number[][] = createQuadrant();         // x < 0 & y > 0
let quad4: number[][] = createQuadrant();         // x > 0 & y < 0

let roboTurn: boolean = false;  // Santa goes first

let x: number;
let y: number;

for (const ch of text) {

    if (roboTurn) {
        moveRobo(ch);
        roboTurn = !roboTurn;
        if (roboX == 0 && roboY == 0) {
            originHouseVisits += 1;
            continue;
        }
        x = roboX;
        y = roboY;
    }
    else {
        moveSanta(ch);
        roboTurn = !roboTurn;
        if (santaX == 0 && santaY == 0) {
            originHouseVisits += 1;
            continue;
        }
        x = santaX;
        y = santaY;
    }


    if (x >= 0 && y >= 0) {
        if (quad1[x][y] == 0)
            numberOfHouses += 1;
        quad1[x][y] += 1;
    }
    else  if (x <= 0 && y >= 0) {
        if (quad2[Math.abs(x)][y] == 0)
            numberOfHouses += 1;
        quad2[Math.abs(x)][y] += 1;
    }
    else  if (x <= 0 && y <= 0) {
        if (quad3[Math.abs(x)][Math.abs(y)] == 0)
            numberOfHouses += 1;
        quad3[Math.abs(x)][Math.abs(y)] += 1;
    }
    else  if (x >= 0 && y <= 0) {
        if (quad4[x][Math.abs(y)] == 0)
            numberOfHouses += 1;
        quad4[x][Math.abs(y)] += 1;
    }
}

console.log(numberOfHouses);

function createQuadrant(): number[][] {
    let arr: number[][] = [];

    for (let i = 0; i < 10000; i++) {
        arr[i] = [];
        for (let j = 0; j < 10000; j++) {
            arr[i][j] = 0;
        }
    }

    return arr;
}

function moveRobo(ch) {
    switch(ch) {
        case '^':
            roboY += 1;
            break;
        case 'v':
            roboY -= 1;
            break;
        case '>':
            roboX += 1;
            break;
        case '<':
            roboX -= 1;
            break;
    }
}

function moveSanta(ch) {
    switch(ch) {
        case '^':
            santaY += 1;
            break;
        case 'v':
            santaY -= 1;
            break;
        case '>':
            santaX += 1;
            break;
        case '<':
            santaX -= 1;
            break;
    }
}
