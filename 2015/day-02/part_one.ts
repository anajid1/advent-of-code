import * as fs from 'fs';

let text = fs.readFileSync('input.txt', 'utf8');

let arr = text.split("\n");

let measurements: String[][] = [];

for (let input of arr)
    measurements.push(input.split('x'));

let totalWrappingPaper: number = 0;
let l: number;
let w: number;
let h: number;

for (let i = 0; i < measurements.length; i++) {

    l = +measurements[i][0];
    w = +measurements[i][1];
    h = +measurements[i][2];

    // console.log(i + ": l=" + l + "; w=" + w + "; h=" + h)

    // Calculate slack
    let minSideArea: number = l*w;
    if (w*h < minSideArea)
        minSideArea = w*h;
    if (l*h < minSideArea)
        minSideArea = l*h;

    // Calculate surface area
    let surfaceArea: number = 0;
    surfaceArea += 2*l*w;
    surfaceArea += 2*w*h;
    surfaceArea += 2*h*l;

    totalWrappingPaper += surfaceArea + minSideArea;

}

console.log(totalWrappingPaper);
    

