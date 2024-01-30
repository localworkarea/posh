// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from "./functions.js";
// Підключення списку активних модулів
import { flsModules } from "./modules.js";

// import Typed from 'typed.js';

document.addEventListener("DOMContentLoaded", function() {

    // ОТЛОЖЕННАЯ ЗАГРУЗКА ВИДЕО ========================================================
        window.addEventListener("load", function() {
            var video = document.getElementById("heroVideo");
            if (video) {
                var source = video.querySelector("source");
                // Проверка локального хранилища на наличие ключа
                var videoLoaded = localStorage.getItem("videoLoaded");
                video.addEventListener("canplay", function() {
                    video.play();
                });
                // Если видео не было загружено ранее, устанавливаем таймер на 2 секунды
                if (!videoLoaded) {
                    setTimeout(function() {
                        video.load();
                        source.src = source.getAttribute("data-src");
                        video.load();
                        // Сохраняем информацию о загрузке видео в локальное хранилище
                        localStorage.setItem("videoLoaded", "true");
                    }, 1800);
                } else {
                    // Если видео уже было загружено, начинаем его воспроизведение сразу
                    video.load();
                    source.src = source.getAttribute("data-src");
                    video.load();
                }
            }
        });
    // -------------------------------------------------------------------------------------


    // ОСТАНОВИТЬ/ВОСПРОИЗВЕСТИ ГЛАВНОЕ ВИДЕО ПО КЛИКУ ===========================================
        var video = document.getElementById('heroVideo');
        var playPauseButton = document.querySelector('.hero__control');

        if (playPauseButton) {
            playPauseButton.addEventListener('click', function () {
                if (video.paused) {
                    video.play();
                    playPauseButton.classList.remove('paused');
                } else {
                    video.pause();
                    playPauseButton.classList.add('paused');
                }
            });
        }
    // -------------------------------------------------------------------------------------


    // КЛОНИРОВАНИЕ КНОПОК .btn-mask ==============================================================
        // Находим все элементы с классом btn-mask
        var btnMaskElements = document.querySelectorAll('.btn-mask');
        // Проверяем, что есть хотя бы один элемент с классом btn-mask
        if (btnMaskElements.length > 0) {
            // Проходимся по каждому элементу
            btnMaskElements.forEach(function(btnMaskElement) {
                // Создаем клон внутреннего элемента btn-mask__body
                var clone = btnMaskElement.querySelector('.btn-mask__body').cloneNode(true);
                // Добавляем класс btn-mask-clone к клону
                clone.classList.add('btn-mask-clone');
                // Добавляем клон под оригинальным элементом
                btnMaskElement.appendChild(clone);
            });
        }
    // -------------------------------------------------------------------------------------

    // TYPED.JS ==============================================================
        var typedElement = document.getElementById('typed');
        if (typedElement) {
          var options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.5 // Порог видимости элемента во вьюпорте
          };
      
          var observer = new IntersectionObserver(handleIntersection, options);
      
          // Начинаем наблюдение за элементом
          observer.observe(typedElement);
      
          // Создаем Typed при загрузке страницы
          var typed = new Typed('#typed', {
            stringsElement: '#typed-strings',
            typeSpeed: 50,
            backSpeed: 20,
            loop: true,
            // loopCount: 3,
            smartBackspace: true,
            // showCursor: false, // Можно скрыть курсор при загрузке
            onComplete: function () {
              // Помечаем, что Typed завершил свой цикл
              typedElement.setAttribute('data-typed-started', 'completed');
            }
          });
          }
    
        function handleIntersection(entries, observer) {
          entries.forEach(function(entry) {
            // Если элемент виден во вьюпорте и Typed еще не начал свою анимацию
            if (entry.isIntersecting && typedElement.getAttribute('data-typed-started') !== 'completed') {
              typed.start();
              // Помечаем, что Typed начал свою анимацию
              typedElement.setAttribute('data-typed-started', 'true');
            } else if (!entry.isIntersecting && typed) {
              // Если элемент не виден во вьюпорте и Typed был запущен, останавливаем его
              typed.stop();
            }
          });
        }
    // -------------------------------------------------------------------------------------

    // // Находим кнопку и секцию about-main
    // var moveToButton = document.querySelector('.move-to');
    // var aboutMain = document.querySelector('.about-main');
    // var heroSection = document.querySelector('.hero');

    // // Переменные для отслеживания состояния
    // var scrollingEnabled = true;
    // var touchStartY = 0;
    // var touchMoveThreshold = 10; // Минимальное расстояние для срабатывания события касания

    // // Добавляем слушатель события click на кнопку
    // moveToButton.addEventListener('click', function() {
    //     // Используем метод scrollIntoView для прокрутки элемента в верхнюю часть браузера без анимации
    //     aboutMain.scrollIntoView({ behavior: 'auto', block: 'start' });
    // });

    // // Добавляем слушатель события wheel (скролл мышью) на секцию hero
    // heroSection.addEventListener('wheel', function(event) {
    //     // Если первый экран находится в верхней точке окна браузера и происходит прокрутка вниз
    //     if (window.scrollY === 0 && event.deltaY > 0 && scrollingEnabled) {
    //         // Отключаем стандартное поведение прокрутки, чтобы контролировать скролл
    //         event.preventDefault();

    //         // Прокручиваем вниз на высоту окна браузера без анимации
    //         window.scrollBy(0, window.innerHeight);

    //         // Отключаем скроллинг и устанавливаем таймер задержки
    //         scrollingEnabled = false;
    //         setTimeout(function() {
    //             scrollingEnabled = true;
    //         }, 1000);
    //     }
    // });

    // // Добавляем слушатель события touchstart (начало касания) на секцию hero для мобильных устройств
    // heroSection.addEventListener('touchstart', function(startEvent) {
    //     // Запоминаем начальное положение касания
    //     touchStartY = startEvent.touches[0].clientY;
    // });

    // // Добавляем слушатель события touchmove (перемещение пальца) на секцию hero для мобильных устройств
    // heroSection.addEventListener('touchmove', function(moveEvent) {
    //     // Если палец двигается снизу вверх и первый экран находится в верхней точке окна браузера
    //     if (window.scrollY === 0 && scrollingEnabled) {
    //         // Запоминаем текущее положение пальца
    //         var currentY = moveEvent.touches[0].clientY;

    //         // Вычисляем расстояние, на которое проведен палец
    //         var distanceY = Math.abs(currentY - touchStartY);

    //         // Если расстояние больше заданного порога
    //         if (distanceY >= touchMoveThreshold) {
    //             // Отключаем стандартное поведение, чтобы контролировать скролл
    //             moveEvent.preventDefault();

    //             // Прокручиваем вниз на высоту окна браузера без анимации
    //             window.scrollBy(0, window.innerHeight);

    //             // Отключаем слушатели событий и устанавливаем таймер задержки
    //             scrollingEnabled = false;
    //             setTimeout(function() {
    //                 scrollingEnabled = true;
    //             }, 1000);
    //         }
    //     }
    // });

});


