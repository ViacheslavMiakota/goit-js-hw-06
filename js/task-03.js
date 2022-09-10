const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];
// const galeryItem = images.map(({ url, alt }) => {
//   const itemEl = document.createElement('li');
//   itemEl.classList.add('wraper');
//   const imgEl = document.createElement('img');
//   imgEl.src = url;
//   imgEl.alt = alt;
//   imgEl.width = '800';
//   itemEl.append(imgEl);
//   return itemEl;
// });

// console.log(galeryItem);

// const galleryEl = document.querySelector('.gallery');
// galleryEl.append(...galeryItem);
const galleryEl = document.querySelector('.gallery');
const imagesMarkup = image => {
  const { url, alt } = image;
  return `<li class = 'gallery'><img src = '${url}'alt = '${alt}' width = “800"/> </li>`;
};
const makeImg = images.map(imagesMarkup).join('');

galleryEl.insertAdjacentHTML('beforeend', makeImg);
console.log(makeImg);
