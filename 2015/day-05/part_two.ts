import * as fs from 'fs';
import { skip } from 'node:test';

let text = fs.readFileSync('input.txt', 'utf8');

let list = text.split("\n");

let niceCounter: number = 0;

for (const str of list) {
    console.log(str);

    console.log("Pair appears twice: " + hasPairAppearTwice(str));
    
    console.log("Does ch repeat: " +  doesLetterRepeat(str));

    if (hasPairAppearTwice(str) && doesLetterRepeat(str))
        niceCounter++;

    console.log("*********\n");
}

console.log(niceCounter);

function hasPairAppearTwice(str: String): boolean {
    while (str.length >= 4) {
        let pair: String = str.substring(0, 2);
        let checkStr: String = str.slice(2);
        if (isPairInString(pair, checkStr))
            return true;
        str = str.slice(1);
    }

    return false;
}

function isPairInString(pair: String, str: String): boolean {
    if (pair == str.substring(0, 2)) { return true; }

    if (str.length == 2) { return false; }

    if (str.length == 3) { return isPairInString(pair, str.substring(1, 3));}

    if (str.length > 3) { return isPairInString(pair, str.slice(1)); }

    return false;
}

function doesLetterRepeat(str: String): boolean {
    if (str.length >= 3) {
        if (str.charAt(0) == str.charAt(2)) {
            return true;
        }
        else {
            str = str.substring(1);
            return doesLetterRepeat(str);
        }
    }

    return false;
}
