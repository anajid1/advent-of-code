import * as fs from 'fs';

let floorNumber = 0;

let text = fs.readFileSync('input.txt', 'utf8');

for (const char of text) {
    if (char == '(')
        floorNumber++;
    else
        floorNumber--;
}

console.log(floorNumber);
