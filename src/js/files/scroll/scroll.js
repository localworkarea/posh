// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile, getHash, menuClose, getDigFormat } from "../functions.js";
import { flsModules } from "../../files/modules.js";
// Модуль прокручування до блоку
import { gotoBlock } from "./gotoblock.js";
// Змінна контролю додавання події window scroll.
let addWindowScrollEvent = false;


// Плавна навігація по сторінці
export function pageNavigation() {
	// data-goto - вказати ID блоку
	// data-goto-header - враховувати header
	// data-goto-top - недокрутити на вказаний розмір
	// data-goto-speed - швидкість (тільки якщо використовується додатковий плагін)
	// Працюємо при натисканні на пункт
	document.addEventListener("click", pageNavigationAction);
	// Якщо підключено scrollWatcher, підсвічуємо поточний пункт меню
	document.addEventListener("watcherCallback", pageNavigationAction);
	// Основна функція
	function pageNavigationAction(e) {
		if (e.type === "click") {
			const targetElement = e.target;
			if (targetElement.closest('[data-goto]')) {
				const gotoLink = targetElement.closest('[data-goto]');
				const gotoLinkSelector = gotoLink.dataset.goto ? gotoLink.dataset.goto : '';
				const noHeader = gotoLink.hasAttribute('data-goto-header') ? true : false;
				const gotoSpeed = gotoLink.dataset.gotoSpeed ? gotoLink.dataset.gotoSpeed : 500;
				const offsetTop = gotoLink.dataset.gotoTop ? parseInt(gotoLink.dataset.gotoTop) : 0;
				if (flsModules.fullpage) {
					const fullpageSection = document.querySelector(`${gotoLinkSelector}`).closest('[data-fp-section]');
					const fullpageSectionId = fullpageSection ? +fullpageSection.dataset.fpId : null;
					if (fullpageSectionId !== null) {
						flsModules.fullpage.switchingSection(fullpageSectionId);
						document.documentElement.classList.contains("menu-open") ? menuClose() : null;
					}
				} else {
					gotoBlock(gotoLinkSelector, noHeader, gotoSpeed, offsetTop);
				}
				e.preventDefault();
			}
		} else if (e.type === "watcherCallback" && e.detail) {
			const entry = e.detail.entry;
			const targetElement = entry.target;
			// Обробка пунктів навігації, якщо вказано значення navigator, підсвічуємо поточний пункт меню
			if (targetElement.dataset.watch === 'navigator') {
				const navigatorActiveItem = document.querySelector(`[data-goto]._navigator-active`);
				let navigatorCurrentItem;
				if (targetElement.id && document.querySelector(`[data-goto="#${targetElement.id}"]`)) {
					navigatorCurrentItem = document.querySelector(`[data-goto="#${targetElement.id}"]`);
				} else if (targetElement.classList.length) {
					for (let index = 0; index < targetElement.classList.length; index++) {
						const element = targetElement.classList[index];
						if (document.querySelector(`[data-goto=".${element}"]`)) {
							navigatorCurrentItem = document.querySelector(`[data-goto=".${element}"]`);
							break;
						}
					}
				}
				if (entry.isIntersecting) {
					// Бачимо об'єкт
					// navigatorActiveItem ? navigatorActiveItem.classList.remove('_navigator-active') : null;
					navigatorCurrentItem ? navigatorCurrentItem.classList.add('_navigator-active') : null;
				} else {
					// Не бачимо об'єкт
					navigatorCurrentItem ? navigatorCurrentItem.classList.remove('_navigator-active') : null;
				}
			}
		}
	}

	// Прокручування по хешу
	if (getHash()) {
		let goToHash;
		if (document.querySelector(`#${getHash()}`)) {
			goToHash = `#${getHash()}`;
		} else if (document.querySelector(`.${getHash()}`)) {
			goToHash = `.${getHash()}`;
		}
		goToHash ? gotoBlock(goToHash, true, 500, 20) : null;
	}
}


// export function headerScroll() {
// 	let addWindowScrollEvent = true;
// 	const header = document.querySelector('header.header');
// 	const headerShow = header.hasAttribute('data-scroll-show');
// 	const headerShowTimer = header.dataset.scrollShow ? header.dataset.scrollShow : 500;
// 	const startPoint = header.dataset.scroll ? header.dataset.scroll : 1;
// 	let scrollDirection = 0;
// 	let timer;

// 	const ourServNav = document.querySelector('.our-serv__nav');

// 	const handleScroll = (scrollTop) => {
// 			clearTimeout(timer);
// 			if (scrollTop >= startPoint) {
// 					if (!header.classList.contains('_header-scroll')) {
// 							header.classList.add('_header-scroll');
// 					}

// 					if (headerShow) {
// 							if (scrollTop > scrollDirection) {
// 									if (header.classList.contains('_header-show')) {
// 											header.classList.remove('_header-show');
// 									}
// 									if (ourServNav && ourServNav.classList.contains('_header-show')) {
// 											ourServNav.classList.remove('_header-show');
// 									}
// 							} else {
// 									if (!header.classList.contains('_header-show')) {
// 											header.classList.add('_header-show');
// 									}
// 									if (ourServNav && !ourServNav.classList.contains('_header-show')) {
// 											ourServNav.classList.add('_header-show');
// 									}
// 							}
// 					}
// 			} else {
// 					if (header.classList.contains('_header-scroll')) {
// 							header.classList.remove('_header-scroll');
// 					}
// 					if (headerShow) {
// 							if (header.classList.contains('_header-show')) {
// 									header.classList.remove('_header-show');
// 							}
// 							if (ourServNav && ourServNav.classList.contains('_header-show')) {
// 									ourServNav.classList.remove('_header-show');
// 							}
// 					}
// 			}
// 			scrollDirection = scrollTop <= 0 ? 0 : scrollTop;
// 	};

