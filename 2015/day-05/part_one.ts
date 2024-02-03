import * as fs from 'fs';

let text = fs.readFileSync('input.txt', 'utf8');

let list = text.split("\n");

let niceCounter: number = 0;

let vowelCounter: number = 0;

let prevChar: String = "";

let doesCharAppearTwice: boolean = false;
let haveNaughtyString: boolean = false;

for (const str of list) {
    console.log(str);
    for (const ch of str) {
        // Check if character is a vowel and if so increment vowel counter
        if (isVowel(ch)) { vowelCounter++; }

        // Check if character appears twice in a row and we can safely ignore 
        // the first iteration
        if (prevChar == ch)
            doesCharAppearTwice = true;

        // Check if current and previous ch make a naughty string
        // Can't safely ignore first iteration
        if (prevChar.length != 0) {
            let str: String = prevChar+ch;
            console.log("checking naughtyString: " + str);
            if (str == "ab" || str == "cd" || str == "pq" || str == "xy") {
                console.log("hasNAughty str: " + str);
                haveNaughtyString = true;
            }
        }
        prevChar = ch;
    }

    console.log("Vowel Count: " + vowelCounter);
    console.log("char appears twice: " + doesCharAppearTwice);
    console.log("naughty string: " + haveNaughtyString);
    console.log("*********\n");

    if (vowelCounter >= 3 && doesCharAppearTwice && !haveNaughtyString)
        niceCounter++;

    // Reset values to default for next string
    prevChar = "";
    vowelCounter = 0;
    doesCharAppearTwice = false;
    haveNaughtyString = false;

}

console.log(niceCounter);

function isVowel(ch: String): boolean {
    if (ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u')
        return true;

    return false;
}
