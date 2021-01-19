const listRef = document.querySelector('#categories');
console.log(`В списке ${listRef.children.length} категории`);
const itemsChildEl = listRef.querySelectorAll('.item');
itemsChildEl.forEach(item =>
  console.log(
    `Категория: ${item.querySelector('h2').textContent}
     количество: ${item.querySelectorAll('li').length}`,
  ),
);
