const validInputRef = document.querySelector('#validation-input');

function handleValidInput(event) {
  const inputTarValue = event.target.value;
  if (inputTarValue.length === Number(validInputRef.dataset.length)) {
    validInputRef.classList.add('valid');
    validInputRef.classList.remove('invalid');
  } else {
    validInputRef.classList.add('invalid');
    validInputRef.classList.remove('valid');
  }
}
validInputRef.addEventListener('blur', handleValidInput);
