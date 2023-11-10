import { getChosenWord } from './game.ts';

export function setupGameMechanics() {

let attempts = 10;
let chosenWord = getChosenWord(); // Assurez-vous que cette fonction retourne le mot actuel à deviner

document.getElementById('guessing-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const guessedLetter = getGuessedLetter();

    if (guessedLetter) {
        const letterIsCorrect = chosenWord.toUpperCase().includes(guessedLetter);

        if (!letterIsCorrect) {
            // Si la lettre n'est pas dans le mot
            attempts--;
            updateHangmanImage(attempts);

            if (attempts === 0) {
                // Actions à effectuer quand le joueur a perdu
            }
        } else {
            // Si la lettre est dans le mot
            const inputs = document.querySelectorAll<HTMLInputElement>('#guessing-inputs input');
            for (let i = 0; i < chosenWord.length; i++) {
                if (chosenWord[i].toUpperCase() === guessedLetter) {
                    inputs[i].value = guessedLetter; // Affiche la lettre dans le champ correspondant
                    inputs[i].disabled = true; // Désactive le champ pour qu'il ne soit plus modifiable
                }
            }
        }

        function updateHangmanImage(attemptsLeft: number) {
            // Calcule le numéro de l'image basé sur les tentatives restantes
            const imageNumber = 10 - attemptsLeft;
            const hangmanImg = document.getElementById('hangman') as HTMLImageElement;
            if (hangmanImg) {
                hangmanImg.src = `src/img/0${imageNumber}.png`; // Utilise le chemin correct vers vos images
            }
        }

        // Marque la lettre comme essayée dans l'alphabet
        document.getElementById(guessedLetter).classList.add('tried');
    }
});

// Initialisation de l'état de l'alphabet
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

// Fonction pour obtenir la lettre devinée
function getGuessedLetter(): string | null {
    const inputs = document.querySelectorAll<HTMLInputElement>('#guessing-inputs input');
    for (const input of inputs) {
        if (input.value.trim() !== '') {
            return input.value.trim().toUpperCase();
        }
    }
    return null; // Si aucun input n'est rempli, retourner null
}

// Appelez cette fonction pour initialiser l'alphabet lors du chargement de la page
initializeAlphabet();

}
