const yourName = document.getElementById('Yname');

const partnerName = document.getElementById('Tname');

const button = document.getElementById('sub');

const result = document.getElementById('result');

const score = document.getElementById('score');

const couple = document.getElementById('couple');

const message = document.getElementById('message');

const resetBtn = document.getElementById('reset');

function calculateLove() {
  const first = yourName.value.trim();

  const second = partnerName.value.trim();

  resetBtn.classList.remove('hidden');

  if (!first || !second) {
    alert('Please enter both names ❤️');

    return;
  }

  const loveScore = Math.floor(Math.random() * 100) + 1;

  let loveMessage = '';

  if (loveScore <= 30) {
    loveMessage =
      "There's potential here. Spend more time together and see where things go ❤️";
  } else if (loveScore <= 70) {
    loveMessage =
      'You have a great connection. The chemistry is definitely there 💕';
  } else if (loveScore <= 90) {
    loveMessage =
      'Strong compatibility! You two seem to complement each other beautifully 💖';
  } else {
    loveMessage = 'Soulmate level detected! This is a match made in heaven 💘';
  }

  score.textContent = `${loveScore}%`;

  couple.textContent = `${first} ❤️ ${second}`;

  message.textContent = loveMessage;

  result.classList.remove('hidden');

  result.classList.add('show');
}

button.addEventListener('click', calculateLove);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Enter') {
    calculateLove();
  }
});
function resetCalculator() {
  yourName.value = '';
  partnerName.value = '';

  score.textContent = '0%';

  couple.textContent = '';

  message.textContent = '';

  result.classList.add('hidden');

  resetBtn.classList.add('hidden');

  yourName.focus();
}
resetBtn.addEventListener('click', resetCalculator);
