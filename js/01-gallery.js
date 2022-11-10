import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const listEl = document.querySelector('.gallery');

const galleryImgMarkup = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`
  )
  .join('');
listEl.insertAdjacentHTML('beforeend', galleryImgMarkup);

function onImgClick(event) {
  event.preventDefault();
  if (event.target.nodeName !== 'IMG') {
    return;
  }
  const instance = basicLightbox.create(
    `<img src="${event.target.dataset.source}" alt="${event.target.alt}">`
  );
  instance.show();

  document.addEventListener('keydown', onEsc);
  function onEsc(event) {
    if (event.code === 'Escape') {
      document.removeEventListener('keydown', onEsc);
      instance.close();
    }
  }
}

listEl.addEventListener('click', onImgClick);
