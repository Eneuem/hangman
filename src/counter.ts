export function setupCounter(element: HTMLButtonElement) {
  let counter = Number(localStorage.getItem('counter')) || 0;

  counter += 1;

  const updateDisplay = () => {
    element.innerHTML = `Visiteurs : ${counter}`;
  }

  localStorage.setItem('counter', counter.toString());

  updateDisplay();
}
