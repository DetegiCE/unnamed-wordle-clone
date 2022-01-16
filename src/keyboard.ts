import { Words } from '../resources/words5';

var currentCursor = 1;
var currentLine = 1;
const getWord = () => {
    while (true) {
        let wordList = new Words;
        let tmpword: string = wordList.words5[(Math.random() * wordList.words5.length) | 0];
        let wordArr: string[] = tmpword.split('');
        let uniqStr = wordArr.filter(function (val, idx, arr) {
            return arr.indexOf(val) === idx;
        }).join('');
        if (tmpword.length === uniqStr.length) {
            return tmpword;
        }
    }
};
const word = getWord();

function keyDownEvent(e: KeyboardEvent) {
    const key = e.keyCode;
    console.log(e.key);
    console.log(key);
    console.log(word);

    if(key >= 65 && key <= 90) {
        if(currentCursor === 6) {
            return;
        }
        document.getElementById('w'+currentLine+currentCursor).innerText = String.fromCharCode(key);
        currentCursor++;
    }
    else if(key === 8) { // Backspace
        if(currentCursor === 1) {
            return;
        }
        currentCursor--;
        document.getElementById('w'+currentLine+currentCursor).innerText = '';
    }
    else if(key === 13) { // Enter
        if(currentCursor !== 6) {
            alert("You must complete the word first!");
            return;
        }
        if(currentLine === 7) {
            alert("Game Over!");
            return;
        }
        if(currentLine === 6) {

        }
        currentLine++;
        currentCursor = 1;
    }
    else {
        return;
    }
}

document.addEventListener('keydown', keyDownEvent);
