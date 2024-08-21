let secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;
let maxAttempts = 10;

function checkGuess() {
    const guess = Number(document.getElementById('guess').value);
    const result = document.getElementById('result');
    attempts++;

    if (guess === secretNumber) {
        result.textContent = `Parabéns! Você acertou o número em ${attempts} tentativas!`;
        result.style.color = 'green';
    } else if (guess > secretNumber) {
        result.textContent = 'Tente um número menor!';
        result.style.color = 'red';
    } else {
        result.textContent = 'Tente um número maior!';
        result.style.color = 'red';
    }

    if (attempts >= maxAttempts && guess !== secretNumber) {
        result.textContent = `Você perdeu! O número era ${secretNumber}.`;
        result.style.color = 'red';
    }

    document.getElementById('attempts').textContent = `Tentativas restantes: ${maxAttempts - attempts}`;
}

function restartGame() {
    secretNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    document.getElementById('result').textContent = '';
    document.getElementById('attempts').textContent = '';
    document.getElementById('guess').value = '';
}
