// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from "./functions.js";
// Підключення списку активних модулів
import { flsModules } from "./modules.js";

// document.addEventListener('DOMContentLoaded', function () {
//   const links = document.querySelectorAll('.link-page');

//   links.forEach(function (link) {
//       link.addEventListener('click', function (event) {
//           // Добавляем класс preloader
//           document.documentElement.classList.add('preloader');

//           // Предотвращаем сразу переход по ссылке
//           event.preventDefault();

//           const href = this.getAttribute('href');
//           const mask = document.querySelector('.mask');
//           if (mask) {
//               mask.classList.add('active');
//           }
          
//           setTimeout(function () {
//               window.location.href = href;
//           }, 600);
//       });
//   });
// });

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
                    }, 2000);
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
