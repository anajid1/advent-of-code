import * as fs from 'fs';

let text = fs.readFileSync('input.txt', 'utf8');

let numberOfHouses: number = 1;     // Santa always starts at one house & it gets a present

let originHouseVisits: number = 1;

//Positions on x,y plane
let x: number = 0;
let y: number = 0;

let quad1: number[][] = createQuadrant();         // x > 0 & y > 0
let quad2: number[][] = createQuadrant();         // x < 0 & y > 0
let quad3: number[][] = createQuadrant();         // x < 0 & y > 0
let quad4: number[][] = createQuadrant();         // x > 0 & y < 0

for (const ch of text) {
    switch(ch) {
        case '^':
            y += 1;
            break;
        case 'v':
            y -= 1;
            break;
        case '>':
            x += 1;
            break;
        case '<':
            x -= 1;
            break;
    }

    if (x == 0 && y == 0) {
        originHouseVisits += 1;
        continue;
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
