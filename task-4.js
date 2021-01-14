const decrBtnRef = document.querySelector(
  '#counter button[data-action="decrement"]',
);
const incrBtnRef = document.querySelector(
  '#counter button[data-action="increment"]',
);
const valueRef = document.querySelector('#value');
let counterValue = 0;

function decrement() {
  counterValue -= 1;
  valueRef.textContent = counterValue;
}

function increment() {
  counterValue += 1;
  valueRef.textContent = counterValue;
}

decrBtnRef.addEventListener('click', decrement);
incrBtnRef.addEventListener('click', increment);
