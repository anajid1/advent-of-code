import {Md5} from 'ts-md5';

import * as fs from 'fs';

let key = fs.readFileSync('input.txt', 'utf8');

let answer: string = "0";

while (Md5.hashStr(key+answer).substring(0,5) != "00000") {
    let temp = +answer + 1;
    answer = temp+"";
}

console.log(answer);
