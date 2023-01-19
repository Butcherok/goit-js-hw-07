import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const imagesContainer = document.querySelector('.gallery');
const imagesMarkup = createImageGallery(galleryItems);

imagesContainer.insertAdjacentHTML('beforeend', imagesMarkup);

function createImageGallery(galleryItems) {
    return galleryItems
    .map(({preview, original, description}) => {
        return `
        <a class="gallery__item" href="${original}">
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

new SimpleLightbox('.gallery .gallery__item', {
    captionData: "alt",
    captionDelay: 250,
});
