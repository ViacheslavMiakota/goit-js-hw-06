function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const refs = {
  bgBody: document.querySelector('body'),
  buttonChColor: document.querySelector('.change-color'),
  spanColor: document.querySelector('.color'),
};

console.dir(refs.bgBody.style);
console.log(refs.buttonChColor);
console.log(refs.spanColor);

function newColorBg() {
  const currentColor = getRandomHexColor();
  refs.bgBody.style.backgroundColor = currentColor;
  refs.spanColor.textContent = currentColor;
}
refs.buttonChColor.addEventListener('click', newColorBg);
