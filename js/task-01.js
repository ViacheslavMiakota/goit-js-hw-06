const itemsRef = document.querySelectorAll('.item');
console.log(`Number of categories:${itemsRef.length}`);
itemsRef.forEach(item => {
  const nameCategory = item.querySelector('h2');
  const quantityItems = item.querySelectorAll('li');
  console.log(`Category : ${nameCategory.textContent}`);
  console.log(`Element : ${quantityItems.length}`);
});
