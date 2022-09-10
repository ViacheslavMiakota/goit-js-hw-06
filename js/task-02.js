const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const items = ingredients.map(ingredient => {
  const itemEl = document.createElement('li');
  itemEl.classList.add('item');
  itemEl.textContent = `${ingredient}`;
  return itemEl;
});

const ingredientsEl = document.querySelector('#ingredients');
ingredientsEl.append(...items);
console.log(items);
