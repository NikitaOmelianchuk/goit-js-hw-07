const inputRef = document.querySelector('#name-input');
const nameOutputRef = document.querySelector('#name-output');

function handleInput(event) {
  nameOutputRef.textContent = event.target.value;

  if (event.target.value === '') {
    nameOutputRef.textContent = 'незнакомец';
  }
}

inputRef.addEventListener('input', handleInput);
