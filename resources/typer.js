function startTyping() {
    // const typingText = sampleText;
    // let currentLetterIndex = 0;
    // let currentLetter = typingText[currentLetterIndex];
    // let correctLetters = 0;
    // let wrongLetters = 0;
    // let totalLetters = typingText.length;
    // let letterHighlighter = document.createElement('span');
    // let typedText = document.createElement('span');
    // let toBeTypedText = document.createElement('span');
    // toBeTypedText.innerHTML = typingText;
    // letterHighlighter.classList.add("highlight-correct");
    // typeHere.insertAdjacentElement('afterbegin', typedText);
    // typeHere.insertAdjacentElement('beforeend', letterHighlighter);
    // typeHere.insertAdjacentElement("beforeend", toBeTypedText);
    // typeHere.addEventListener("keydown", (event)=>{
        //     let keyPressed = event.key; 
        //     console.log(keyPressed);
        //     console.log(currentLetter)
        //     if (keyPressed == currentLetter){
            //         correctLetters++;
            //         letterHighlighter.classList.remove('highlight-incorrect');
            //         letterHighlighter.classList.add('highlight-correct');
            //     }
            //     else{
                //         wrongLetters++;
                //         letterHighlighter.classList.remove('highlight-correct');
    //         letterHighlighter.classList.add('highlight-incorrect');
    //     }
    //     letterHighlighter.innerHTML = currentLetter;
    //     currentLetter = typingText[++currentLetterIndex];
    //     typedText.innerHTML = typingText.slice(0, currentLetterIndex-1);
    //     toBeTypedText.innerHTML = typingText.slice(currentLetterIndex);
    //     if (currentLetterIndex == totalLetters){
        //         console.log("Done");
        //         console.log(correctLetters);
        //         console.log(wrongLetters);
        //     }
        // })
        let letters = []; // Letters in the paragraph
        for (let word of typeHere.children){
            for (let letter of word.children){
                letters.push(letter);
            }
        }
        // Use .innerHTML to access the current letter
        let currentLetterIndex = 0;
        let currentLetter = letters[currentLetterIndex];
        let correctLetters = 0;
        let incorrectLetters = 0;
        let totalLetters = letters.length;
        typeHere.addEventListener("keydown", (event) => {
            let keyPressed = event.key;
            console.log(keyPressed);
            console.log(currentLetter.innerHTML)
            if (keyPressed == currentLetter.innerHTML) {
                correctLetters++;
                currentLetter.classList.add('highlight-correct');
            }
            else {
                incorrectLetters++;
                currentLetter.classList.add('highlight-incorrect');
            }
            currentLetter = letters[++currentLetterIndex];
            if (currentLetterIndex == totalLetters) {
                console.log("Done");
                console.log(correctLetters);
                console.log(wrongLetters);
                return;
            }
        })
}

function createPara(sampleText) {
    // for (let word of sampleText.split(' ')){
    //     let wordSpan = document.createElement('span');
    //     for (let letter of word.split('')){
    //         let letterSpan = document.createElement('span');
    //         letterSpan.innerHTML = letter;
    //         wordSpan.insertAdjacentElement('beforeend', letterSpan);
    //         if (!sampleText.endsWith(word) && word.endsWith(letter)){
    //             let letterSpan = document.createElement('span');
    //             letterSpan.innerHTML = ' ';
    //             wordSpan.insertAdjacentElement('beforeend', letterSpan);
    //         }
    //     }
    //     typeHere.insertAdjacentElement('beforeend', wordSpan)
    // }

    // Adding words into different spans
    let wordSpan = document.createElement('span'); // Initial
    for (let letter of sampleText.split('')) {
        let letterSpan = document.createElement('span');
        letterSpan.innerHTML = letter;
        wordSpan.insertAdjacentElement('beforeend', letterSpan)
        if (letter == ' ') {
            typeHere.insertAdjacentElement('beforeend', wordSpan)
            wordSpan = document.createElement('span');
        }
    }
}

const typeHere = document.getElementById('typeHere');
const sampleText = "This is some text which is random text";

document.getElementById('startTyping').addEventListener('click', () => {
    typeHere.focus();
    startTyping(sampleText);
});

window.onload = () => {
    createPara(sampleText);
}