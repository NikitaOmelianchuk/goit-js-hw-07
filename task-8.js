//УСЛОВИЯ ЗАДАНИЯ
// Напиши скрипт создания и очистки коллекции элементов.Пользователь вводит количество элементов в input и нажимает кнопку Создать, после чего рендерится коллекция.При нажатии на кнопку Очистить, коллекция элементов очищается.
// Создай функцию createBoxes(amount), которая принимает 1 параметр amount - число. Функция создает столько div, сколько указано в amount и добавляет их в div#boxes.
// Каждый созданный div:
// Имеет случайный rgb цвет фона
// Размеры самого первого div - 30px на 30px
// Каждый следующий div после первого, должен быть шире и выше предыдущего на 10px
// Создай функцию destroyBoxes(), которая очищает div#boxes.

// Алгоритм:
// 1. Получаем ссылки на елементы DOM дерева
const renderBtnRef = document.querySelector(
  "#controls button[data-action='render']",
);
const destroyBtnRef = document.querySelector(
  '#controls button[data-action="destroy"]',
);
const numberInputRef = document.querySelector('#controls > input');
const boxesRef = document.querySelector('#boxes');

// 2 Создаем функцию createBoxes(amount), которая при получении числа amount создает цикл,
// проходится по каждому контейнеру, на каждой из итераций записывает в строку string увеличенные значения ширины и высоты
// и случайный цвет фона и на каждой итерации через метод insertAdjacentHTML создает и добавляет новый div в div#boxes
function createBoxes(amount) {
  var basicSize = 30;
  for (let i = 1; i <= amount; i += 1) {
    var size = basicSize + i * 10;
    // const divBoxesRef = document.createElement('div');
    const string = `<div class = "inner-boxes" style = "width: ${size}px; height: ${size}px; background-color: rgba( ${random()} , ${random()} , ${random()} )"></div>`;
    boxesRef.insertAdjacentHTML('beforeend', string);
  }
}

function getInputNumber() {
  const amount = numberInputRef.value;
  return createBoxes(amount);
}

function random() {
  return Math.floor(Math.random() * 256);
}

function destroyBoxes() {
  boxes.innerHTML = '';
}

renderBtnRef.addEventListener('click', getInputNumber);
destroyBtnRef.addEventListener('click', destroyBoxes);
