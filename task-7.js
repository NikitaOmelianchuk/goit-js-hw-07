const fontSizeInputRef = document.querySelector('#font-size-control');
const spanTextRef = document.querySelector('#text');

function changeFontSize(event) {
  spanTextRef.style.fontSize = event.target.value + 'px';
}

fontSizeInputRef.addEventListener('input', changeFontSize);
