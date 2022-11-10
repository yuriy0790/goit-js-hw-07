import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const listEl = document.querySelector('.gallery');

const galleryImgMarkup = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`
  )
  .join('');
listEl.insertAdjacentHTML('beforeend', galleryImgMarkup);

let lightbox = new SimpleLightbox('ul.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
