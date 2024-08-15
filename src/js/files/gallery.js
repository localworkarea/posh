
/*
Документація по роботі у шаблоні: https://www.lightgalleryjs.com/docs/
Документація плагіна: https://www.lightgalleryjs.com/docs/
Сніппет(HTML):
*/

// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile, FLS } from "./functions.js";
// Підключення списку активних модулів
import { flsModules } from "./modules.js";

// Підключення базового набору функціоналу
import lightGallery from 'lightgallery';

// Плагіни
// lgZoom, lgAutoplay, lgComment, lgFullscreen, lgHash, lgPager, lgRotate, lgShare, lgThumbnail, lgVideo, lgMediumZoom
// import lgThumbnail from 'lightgallery/plugins/thumbnail/lg-thumbnail.min.js'
import lgZoom from 'lightgallery/plugins/zoom/lg-zoom.min.js'
// import lgMediumZoom from 'lightgallery/plugins/mediumZoom/lg-medium-zoom.min.js'

// Базові стилі
import '@scss/libs/gallery/lightgallery.scss';
// Стилі доповнень
// import '@scss/libs/gallery/lg-thumbnail.scss';
// import '@scss/libs/gallery/lg-video.scss';
// import '@scss/libs/gallery/lg-autoplay.scss';
// import '@scss/libs/gallery/lg-zoom.scss';
// import '@scss/libs/gallery/lg-pager.scss';
// import '@scss/libs/gallery/lg-fullscreen.scss';
// import '@scss/libs/gallery/lg-share.scss';
// import '@scss/libs/gallery/lg-comments.scss';s
// import '@scss/libs/gallery/lg-rotate.scss';
// import '@scss/libs/gallery/lg-medium-zoom.scss';
// import '@scss/libs/gallery/lg-relative-caption.scss';

// Усі стилі
// import '@scss/libs/gallery/lightgallery-bundle.scss';

// Запуск
function initializeGalleries() {
    const galleries = document.querySelectorAll('[data-gallery]');
    if (galleries.length) {
        let galleyItems = [];
        galleries.forEach(gallery => {
            galleyItems.push({
                gallery,
                galleryClass: lightGallery(gallery, {
                    plugins: [lgZoom],
                    selector: '.case-page__gl-img',
                    licenseKey: '7EC452A9-0CFD441C-BD984C7C-17C8456E',
                    mobileSettings: {
                        speed: 500,
    
                        closeOnTap: true,
                        counter: false,
                        easing: "ease",
                        hideScrollbar: false,
                        resetScrollPosition: true,
    
                        // zoomFromOrigin: false,
                        // startClass: 	"lg-start-zoom",
    
                        // trapFocus: true,
    
    
                        controls: true, 
                        showCloseIcon: true,
    
                        actualSize: true,
                        zoom: true,
    
                    
                    },
                })
            })
        });
        // Додаємо в об'єкт модулів
        flsModules.gallery = galleyItems;
    }
}


function destroyGalleries() {
    if (flsModules.gallery) {
        flsModules.gallery.forEach(item => {
            item.galleryClass.destroy();
        });
        flsModules.gallery = null;
    }
}

function checkScreenWidth() {
    if (window.innerWidth < 480) {
        if (!flsModules.gallery) {
            initializeGalleries();
        }
    } else {
        if (flsModules.gallery) {
            destroyGalleries();
        }
    }
}

// Initial check
checkScreenWidth();

// Handle screen resizing
window.addEventListener('resize', checkScreenWidth);
