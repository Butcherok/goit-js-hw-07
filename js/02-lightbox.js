import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const imagesContainer = document.querySelector('.gallery');
const imagesMarkup = createImageGallery(galleryItems);

imagesContainer.insertAdjacentHTML('beforeend', imagesMarkup);
// imagesContainer.addEventListener('click', onImgClick);

function createImageGallery(galleryItems) {
    return galleryItems
    .map(({preview, original, description}) => {
        return `
        <a class="gallery__item" href="large-image.jpg">
            <img
                class="gallery__image"
                src="${preview}"
                alt="${description}"
            />
        </a>
        `;
    })
    .join('');
};

