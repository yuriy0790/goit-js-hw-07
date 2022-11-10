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

function createLightBox(img) {
  const instance = basicLightbox.create(`<img src="${img.dataset.source}">`, {
    onShow: instance => {
      document.addEventListener('keydown', closeImg.bind(instance));
    },
    onClose: instance => {
      document.removeEventListener('keydown', closeImg.bind(instance));
    },
  });

  instance.show();
}

const onImgClick = event => {
  event.preventDefault();
  if (event.target.nodeName !== 'IMG') {
    return;
  }
  createLightBox(event.target);
};

function closeImg(event) {
  if (event.code === 'Escape') {
    this.close();
  }
}

listEl.addEventListener('click', onImgClick);
