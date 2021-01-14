const listRef = document.querySelector('#categories');
const itemsRef = listRef.children;
console.log(`В списке ${itemsRef.length} категории`);
const itemsChildEl = document.querySelectorAll('.item');
itemsChildEl.forEach(item =>
  console.log(
    `Категория: ${item.querySelector('h2').textContent}
     количество: ${item.querySelectorAll('li').length}`,
  ),
);
