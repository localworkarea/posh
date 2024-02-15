// Підключення функціоналу "Чертоги Фрілансера"
import {isMobile} from "./functions.js";

/*
Документація по роботі у шаблоні: 
Документація слайдера: https://swiperjs.com/
Сніппет(HTML): swiper
*/

// Підключаємо слайдер Swiper з node_modules
// При необхідності підключаємо додаткові модулі слайдера, вказуючи їх у {} через кому
// Приклад: { Navigation, Autoplay }
import Swiper from 'swiper';
import { FreeMode, Autoplay } from 'swiper/modules';
/*
Основні модулі слайдера:
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation
Детальніше дивись https://swiperjs.com/
*/

// Стилі Swiper
// Базові стилі
import "../../scss/base/swiper.scss";
// Повний набір стилів з scss/libs/swiper.scss
// import "../../scss/libs/swiper.scss";
// Повний набір стилів з node_modules
// import 'swiper/css';

// Ініціалізація слайдерів
function initSliders() {
	if (document.querySelector('.slider-main')) {
		new Swiper('.slider-main', { 
			modules: [FreeMode],
			observer: true,
			observeParents: true,
			slidesPerView: "auto",
			speed: 800,
			grabCursor: true,
			freeMode: {
				enabled: true,
				momentumBounce: false,
			},
			nested: true,
			// navigation: {
			// 	prevEl: '.slider-main .swiper-button-prev',
			// 	nextEl: '.slider-main .swiper-button-next',
			// },
			breakpoints: {
				300: {
					spaceBetween: 16,
				},
				480: {
					spaceBetween: 24,
				},
				769: {
					spaceBetween: 26,
				},
				1367: {
					spaceBetween: 32,
				},
			},
			on: {

			}
		});
		
	}
}





window.addEventListener("load", function (e) {
	let mySwipers = {};

function initSlider(selector, options) {
	if (!mySwipers[selector]) {
		mySwipers[selector] = new Swiper(selector, options);
	}
}

const touchScreenChecker = function () {
	if (isMobile.any()) {
		enableSwipers();
	} else {
		for (const selector in mySwipers) {
			if (mySwipers[selector] !== undefined) {
				mySwipers[selector].destroy(true, true);
				mySwipers[selector] = undefined;
			}
		}
	}
};

const enableSwipers = function () {
	if (document.querySelector('.slider-insights')) {
		initSlider('.slider-insights', {
			modules: [Autoplay, FreeMode],
			observer: true,
			observeParents: true,
			slidesPerView: "auto",
			speed: 1500,
			autoplay: {
				delay: 500,
				// disableOnInteraction: false,
				// pauseOnMouseEnter: true,
			},
			// freeMode: {
			// 	enabled: true,
			// 	momentumBounce: false,
			// 	momentumRatio: 0.3,
			// },
			nested: true,
			loop: true,
			breakpoints: {
				300: {
					spaceBetween: 24,
				},
				1500: {
					spaceBetween: 40,
				},
			},
			on: {
				// Добавьте обработчики событий, если необходимо
			}
		});
	}
};

touchScreenChecker();



	initSliders();
	
});