const header = document.querySelector('header');
const heroBg = document.querySelector('.hero__bg');
const heroBody = document.querySelector('.hero__body');
const heroControlButton = document.querySelector('.hero__control');

if (heroBg) {
    const addHoverClass = () => {
        if (window.innerWidth > 30.06125 * parseFloat(getComputedStyle(document.documentElement).fontSize)) {
            heroBg.classList.add('hover');
        }
    };

    const removeHoverClass = () => {
        if (window.innerWidth > 30.06125 * parseFloat(getComputedStyle(document.documentElement).fontSize)) {
            heroBg.classList.remove('hover');
        }
    };

    header.addEventListener('mouseover', addHoverClass);
    heroBody.addEventListener('mouseover', addHoverClass);
    heroControlButton.addEventListener('mouseover', addHoverClass);

    header.addEventListener('mouseout', removeHoverClass);
    heroBody.addEventListener('mouseout', removeHoverClass);
    heroControlButton.addEventListener('mouseout', removeHoverClass);
}





// class Scroller {
//     constructor(wrapper, aboutMain, moveToButton) {
//         this.wrapper = wrapper;
//         this.aboutMain = aboutMain;
//         this.moveToButton = moveToButton;
//         this.scrollingEnabled = true;
//         this.touchStartY = 0;
//         this.touchMoveThreshold = 50;

