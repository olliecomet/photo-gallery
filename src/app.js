import renderImage from './render-image.js';
import htmlToDOM from './html-to-DOM.js';
import images from '../data/images.js';

const list = document.querySelector('.photo-gallery');

images.forEach(photo => {
    const html = renderImage(photo);
    const dom = htmlToDOM(html);
    list.appendChild(dom);
});
