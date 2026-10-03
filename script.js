function showCalculationTest() {
  const output = document.getElementById('results-output');

  output.textContent = 'это работает';
}

const startButton = document.getElementById('main-button');

if (startButton) {
  startButton.addEventListener('click', showCalculationTest);
}