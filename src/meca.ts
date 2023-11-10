import { getChosenWord } from './game.ts';

export function setupGameMechanics() {
    let attempts = 10;
    let chosenWord = getChosenWord();
    let triedLetters = new Set(); // Stocker les lettres déjà essayées

    const guessInput = document.getElementById('guess-input') as HTMLInputElement;
    const inputs = document.querySelectorAll<HTMLInputElement>('#guessing-inputs input');

    document.getElementById('guessing-form').addEventListener('submit', function(event) {
        event.preventDefault();

        const guessedLetter = guessInput.value.trim().toUpperCase();
        if (guessedLetter && !triedLetters.has(guessedLetter)) {
            triedLetters.add(guessedLetter); // Ajouter la lettre aux tentatives
            guessInput.value = ''; // Réinitialiser l'input de devinette

            const letterIsCorrect = chosenWord.toUpperCase().includes(guessedLetter);

            const letterElement = document.getElementById(guessedLetter);
            if (letterElement) {
                letterElement.classList.add('tried');
            }

            if (!letterIsCorrect) {
                attempts--;
                updateHangmanImage(attempts);
            } else {
                updateWordDisplay(guessedLetter);
            }

            checkForWin();
        }
    });

    function updateWordDisplay(guessedLetter: string) {
        inputs.forEach((input, index) => {
            if (chosenWord[index].toUpperCase() === guessedLetter) {
                input.value = guessedLetter;
            }
        });
    }

    function checkForWin() {
        const isWin = Array.from(inputs).every(input => {
            const position = parseInt(input.name.substring(input.name.length - 1), 10) - 1;
            const letter = chosenWord[position];
            if (letter) {
                return input.value.trim().toUpperCase() === letter.toUpperCase();
            }
            return false; // Si letter est undefined, retourne false pour éviter une erreur
        });
        if (isWin) {
        }
    }
    

    function updateHangmanImage(attemptsLeft: number) {
        const imageNumber = 10 - attemptsLeft;
        const hangmanImg = document.getElementById('hangman') as HTMLImageElement;
        if (hangmanImg) {
            hangmanImg.src = `src/img/0${imageNumber}.png`; // Utilise le chemin correct vers vos images
        }
    }

    function initializeAlphabet(): void { 
        const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const alphabetContainer = document.getElementById('alphabet');
        if (alphabetContainer) {
            alphabetContainer.innerHTML = '';

            for (const letter of alphabet) {
                const span = document.createElement('span');
                span.id = letter;
                span.textContent = letter;
                span.addEventListener('click', function() {
                    // Logique pour gérer le clic sur les lettres de l'alphabet
                });
                alphabetContainer.appendChild(span);
            }
        }
    }

    // Appelez cette fonction pour initialiser l'alphabet lors du chargement de la page
    initializeAlphabet();
}


