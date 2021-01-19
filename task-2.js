const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingrRef = document.querySelector('#ingredients');

// Решение №1 (основное)
// =========================================

const listItems = ingredients.map(item => {
  const itemRef = document.createElement('li');
  itemRef.textContent = item;
  return itemRef;
});
ingrRef.append(...listItems);
console.log(ingrRef);

// ================================
// Решение №2 (через чоздание отедльной функции (много кода))
// Функция создание элемента списка
// function createEl(ingredient) {
//   const itemRef = document.createElement('li');
//   itemRef.textContent = ingredient;
//   return itemRef;
// }

// // Перебирающий метод массива map: проходит по массиву и возвращает массив с элементами li
// const listItems = ingredients.map(item => createEl(item));

// // Добавление ингредиентов в список распылением массива
// ingrRef.append(...listItems);
// console.log(ingrRef);

// ============================
// Решение №3 (затратное для браузера (много операций добавления элементов li в список ul))
// const listItems = ingredients.map(item => {
//   const itemRef = document.createElement('li');
//   itemRef.textContent = item;
//   ingrRef.appendChild(itemRef);
//   return itemRef;
// });
