import renderImage from './render-image.js';
import htmlToDOM from './html-to-DOM.js';
import images from '../data/images.js';
import renderHeader from './render-header.js';

const header = document.querySelector('.header');
const list = document.querySelector('.photo-gallery');

addHeader();

images.forEach(photo => {
    const html = renderImage(photo);
    const dom = htmlToDOM(html);
    list.appendChild(dom);
});

function addHeader() {
    const html = renderHeader();
    const dom = htmlToDOM(html);
    header.appendChild(dom);
}