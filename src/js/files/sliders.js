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
	if (document.querySelector('.slider-insights')) {
		// Получаем элемент .slider-insights__wrapper
    var sliderInsightsWrapper = document.querySelector('.slider-insights__wrapper');
		var slider = new Swiper('.slider-insights', { 
			modules: [Autoplay, FreeMode],
			observer: true,
			observeParents: true,
			slidesPerView: "auto",
			speed: 2500,
			centeredSlides: false,
			longSwipes: true,
			simulateTouch: true,
			grabCursor: true,
			autoplay: {
				delay: -1,
				// disableOnInteraction: false,
				pauseOnMouseEnter: true,
				// waitForTransition: false,
			},
			freeMode: {
				enabled: true,
				momentumBounce: false,
				// sticky: true,
				// momentumRatio: 0.3,
			},
			nested: true,
			loop: true,
			loopAddBlankSlides: true,
			loopAdditionalSlides: 5,
			// loopPreventsSliding: true,
			breakpoints: {
				300: {
					spaceBetween: 24,
				},
				1200: {
					spaceBetween: 30,
				},
				1500: {
					spaceBetween: 40,
				},
			},
			on: {
				touchStart: function() {
					this.autoplay.stop();
				},
				touchEnd: function() {
						this.autoplay.start();
				},
			// 	mouseover: function() {
			// 		// Остановка анимации при наведении курсора
			// 		sliderInsightsWrapper.style.animationPlayState = "paused";
			// 		sliderInsightsWrapper.classList.add('paused-animation');
			// },
			// 	mouseout: function() {
			// 			// Возобновление анимации при уходе курсора
			// 			sliderInsightsWrapper.style.animationPlayState = "running";
			// 			sliderInsightsWrapper.classList.remove('paused-animation');
			// 	}
			}
		});
		// sliderInsightsWrapper.addEventListener('mouseover', function() {
		// 	slider.autoplay.stop();
		// 	// sliderInsightsWrapper.classList.add('paused-animation');
		// 	// sliderInsightsWrapper.style.animationPlayState = "paused";
		// 	// sliderInsightsWrapper.style.transitionTimingFunction = "unset";
		// 	// sliderInsightsWrapper.style.transition = "none";

		// });

		// sliderInsightsWrapper.addEventListener('mouseout', function() {
		// 		slider.autoplay.start();
		// 		// sliderInsightsWrapper.classList.remove('paused-animation');
		// 		// sliderInsightsWrapper.style.animationPlayState = "running";
		// 		// sliderInsightsWrapper.style.transitionTimingFunction = "linear";
		// 		sliderInsightsWrapper.style.transition = "";
		// 		sliderInsightsWrapper.style.transitionDuration = "2500ms";
		// });
	}
	if (document.querySelector('.slider-about-a')) {
		new Swiper('.slider-about-a', { 
			modules: [Autoplay, FreeMode],
			observer: true,
			observeParents: true,
			slidesPerView: "auto",
			speed: 5000,
			centeredSlides: false,
			longSwipes: true,
			simulateTouch: true,
			grabCursor: true,
			autoplay: {
				delay: -1,
			},
			freeMode: {
				enabled: true,
				momentumBounce: false,
			},
			nested: true,
			loop: true,
			loopAddBlankSlides: true,
			breakpoints: {
				300: {
					spaceBetween: 17,
				},
				768: {
					spaceBetween: 19,
				}
			},
			on: {
				touchStart: function() {
					this.autoplay.stop();
				},
				touchEnd: function() {
						this.autoplay.start();
				},
			}
		});
	}
	if (document.querySelector('.slider-about-b')) {
		new Swiper('.slider-about-b', { 
			modules: [Autoplay, FreeMode],
			observer: true,
			observeParents: true,
			slidesPerView: "auto",
			speed: 5000,
			centeredSlides: false,
			longSwipes: true,
			simulateTouch: true,
			grabCursor: true,
			autoplay: {
				delay: -1,
			},
			freeMode: {
				enabled: true,
				momentumBounce: false,
			},
			nested: true,
			loop: true,
			loopAddBlankSlides: true,
			// breakpoints: {
			// 	300: {
			// 		spaceBetween: 13,
			// 	},
			// 	768: {
			// 		spaceBetween: 20,
			// 	}
			// },
			on: {
				touchStart: function() {
					this.autoplay.stop();
				},
				touchEnd: function() {
						this.autoplay.start();
				},
			}
		});
	}
	if (document.querySelector('.slider-about-c')) {
		new Swiper('.slider-about-c', { 
			modules: [Autoplay, FreeMode],
			observer: true,
			observeParents: true,
			slidesPerView: "auto",
			speed: 4500,
			centeredSlides: false,
			longSwipes: true,
			simulateTouch: true,
			grabCursor: true,
			autoplay: {
				delay: -1,
			},
			freeMode: {
				enabled: true,
				momentumBounce: false,
			},
			nested: true,
			loop: true,
			loopAddBlankSlides: true,
			breakpoints: {
				300: {
					spaceBetween: 23,
				},
				768: {
					spaceBetween: 30,
				}
			},
			on: {
				touchStart: function() {
					this.autoplay.stop();
				},
				touchEnd: function() {
						this.autoplay.start();
				},
			}
		});
	}
	if (document.querySelector('.slider-about-d')) {
		new Swiper('.slider-about-d', { 
			modules: [Autoplay, FreeMode],
			observer: true,
			observeParents: true,
			slidesPerView: "auto",
			speed: 4500,
			centeredSlides: false,
			longSwipes: true,
			simulateTouch: true,
			grabCursor: true,
			autoplay: {
				delay: -1,
			},
			freeMode: {
				enabled: true,
				momentumBounce: false,
			},
			nested: true,
			loop: true,
			loopAddBlankSlides: true,
			breakpoints: {
				300: {
					spaceBetween: 23,
				},
				768: {
					spaceBetween: 30,
				}
			},
			on: {
				touchStart: function() {
					this.autoplay.stop();
				},
				touchEnd: function() {
						this.autoplay.start();
				},
			}
		});
	}
}





