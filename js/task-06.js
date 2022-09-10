const inputRef = document.querySelector('#validation-input');
console.log(inputRef);
const inputLength = inputRef.dataset.length;
console.log(inputLength);

inputRef.addEventListener('blur', onInputBlur);

function onInputBlur(event) {
  const isTrue = event.currentTarget.value.length === Number(inputLength);
  if (isTrue) {
    event.currentTarget.classList.add('valid');
    event.currentTarget.classList.remove('invalid');
  } else {
    event.currentTarget.classList.remove('valid');
    event.currentTarget.classList.add('invalid');
  }
}
