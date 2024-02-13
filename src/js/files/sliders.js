/*
Документація по роботі у шаблоні: 
Документація слайдера: https://swiperjs.com/
Сніппет(HTML): swiper
*/

// Підключаємо слайдер Swiper з node_modules
// При необхідності підключаємо додаткові модулі слайдера, вказуючи їх у {} через кому
// Приклад: { Navigation, Autoplay }
import Swiper from 'swiper';
import { FreeMode } from 'swiper/modules';
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
				// momentum: true,
				momentumBounce: false,
			},
			// autoplay: {
			// 	delay: -10,
			// 	disableOnInteraction: false,
			// 	// waitForTransition: false, // Новая настройка для непрерывного автоплея
			// },
		
			nested: true,
			// loop: true,
			//preloadImages: false,
			//lazy: true,

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
					spaceBetween: 32,
				},
				// 992: {
				// 	slidesPerView: 3,
				// 	spaceBetween: 20,
				// },
				// 1268: {
				// 	slidesPerView: 4,
				// 	spaceBetween: 30,
				// },
			},
			// Події
			on: {

			}
		});
		
	}
	// if (document.querySelector('.slider-insights')) {
	// 	new Swiper('.slider-insights', { 
	// 		modules: [Autoplay, FreeMode],
	// 		// observer: true,
	// 		// observeParents: true,
	// 		slidesPerView: "auto",
	// 		speed: 2500,
	// 		grabCursor: true,
	// 		spaceBetween: 32,

	// 		autoplay: {
	// 			delay: 500,
	// 			disableOnInteraction: false,
	// 			pauseOnMouseEnter: true,
	// 			// waitForTransition: false, // Новая настройка для непрерывного автоплея
	// 		},
	// 		freeMode: {
	// 			enabled: true,
	// 			// momentum: true,
	// 			momentumBounce: false,
	// 		},
	// 		// slideActiveClass: false,
	// 		// slidePrevClass: false,
	// 		// slideNextClass: false,
		
	// 		nested: true,
	// 		loop: true,
	// 		//preloadImages: false,
	// 		//lazy: true,

	// 		// Події
	// 		on: {

	// 		}
	// 	});
	// }


	// if (document.querySelector('.swiper')) {
	// 	new Swiper('.swiper', { 
	// 		modules: [Navigation],
	// 		observer: true,
	// 		observeParents: true,
	// 		slidesPerView: 1,
	// 		spaceBetween: 0,
	// 		//autoHeight: true,
	// 		speed: 800,

	// 		//touchRatio: 0,
	// 		//simulateTouch: false,
	// 		//loop: true,
	// 		//preloadImages: false,
	// 		//lazy: true,

	// 		/*
	// 		effect: 'fade',
	// 		autoplay: {
	// 			delay: 3000,
	// 			disableOnInteraction: false,
	// 		},
	// 		*/

	// 		/*
	// 		pagination: {
	// 			el: '.swiper-pagination',
	// 			clickable: true,
	// 		},
	// 		*/

	// 		/*
	// 		scrollbar: {
	// 			el: '.swiper-scrollbar',
	// 			draggable: true,
	// 		},
	// 		*/

	// 		navigation: {
	// 			prevEl: '.swiper-button-prev',
	// 			nextEl: '.swiper-button-next',
	// 		},
	// 		/*
	// 		breakpoints: {
	// 			640: {
	// 				slidesPerView: 1,
	// 				spaceBetween: 0,
	// 				autoHeight: true,
	// 			},
	// 			768: {
	// 				slidesPerView: 2,
	// 				spaceBetween: 20,
	// 			},
	// 			992: {
	// 				slidesPerView: 3,
	// 				spaceBetween: 20,
	// 			},
	// 			1268: {
	// 				slidesPerView: 4,
	// 				spaceBetween: 30,
	// 			},
	// 		},
	// 		*/
	// 		// Події
	// 		on: {

	// 		}
	// 	});
	// }
}

window.addEventListener("load", function (e) {
	// Запуск ініціалізації слайдерів
	initSliders();
	// Запуск ініціалізації скролла на базі слайдера (за класом swiper_scroll)
	//initSlidersScroll();
});