window.addEventListener("load", function (e) {
// 	let mySwipers = {};

// function initSlider(selector, options) {
// 	if (!mySwipers[selector]) {
// 		mySwipers[selector] = new Swiper(selector, options);
// 	}
// }

// const touchScreenChecker = function () {
// 	if (isMobile.any()) {
// 		enableSwipers();
// 	} else {
// 		for (const selector in mySwipers) {
// 			if (mySwipers[selector] !== undefined) {
// 				mySwipers[selector].destroy(true, true);
// 				mySwipers[selector] = undefined;
// 			}
// 		}
// 	}
// };

// const enableSwipers = function () {
// 	if (document.querySelector('.slider-insights')) {
// 		initSlider('.slider-insights', {
// 			modules: [Autoplay, FreeMode],
// 			observer: true,
// 			observeParents: true,
// 			slidesPerView: "auto",
// 			speed: 2500,
// 			centeredSlides: false,
// 			longSwipes: true,
// 			autoplay: {
// 				delay: -1,
// 				disableOnInteraction: false,
// 				pauseOnMouseEnter: true,
// 			},
// 			freeMode: {
// 				enabled: true,
// 				momentumBounce: false,
// 				// sticky: true,
// 				// momentumRatio: 0.3,
// 			},
// 			nested: true,
// 			loop: true,
// 			loopAddBlankSlides: true,
// 			loopAdditionalSlides: 5,
// 			breakpoints: {
// 				300: {
// 					spaceBetween: 24,
// 				},
// 				1500: {
// 					spaceBetween: 40,
// 				},
// 			},
// 			on: {
// 				touchStart: function() {
// 					this.autoplay.stop();
// 				},
// 				touchEnd: function() {
// 						this.autoplay.start();
// 				}
// 			}
// 		});
// 	}
// };

// touchScreenChecker();



	initSliders();
	
});





