const typingText = "This is some random text";
const typeHere = document.getElementById('typeHere');
let currentLetterIndex = 0;
let currentLetter = typingText[currentLetterIndex];
let correctLetters = 0;
let wrongLetters = 0;
let totalLetters = typingText.length;
let letterHighlighter = document.createElement('span');
let typedText = document.createElement('span');
let toBeTypedText = document.createElement('span');
toBeTypedText.innerHTML = typingText;
letterHighlighter.classList.add("highlight-correct");
typeHere.insertAdjacentElement('afterbegin', typedText);
typeHere.insertAdjacentElement('beforeend', letterHighlighter);
typeHere.insertAdjacentElement("beforeend", toBeTypedText);
typeHere.addEventListener("keydown", (event)=>{
    let keyPressed = event.key; 
    console.log(keyPressed);
    console.log(currentLetter)
    if (keyPressed == currentLetter){
        correctLetters++;
        letterHighlighter.classList.remove('highlight-wrong');
        letterHighlighter.classList.add('highlight-correct');
    }
    else{
        wrongLetters++;
        letterHighlighter.classList.remove('highlight-correct');
        letterHighlighter.classList.add('highlight-wrong');
    }
    letterHighlighter.innerHTML = currentLetter;
    currentLetter = typingText[++currentLetterIndex];
    typedText.innerHTML = typingText.slice(0, currentLetterIndex-1);
    toBeTypedText.innerHTML = typingText.slice(currentLetterIndex);
    if (currentLetterIndex == totalLetters){
        console.log("Done");
        console.log(correctLetters);
        console.log(wrongLetters);
    }
})

window.onload = ()=>{
    typeHere.focus();
}