import './style.css'
import { setupCounter } from './counter.ts'
import { initializeGame } from './game.ts';
import { setupGameMechanics } from './meca.ts';

document.addEventListener('DOMContentLoaded', () => {
    initializeGame(); // Assurez-vous que cette fonction soit asynchrone ou ait une callback
    setupGameMechanics();
});


document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
      <button id="counter" type="button"></button>
`


setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)


