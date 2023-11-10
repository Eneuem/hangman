export let wordsToGuess = ['python', 'javascript', 'arduino', 'swartz', 'browser', 'react', 'nodejs', 'programming', 'internet', 'software', 'computer'];

let chosenWord: string = ""; // Initialiser chosenWord avec une chaîne vide

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
            input.classList.add('disabled'); 
            input.name = `letter${i + 1}`;
            input.maxLength = 1; 
            guessingInputsContainer.appendChild(input);
        }
    }
}
export function getChosenWord(): string {
    // Vérifie si chosenWord a été défini
    if (!chosenWord) {
        console.error("Le mot choisi n'a pas été initialisé.");
        return "";
    }
    return chosenWord;
}

export function initializeGame(): Promise<void> {
    return new Promise((resolve) => {
        chosenWord = pickRandomWord(wordsToGuess);
        setupGuessingInputs(chosenWord);
        console.log(chosenWord);
        resolve(); // Résoudre la promesse une fois que tout est prêt
    });
}
