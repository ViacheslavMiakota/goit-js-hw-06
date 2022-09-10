const decrementBtnRef = document.querySelector(
  'button[data-action="decrement"]'
);
const incrementBtnRef = document.querySelector(
  'button[data-action="increment"]'
);
const counterValue = document.querySelector('#value');
let counter = 0;
const countDecrement = () => {
  console.log('click');
  counter -= 1;
  counterValue.textContent = counter;
};
const countIncrement = () => {
  console.log('click');
  counter += 1;
  counterValue.textContent = counter;
};
decrementBtnRef.addEventListener('click', countDecrement);
console.log(decrementBtnRef);
incrementBtnRef.addEventListener('click', countIncrement);
console.log(decrementBtnRef);
