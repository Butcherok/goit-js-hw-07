import { galleryItems } from './gallery-items.js';
// Change code below this line
const imagesContainer = document.querySelector('.gallery');
const imagesMarkup = createImageGallery(galleryItems);

imagesContainer.insertAdjacentHTML('beforeend', imagesMarkup);
imagesContainer.addEventListener('click', onImgClick);

function createImageGallery(galleryItems) {
    return galleryItems
    .map(({preview, original, description}) => {
        return `
        <div class="gallery__item">
            <a class="gallery__link" href="large-image.jpg">
                <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
                />
            </a>
        </div>
        `;
    })
    .join('');
};
function onImgClick(event) {
    event.preventDefault();
    if (!event.target.classList.contains('gallery__image')) {
        return;
    }
    const openImgOriginal = basicLightbox.create(`
		<img width="1400" height="900" src="${event.target.dataset.source}">
	`, {
        onShow: instance => {
            document.onkeydown = function (e) {
                e.preventDefault();
                if (e.code == 'Escape') {
                instance.close();
                }
            };
        }
    }).show();
};
