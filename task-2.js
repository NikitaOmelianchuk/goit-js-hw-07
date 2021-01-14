const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
// const ingrRef = document.querySelector('#ingredients');
// const createList = array => {
//   const ingredient = array.forEach(item => `${item}`);
//   const itemRef = document.createElement('li');
//   itemRef.textContent = ingredient;
//   ingrRef.appendChild(itemRef);
//   return ingrRef;
// }
// console.log(createList(ingredients));

const ingrRef = document.querySelector('#ingredients');
const itemRef = document.createElement('li');
ingredients.map(item => {
  const itemRef = document.createElement('li');
  itemRef.textContent = item;
  ingrRef.appendChild(itemRef);
  return ingrRef;
});
console.log(ingrRef);
