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
            let title = document.getElementById('title');
            title.setAttribute('onclick', 'console.log("'+tmpword+'");')
            return tmpword;
        }
    }
};

const word = getWord();

const alphaEvent = (value) => {
    if(currentCursor === 6) {
        return;
    }
    document.getElementById('w'+currentLine+currentCursor).innerText = value;
    currentCursor++;
}

const enterEvent = () => {
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

const backspaceEvent = () => {
    if(currentCursor === 1) {
        return;
    }
    currentCursor--;
    document.getElementById('w'+currentLine+currentCursor).innerText = '';
}

function keyDownEvent(e) {
    const key = e.keyCode;
    if(key >= 65 && key <= 90) {
        alphaEvent(String.fromCharCode(key));
    }
    else if(key === 8) { // Backspace
        backspaceEvent();
    }
    else if(key === 13) { // Enter
        enterEvent();
    }
}

document.addEventListener('keydown', keyDownEvent);

var keyList = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J',
               'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T',
               'U', 'V', 'W', 'X', 'Y', 'Z'];
keyList.forEach((n) => {
    document.getElementById('key'+n).addEventListener('click', function() {
        alphaEvent(n);
    })
});

document.getElementById('keyEnter').addEventListener('click', function() {
    enterEvent();
});

document.getElementById('keyBackspace').addEventListener('click', function() {
    backspaceEvent();
});
