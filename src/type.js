var currentCursor = 1;
var currentLine = 1;
document.addEventListener('keydown', function(e) {
   const keyCode = e.keyCode;
   const key = e.key;
   console.log(e.key);

   if(key >= 'a' && key <= 'z') {
       if(currentCursor === 6) {
           return;
       }
       document.getElementById('w'+currentLine+currentCursor).innerText = key;
       currentCursor++;
   }
   if(key === 'Backspace') {
       if(currentCursor === 1) {
           return;
       }
       currentCursor--;
       document.getElementById('w'+currentLine+currentCursor).innerText = '';
   }
   if(key === 'Enter') {
       if(currentLine === 7) {
           // TODO: Display game is over
           return;
       }
       currentLine++;
       currentCursor = 1;
   }
});
