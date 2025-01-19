let fruitCount = 0;

function addFruit() {
  fruitCount++;
  updateDisplay();
}

function removeFruit() {
  if (fruitCount > 0) {
    fruitCount--;
    updateDisplay();
  }
}

function updateDisplay() {
  const countElement = document.getElementById('fruitCount');
  countElement.textContent = fruitCount;
}