// 	const sectionTwo = document.querySelector('.section-02');
// 	if (sectionTwo) {
// 			sectionTwo.addEventListener("scroll", function (e) {
// 					if (!addWindowScrollEvent) return;
// 					handleScroll(sectionTwo.scrollTop);
// 			});
// 	} else {
// 			window.addEventListener("scroll", function (e) {
// 					if (!addWindowScrollEvent) return;
// 					handleScroll(window.scrollY);
// 			});
// 	}
// }


export function headerScroll() {
	let addWindowScrollEvent = true;
	const header = document.querySelector('header.header');
	const headerShow = header.hasAttribute('data-scroll-show');
	const headerShowTimer = header.dataset.scrollShow ? header.dataset.scrollShow : 500;
	const startPoint = header.dataset.scroll ? header.dataset.scroll : 1;
	let scrollDirection = 0;
	let timer;

	const ourServNav = document.querySelector('.our-serv__nav');

	const handleScroll = (scrollTop, isPopupContent) => {
		clearTimeout(timer);

		if (scrollTop >= startPoint || isPopupContent) {
			if (!header.classList.contains('_header-scroll')) {
				header.classList.add('_header-scroll');
			}

			if (headerShow) {
				if (scrollTop > scrollDirection) {
					if (header.classList.contains('_header-show')) {
						header.classList.remove('_header-show');
					}
					if (ourServNav && ourServNav.classList.contains('_header-show')) {
						ourServNav.classList.remove('_header-show');
					}
				} else {
					if (!header.classList.contains('_header-show')) {
						header.classList.add('_header-show');
					}
					if (ourServNav && !ourServNav.classList.contains('_header-show')) {
						ourServNav.classList.add('_header-show');
					}
				}
			}
		} else {
			if (header.classList.contains('_header-scroll') && !isPopupContent) {
				header.classList.remove('_header-scroll');
			}
			if (headerShow) {
				if (header.classList.contains('_header-show')) {
					header.classList.remove('_header-show');
				}
				if (ourServNav && ourServNav.classList.contains('_header-show')) {
					ourServNav.classList.remove('_header-show');
				}
			}
		}
		scrollDirection = scrollTop <= 0 ? 0 : scrollTop;
	};

	const sectionTwo = document.querySelector('.section-02');
	const popupContent = document.querySelector('.popup-case__content');

	const scrollListener = () => {
		const isPopupContent = document.documentElement.classList.contains('popup-show') && popupContent;
		const scrollTop = isPopupContent ? popupContent.scrollTop : window.scrollY;
		handleScroll(scrollTop, isPopupContent);
	};

	if (sectionTwo) {
		sectionTwo.addEventListener("scroll", function (e) {
			if (!addWindowScrollEvent) return;
			scrollListener();
		});
	} else {
		window.addEventListener("scroll", function (e) {
			if (!addWindowScrollEvent) return;
			scrollListener();
		});
	}

	if (popupContent) {
		popupContent.addEventListener("scroll", function (e) {
			if (!addWindowScrollEvent) return;
			if (document.documentElement.classList.contains('popup-show')) {
				scrollListener();
			}
		});
	}
}






// Модуль анімація цифрового лічильника
export function digitsCounter() {
	// Функція ініціалізації
	function digitsCountersInit(digitsCountersItems) {
		let digitsCounters = digitsCountersItems ? digitsCountersItems : document.querySelectorAll("[data-digits-counter]");
		if (digitsCounters.length) {
			digitsCounters.forEach(digitsCounter => {
				// Обнулення
				digitsCounter.dataset.digitsCounter = digitsCounter.innerHTML;
				digitsCounter.innerHTML = `0`;
				// Анімація
				digitsCountersAnimate(digitsCounter);
			});
		}
	}
	// Функція анімації
	function digitsCountersAnimate(digitsCounter) {
		let startTimestamp = null;
		const duration = parseFloat(digitsCounter.dataset.digitsCounterSpeed) ? parseFloat(digitsCounter.dataset.digitsCounterSpeed) : 1000;
		const startValue = parseFloat(digitsCounter.dataset.digitsCounter);
		const format = digitsCounter.dataset.digitsCounterFormat ? digitsCounter.dataset.digitsCounterFormat : ' ';
		const startPosition = 0;
		const step = (timestamp) => {
			if (!startTimestamp) startTimestamp = timestamp;
			const progress = Math.min((timestamp - startTimestamp) / duration, 1);
			const value = Math.floor(progress * (startPosition + startValue));
			digitsCounter.innerHTML = typeof digitsCounter.dataset.digitsCounterFormat !== 'undefined' ? getDigFormat(value, format) : value;
			if (progress < 1) {
				window.requestAnimationFrame(step);
			}
		};
		window.requestAnimationFrame(step);
	}
	function digitsCounterAction(e) {
		const entry = e.detail.entry;
		const targetElement = entry.target;
		if (targetElement.querySelectorAll("[data-digits-counter]").length) {
			digitsCountersInit(targetElement.querySelectorAll("[data-digits-counter]"));
		}
	}

	document.addEventListener("watcherCallback", digitsCounterAction);
}
// При підключенні модуля обробник події запуститься автоматично
setTimeout(() => {
	if (addWindowScrollEvent) {
		let windowScroll = new Event("windowScroll");
		window.addEventListener("scroll", function (e) {
			document.dispatchEvent(windowScroll);
		});
	}
}, 0);

