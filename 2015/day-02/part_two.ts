import * as fs from 'fs';

let text = fs.readFileSync('input.txt', 'utf8');

let arr = text.split("\n");

let measurements: String[][] = [];

for (let input of arr)
    measurements.push(input.split('x'));

let totalRibbonLength: number = 0;
let l: number;
let w: number;
let h: number;

for (let i = 0; i < measurements.length; i++) {

    l = +measurements[i][0];
    w = +measurements[i][1];
    h = +measurements[i][2];

    // console.log(i + ": l=" + l + "; w=" + w + "; h=" + h)

    // Find smallest permiter by finding smallest 2 sides
    let arr: number[] = [l, w, h];

    // Find the 2 smallest sides to compute the smallest perimeter
    arr.sort((a, b) => a - b);

    let smallestSide: number = arr[0];
    let smallestSide2: number = arr[1];

    // Calculate ribbon length
    let smallestPerimeter = (2 * smallestSide) + (2 * smallestSide2);
    let bowLength = l * w * h;

    totalRibbonLength += smallestPerimeter + bowLength;
}

console.log(totalRibbonLength);
    