//         this.events = {
//             wheel: this.handleWheel.bind(this),
//             touchstart: this.handleTouchStart.bind(this),
//             touchmove: this.handleTouchMove.bind(this),
//             touchend: this.handleTouchEnd.bind(this),
//             touchcancel: this.handleTouchEnd.bind(this),
//             click: this.handleClick.bind(this),
//         };

//         this.init();
//     }

//     init() {
//         this.setEvents();
//     }

//     setEvents() {
//         this.wrapper.addEventListener('wheel', this.events.wheel);
//         this.wrapper.addEventListener('touchstart', this.events.touchstart);
//         this.wrapper.addEventListener('touchmove', this.events.touchmove);
//         this.wrapper.addEventListener('touchend', this.events.touchend);
//         this.wrapper.addEventListener('touchcancel', this.events.touchcancel);

//         if (this.moveToButton) {
//             this.moveToButton.addEventListener('click', this.events.click);
//         }

//         // Добавляем слушатель события прокрутки страницы
//         window.addEventListener('scroll', this.handleScroll.bind(this));
//     }

//     removeEvents() {
//         this.wrapper.removeEventListener('wheel', this.events.wheel);
//         this.wrapper.removeEventListener('touchstart', this.events.touchstart);
//         this.wrapper.removeEventListener('touchmove', this.events.touchmove);
//         this.wrapper.removeEventListener('touchend', this.events.touchend);
//         this.wrapper.removeEventListener('touchcancel', this.events.touchcancel);

//         if (this.moveToButton) {
//             this.moveToButton.removeEventListener('click', this.events.click);
//         }

//         // Удаляем слушатель события прокрутки страницы
//         window.removeEventListener('scroll', this.handleScroll.bind(this));
//     }

//     handleWheel(event) {
//         if (window.scrollY === 0 && event.deltaY > 0 && this.scrollingEnabled) {
//             event.preventDefault();
//             window.scrollBy(0, window.innerHeight);
//             this.disableScrolling();
//         }
//     }

//     handleTouchStart(event) {
//         this.touchStartY = event.touches[0].clientY;
//     }

//     handleTouchMove(event) {
//         if (window.scrollY === 0 && this.scrollingEnabled) {
//             const currentY = event.touches[0].clientY;
//             const distanceY = Math.abs(currentY - this.touchStartY);

//             if (distanceY >= this.touchMoveThreshold) {
//                 event.preventDefault();
//                 window.scrollBy(0, window.innerHeight);
//                 this.disableScrolling();
//             }
//         }
//     }

//     handleTouchEnd() {
//         // Дополнительная обработка для окончания касания, если необходимо
//     }

//     handleClick() {
//         if (this.aboutMain) {
//             this.aboutMain.scrollIntoView({ behavior: 'auto', block: 'start' });
//         }
//     }

//     handleScroll() {
//         // Добавляем класс _scrolled к <html> при прокрутке страницы вниз
//         if (window.scrollY > 0) {
//             document.documentElement.classList.add('_scrolled');
//         } else {
//             // Убираем класс _scrolled, если окно в верхней части
//             document.documentElement.classList.remove('_scrolled');
//         }
//     }

//     disableScrolling() {
//         this.scrollingEnabled = false;
//         setTimeout(() => {
//             this.scrollingEnabled = true;
//         }, 500);
//     }
// }

// // Пример использования
// const wrapper = document.querySelector('.hero');
// const aboutMain = document.querySelector('.about-main');
// const moveToButton = document.querySelector('.move-to');

// const scroller = new Scroller(wrapper, aboutMain, moveToButton);

// // Для удаления слушателей после использования
// // scroller.removeEvents();
