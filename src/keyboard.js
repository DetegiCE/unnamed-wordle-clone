import { words5 } from '../resources/words5.js';
import { hasWord, getWordLine, returnColors } from './wordtools.js';

var currentCursor = 1;
var currentLine = 1;
const getWord = () => {
    while (true) {
        let tmpword = words5[(Math.random() * words5.length) | 0];
        let wordArr = tmpword.split('');
        let uniqStr = wordArr.filter(function (val, idx, arr) {
            return arr.indexOf(val) === idx;
        }).join('');
        if (tmpword.length === uniqStr.length) {
            return tmpword;
        }
    }
};

const word = getWord();

var clickme = 0;
const a = () => {
    clickme++;
    if(clickme === 19) {
        alert("You want an answer?");
    }
    if(clickme === 20) {
        alert("The answer is "+word);
    }
}

function keyDownEvent(e) {
    const key = e.keyCode;
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
        var greenCount = 0;
        if(currentCursor !== 6) {
            alert("You must complete the word first!");
            return;
        }
        if(currentCursor === 6) {
            if(hasWord(getWordLine(currentLine))) {
                let colors = returnColors(word, currentLine);
                for(var i=0 ; i<5 ; i++) {
                    let element = document.getElementById('w'+currentLine+(i+1));
                    console.log('w'+currentLine+i);
                    if(colors[i] === 'G') {
                        element.classList.add('green');
                        greenCount++;
                    }
                    else if(colors[i] === 'Y') {
                        element.classList.add('yellow');
                    }
                    else {
                        element.classList.add('black');
                    }
                }
            }
            else {
                alert("Your word does not exist!");
                return;
            }
        }
        currentLine++;
        currentCursor = 1;
        if(greenCount === 5) {
            alert("Congratulations! You've win the game!\nRefresh for the new game.");
            return;
        }
        if(currentLine === 7) {
            alert("You lost! The answer was " + word + "\nRefresh for the new game.");
            return;
        }
    }
    else {
        return;
    }
}

document.addEventListener('keydown', keyDownEvent);
