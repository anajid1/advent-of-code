import * as fs from 'fs';

let floorNumber = 0;

let text = fs.readFileSync('input.txt', 'utf8');

let position = 0;

for (const char of text) {

    position++;

    if (char == '(')
        floorNumber++;
    else
        floorNumber--;

    if (floorNumber == -1) {
        break;
    }
}

console.log("floorNumber: " + floorNumber);
console.log("position: " + position);
