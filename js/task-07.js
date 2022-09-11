const controlSize = document.querySelector('#font-size-control');
const controlText = document.querySelector('#text');
console.log(controlText);
console.log(controlSize);
controlSize.addEventListener('input', handletext);
controlText.style.fontSize = controlSize.value + 'px';
function handletext(event) {
  controlText.style.fontSize = `${event.currentTarget.value}px`;
}
console.log(controlSize);
