import { error } from 'console';
import * as fs from 'fs';
import { stringify } from 'querystring';

let commandList = fs.readFileSync('input.txt', 'utf8').split("\n");

let graph: number[][] = createGraph();

for (var command of commandList) {
    let parameters = simplifyInstruction(command.split(" "));
    // console.log(parameters);
    doThingToGraph(parameters[0], parameters[1], parameters[2]);
}

console.log(checkTotalBrightness());

function simplifyInstruction(arr: string[]): string[] {
    if (arr.length == 4) {
        // Toggle command
        return [arr[0], arr[1], arr[3]];  // Need everything in arr except 'through' because it's meaningless.
    } else if (arr.length == 5) {
        // Turn off/on command
        return [arr[1], arr[2], arr[4]];  // Only need which direction to turn (off/on) & starting and end postion
    }

    // Error because arrary lengths can only be 4 or 5
    console.log("ERROR: Invalid arr length in simplifyInstruction --- EXITING");
    throw new error();
}

function createGraph(): number[][] {
    let arr: number[][] = [];

    for (let i = 0; i < 1000; i++) {
        arr[i] = [];
        for (let j = 0; j < 1000; j++) {
            arr[i][j] = 0;
        }
    }

    return arr;
}

function doThingToGraph(typeOfThing: string, minXY: string, maxXY: string) {
    let minMaxXYArr: number[] = numberMinMaxXY(minXY, maxXY);
    let minX: number = minMaxXYArr[0];
    let minY: number = minMaxXYArr[1];
    let maxX: number = minMaxXYArr[2];
    let maxY: number = minMaxXYArr[3];
    // console.log(minX + " " + minY + " " + maxX + " " + maxY);

    let x: number = minX;
    let y: number = minY;


    while(x <= maxX) {
        // console.log("x = " + x);
        // console.log("maxX = " + maxX);
        while(y <= maxY) {
            // console.log("[" + x + "," + y + "]");
            if(typeOfThing == "toggle") {
                graph[x][y] += 2;
            } else if (typeOfThing == "on") {
                graph[x][y] += 1;
            } else if (typeOfThing == "off") {
                if (graph[x][y] >= 1) {
                    graph[x][y] -= 1;
                }
            }
            y++;
        }
        y = minY;
        x++;
        // console.log(x + " <= "  + maxX + " ?");
    }

    // console.log("********************");
    for (let i = 0; i <= 2; i++) { 
        let str: string = "";
        for (let j = 0; j <= 2; j++) {
            str += graph[i][j] + " ";
        }
        // console.log(str);
    }
    // console.log("********************");
}

function numberMinMaxXY(minXY: string, maxXY: string): number[] {
    let minXYSimple: string[] = minXY.split(",");
    let minX: number = +minXYSimple[0];
    let minY: number = +minXYSimple[1];

    let maxXYSimple: string[] = maxXY.split(",");
    let maxX: number = +maxXYSimple[0];
    let maxY: number = +maxXYSimple[1];

    return [minX, minY, maxX, maxY];
}

function checkTotalBrightness(): number {
    let totalBrightness = 0;

    for (let i = 0; i < 1000; i++) {
        for (let j = 0; j < 1000; j++) {
            totalBrightness += graph[i][j] 
        }
    }

    return totalBrightness;
}


