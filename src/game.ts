export let wordsToGuess = ['python', 'javascript', 'arduino', 'swartz', 'browser', 'react', 'nodejs', 'programming', 'internet', 'software', 'computer'];

let chosenWord: string;

export function pickRandomWord(words: string[]): string {
    let index = Math.floor(Math.random() * words.length);
    return words[index];
}

export function setupGuessingInputs(word: string): void {
    let guessingInputsContainer = document.getElementById('guessing-inputs');
    if (guessingInputsContainer) {
        guessingInputsContainer.innerHTML = ''; // Clear inputs

        for (let i = 0; i < word.length; i++) {
            let input = document.createElement('input');
            input.type = 'text';
            input.name = `letter${i + 1}`;
            input.maxLength = 1; 
            guessingInputsContainer.appendChild(input);
        }
    }
}

export function initializeGame(): void {
    chosenWord = pickRandomWord(wordsToGuess); // Store the chosen word
    setupGuessingInputs(chosenWord);
    console.log(chosenWord);
}

export function getChosenWord(): string {
    return chosenWord;
}

