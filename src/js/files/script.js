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
