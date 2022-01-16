import { words5 } from '../resources/words5.js';

export const hasWord = (word) => {
    return words5.indexOf(word.toLowerCase()) !== -1;
}

const getLetter = (line, pos) => {
    return document.getElementById('w' + line + pos).innerText;
}

export const getWordLine = (line) => {
    let letter1 = getLetter(line, 1);
    let letter2 = getLetter(line, 2);
    let letter3 = getLetter(line, 3);
    let letter4 = getLetter(line, 4);
    let letter5 = getLetter(line, 5);
    return letter1 + letter2 + letter3 + letter4 + letter5;
}

export const returnColors = (answer, line) => {
    var colorArray = [];
    for(var i=0 ; i<5 ; i++) {
        if(getLetter(line, i+1).toLowerCase() === answer[i]) {
            colorArray.push('G');
        }
        else if(answer.includes(getLetter(line, i+1).toLowerCase())) {
            colorArray.push('Y');
        }
        else {
            colorArray.push('B');
        }
    }
    return colorArray;
}
