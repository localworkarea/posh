// Підключення функціоналу "Чертоги Фрілансера"
import {isMobile,  bodyLockStatus, bodyLock, bodyUnlock, bodyLockToggle  } from "./functions.js";
// Підключення списку активних модулів
import { flsModules } from "./modules.js";

// import Typed from 'typed.js';


// // Переменная для отслеживания начальной точки касания
// let startY = null;

// // Функция, которая будет вызываться при событии touchstart
// function handleTouchStart(event) {
//   const touch = event.touches[0];
//   startY = touch.clientY;
// }

// // Функция, которая будет вызываться при событии touchmove
// function handleTouchMove(event) {
//   if (!startY) return;

//   const touch = event.touches[0];
//   const deltaY = touch.clientY - startY;
//   const direction = chooseDirection(deltaY);

//   // Если направление движения вниз, запускаем функцию checkContentHeight()
//   if (direction === -1) {
//     checkContentHeight();
//   }

//   // Сбрасываем начальную точку касания
//   startY = null;
// }

// // Функция, которая будет вызываться при событии wheel
// function handleWheel(event) {
//   const deltaY = event.deltaY; // Получаем значение deltaY (изменение по вертикали)
//   const direction = chooseDirection(deltaY);
//   console.log("Direction:", direction); // выводим в консколь 1 или -1

//   // Если направление движения вниз, запускаем функцию checkContentHeight()
//   if (direction === 1) {
//     checkContentHeight();
//   }
// }

// // Функция для прокрутки вниз
// function scrollDown() {
//   document.documentElement.classList.add('section-01');
//   setTimeout(bodyUnlock, 500); // Вызываем bodyUnlock() через 500мс
// }

// // Функция для проверки высоты контента внутри секции "hero"
// function checkContentHeight() {
//   const heroSection = document.querySelector(".hero");
//   const contentHeight = heroSection.scrollHeight;
//   const sectionHeight = heroSection.clientHeight;

//    // Если высота контента меньше или равна высоте секции
//    if (contentHeight <= sectionHeight) {
//       scrollDown();
    
//   } else if (heroSection.scrollTop + sectionHeight >= heroSection.scrollHeight) {
//       scrollDown();
//     }
// }

// Функция, которая определяет направление движения колеса
// function chooseDirection(deltaY) {
//   return deltaY > 0 ? 1 : -1; // Например, 1 - вниз, -1 - вверх
// }

// // Элемент, на который будем навешивать обработчик событий
// const targetElement = document.querySelector(".hero");

// // Навешиваем обработчики событий
// targetElement.addEventListener("wheel", handleWheel);
// targetElement.addEventListener("touchstart", handleTouchStart);
// targetElement.addEventListener("touchmove", handleTouchMove);


 var video = document.getElementById("heroVideo");
    var deferredSource = document.getElementById("deferredSource");
    
    var videoLoaded = localStorage.getItem("videoLoaded");
    if (videoLoaded) {
        // Если информация о загруженном видео есть в локальном хранилище,
        // устанавливаем src для отложенного источника
        deferredSource.src = deferredSource.dataset.src;
    } else {
        // Если информации нет, то загружаем видео и после успешной загрузки сохраняем флаг в локальное хранилище
        deferredSource.onload = function() {
            video.appendChild(deferredSource.cloneNode(true));
            localStorage.setItem("videoLoaded", true);
        };
        deferredSource.src = deferredSource.dataset.src;
    }



document.addEventListener("DOMContentLoaded", function() {

    // ОТЛОЖЕННАЯ ЗАГРУЗКА ВИДЕО ========================================================
    // window.addEventListener("load", function() {
    //     var video = document.getElementById("heroVideo");
    //     if (video) {
    //         var source = video.querySelector("source");
    //         // Проверка локального хранилища на наличие ключа
    //         var videoLoaded = localStorage.getItem("videoLoaded");
    //         video.addEventListener("canplay", function() {
    //             video.play();
    //         });
    //         // Проверяем ширину экрана и устанавливаем соответствующую задержку
    //         // Если ширина экрана меньше 500px, то устанавливается задержка одна, в противном случае — другая (1200 / 1800)
    //         var delay = window.matchMedia("(max-width: 500px)").matches ? 0 : 0;
    //         // Если видео не было загружено ранее, устанавливаем таймер
    //         if (!videoLoaded) {
    //             setTimeout(function() {
    //                 video.load();
    //                 source.src = source.getAttribute("data-src");
    //                 video.load();
    //                 // Сохраняем информацию о загрузке видео в локальное хранилище
    //                 localStorage.setItem("videoLoaded", "true");
    //             }, delay);
    //         } else {
    //             // Если видео уже было загружено, начинаем его воспроизведение сразу
    //             video.load();
    //             source.src = source.getAttribute("data-src");
    //             video.load();
    //         }
    //     }
    // });
    // -------------------------------------------------------------------------------------


    // HOVER HEADER - OPACITY HERO SECTION VIDEO ==============================================================
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
    // -------------------------------------------------------------------------------------



    // ОСТАНОВИТЬ/ВОСПРОИЗВЕСТИ ГЛАВНОЕ ВИДЕО ПО КЛИКУ ===========================================
        var video = document.getElementById('heroVideo');
        var playPauseButton = document.querySelector('.hero__control');

        if (playPauseButton) {
            playPauseButton.addEventListener('click', function () {
                if (video.paused) {
                    video.play();
                    playPauseButton.classList.remove('paused');
                    video.classList.remove('paused');
                } else {
                    video.pause();
                    playPauseButton.classList.add('paused');
                    video.classList.add('paused');
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
    var typed;
    var startDelay = 0; // Задержка в миллисекундах
  
    if (typedElement) {
      // Создаем Typed при загрузке страницы
      typed = new Typed('#typed', {
        stringsElement: '#typed-strings',
        typeSpeed: 50,
        backSpeed: 20,
        loop: true,
        loopCount: Infinity,
        smartBackspace: false,
        startDelay: startDelay,
        onComplete: function () {
          // Помечаем, что Typed завершил свой цикл
          typedElement.setAttribute('data-typed-started', 'completed');
        }
      });
  
      // Проверяем при загрузке, есть ли у documentElement класс fp-section-1
      if (document.documentElement.classList.contains('fp-section-1')) {
        // Пауза перед стартом, если условие выполняется
        setTimeout(function () {
          typed.start();
          typedElement.setAttribute('data-typed-started', 'true');
        }, startDelay);
      }
  
      // Наблюдаем за изменениями в атрибутах класса элемента
      var observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
          // Проверяем, добавлен ли класс fp-section-1 к documentElement
          if (document.documentElement.classList.contains('fp-section-1')) {
            // Пауза перед стартом, если условие выполняется
            setTimeout(function () {
              typed.start();
              typedElement.setAttribute('data-typed-started', 'true');
            }, startDelay);
          } else {
            // Если класс отсутствует, останавливаем Typed
            typed.stop();
            typedElement.setAttribute('data-typed-started', 'false');
          }
        });
      });
  
      // Наблюдаем за изменениями в атрибутах класса documentElement
      observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
  
      // Наблюдаем за видимостью элемента
      var intersectionObserver = new IntersectionObserver(handleIntersection, { threshold: 0.5 });
  
      intersectionObserver.observe(typedElement);
    }
  
    function handleIntersection(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting && document.documentElement.classList.contains('fp-section-1')) {
          // Если элемент виден во вьюпорте и document.documentElement содержит класс fp-section-1
          // Пауза перед стартом, если условие выполняется
          setTimeout(function () {
            typed.start();
            typedElement.setAttribute('data-typed-started', 'true');
          }, startDelay);
        } else {
          // Если элемент не виден во вьюпорте или document.documentElement не содержит класс fp-section-1
          typed.stop();
          typedElement.setAttribute('data-typed-started', 'false');
        }
      });
    }
    // -------------------------------------------------------------------------------------

      
      
      // ANIMATION SVG MASSAGE (FOOTER) ==============================================================
      function setupGroupAnimation(groupSelector, circleId, hoverRadius) {
        const group = document.querySelector(groupSelector);
        const animCircle = group.querySelector(`#${circleId}`); // Используем querySelector внутри группы
      
        function handleMouseEnter(event) {
            const rect = group.getBoundingClientRect(); // Получаем координаты группы
            const mouseX = event.clientX - rect.left; // Позиция мыши по X относительно группы
            const mouseY = event.clientY - rect.top; // Позиция мыши по Y относительно группы
        
            // Устанавливаем координаты начала анимации в месте ховера мыши внутри группы
            animCircle.setAttribute('cx', mouseX);
            animCircle.setAttribute('cy', mouseY);
    
            // Увеличиваем радиус при наведении мыши
            animCircle.setAttribute('r', hoverRadius);
        
            // Отключаем обработчик события mouseenter после определения координаты
            group.removeEventListener('mouseenter', handleMouseEnter);
        }
      
        function handleMouseLeave(event) {
            // Включаем отслеживание координат мыши при выходе указателя из области группы
            group.addEventListener('mouseenter', handleMouseEnter);
    
            // Возвращаем радиус к изначальному значению при уходе мыши
            animCircle.setAttribute('r', '0');
        }
      
        group.addEventListener('mouseenter', handleMouseEnter);
        group.addEventListener('mouseleave', handleMouseLeave);
    }
    
    setupGroupAnimation('.msg__first-group', 'animCircle', '60');
    setupGroupAnimation('.msg__second-group', 'animCircleSec', '80');
    


     // -------------------------------------------------------------------------------------
    

     // ANIMATION BUTTON TXT (FOOTER) ==============================================================
     const buttonForm = document.querySelector('.button-form');
     const classes = ['move-up-a', 'move-up-b', 'move-up-c'];
     let currentIndex = 0;
     let intervalId;
     let watcherClassAdded = false;
     let animationInProgress = false; // Флаг для отслеживания процесса анимации
     
     function changeClassForInterval() {
       if (!animationInProgress) return; // Если анимация не активна, выходим из функции
       buttonForm.classList.remove(classes[currentIndex]);
       currentIndex = (currentIndex + 1) % classes.length;
       buttonForm.classList.add(classes[currentIndex]);
       intervalId = setTimeout(changeClassForInterval, 1500);
     }
     
     function startIntervalForWatcher() {
       if (!animationInProgress) {
         animationInProgress = true;
         changeClassForInterval(); // Начинаем анимацию
       }
     }
     
     function stopIntervalForWatcher() {
       clearTimeout(intervalId);
       animationInProgress = false; // Останавливаем анимацию
     }
     
     function handleWatcherClassChange(mutationsList, observer) {
       for (let mutation of mutationsList) {
         if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
           if (buttonForm.classList.contains('_watcher-view')) {
             if (!watcherClassAdded) {
               watcherClassAdded = true;
               startIntervalForWatcher();
             }
           } else {
             if (watcherClassAdded) {
               watcherClassAdded = false;
               stopIntervalForWatcher();
             }
           }
         }
       }
     }
     
     const watcherObserver = new MutationObserver(handleWatcherClassChange);
     watcherObserver.observe(buttonForm, { attributes: true });
     
     buttonForm.addEventListener('mouseenter', stopIntervalForWatcher);
     buttonForm.addEventListener('mouseleave', startIntervalForWatcher);
     
     // Проверяем начальное состояние кнопки
     if (buttonForm.classList.contains('_watcher-view')) {
       watcherClassAdded = true;
       startIntervalForWatcher();
     }
     
     
    // -------------------------------------------------------------------------------------


     // UPLOAD FILE (FORM) ==============================================================
     const fileInputBody = document.querySelector('.file-upload');
     const fileInput = document.getElementById('file-upload-input');
     let fileErrorSpan = null; // Переменная для хранения ссылки на элемент span ошибки
     
     let previousFile = null;
     
     if (fileInput) {
         fileInput.addEventListener('change', function(event) {
             if (this.files && this.files.length > 0) {
                 const fileSizeInMB = this.files[0].size / (1024 * 1024); // конвертируем размер файла в МБ
                 if (fileSizeInMB > 10) {
                     const errorMessage = this.getAttribute('data-fe');
                     fileInput.classList.add('error');
                     
                     // Создаем элемент span для ошибки, если он еще не был создан
                     if (!fileErrorSpan) {
                         fileErrorSpan = document.createElement('span');
                         fileErrorSpan.classList.add('file-error');
                         fileInputBody.appendChild(fileErrorSpan); // Добавляем созданный элемент span в контейнер .file-upload
                     }
                     
                     fileErrorSpan.textContent = errorMessage;
                     fileErrorSpan.style.display = 'block'; // Показываем элемент span с ошибкой
                     
                     // Устанавливаем задержку для удаления ошибки через 3 секунды
                     setTimeout(() => {
                         fileInputBody.removeChild(fileErrorSpan);
                         fileErrorSpan = null;
                     }, 3000);
                     
                     // Отменяем стандартное действие браузера (загрузку файла)
                     event.preventDefault();
                 } else {
                     // Если размер файла в норме, удаляем класс ошибки и очищаем текст ошибки
                     fileInput.classList.remove('error');
                     
                     // Удаляем элемент span ошибки, если он был создан ранее
                     if (fileErrorSpan) {
                         fileInputBody.removeChild(fileErrorSpan);
                         fileErrorSpan = null;
                     }
                     
                     // Проверяем наличие класса _upload и добавляем его, если он отсутствует
                     if (!fileInputBody.classList.contains('_upload')) {
                         fileInputBody.classList.add('_upload');
                     }
                     
                     // Сохраняем предыдущий файл, чтобы позже проверить, нужно ли его удалить
                     previousFile = this.files[0];
                    //  console.log(`Загружено файлов: ${this.files.length}`);
                 }
     
             } else {
                 // Если файл не выбран, очищаем текст ошибки
                 fileInput.classList.remove('error');
                 
                 // Удаляем элемент span ошибки, если он был создан ранее
                 if (fileErrorSpan) {
                     fileInputBody.removeChild(fileErrorSpan);
                     fileErrorSpan = null;
                 }
                 
                 fileInputBody.classList.remove('_upload');
     
                //  console.log('Файл не выбран');
                //  console.log(`Загружено файлов: ${this.files.length}`);
             }
         });
     }
     

     
      // -------------------------------------------------------------------------------------
     
      // TAPING TXT in input (FORM) ==============================================================
      const inputElements = document.querySelectorAll('.input');

       if (inputElements) {
         inputElements.forEach(input => {
             // Добавляем обработчик события input для каждого инпута
             input.addEventListener('input', function() {
                 // Если значение инпута не пустое, добавляем классы
                 if (this.value.trim() !== '') {
                     this.classList.add('_text-input');
                     this.parentElement.classList.add('_text-input');
                 } else {
                     // Если значение инпута пустое, удаляем классы
                     this.classList.remove('_text-input');
                     this.parentElement.classList.remove('_text-input');
                 }
             });
         });
       }
      // -------------------------------------------------------------------------------------

      // OPEN FORM POPUP, PAGE HOME (FORM) ==============================================================
      const buttonFormElement = document.querySelector('.button-form');
      const closeFromBtn = document.querySelector('.form-footer__close');
      const footerContainer = document.querySelector('.form-footer__container form');
      let formFooter, footerMainBody;
  
      function updateFooterHeight() {
          const formFooterHeight = formFooter.offsetHeight;
          footerMainBody.style.height = `${formFooterHeight}px`;
      }
  
      if (buttonFormElement && closeFromBtn) {
        let buttonDisabled = false;

        function handleClick() {
            if (buttonDisabled) {
                return; // Если кнопка неактивна, игнорируем клик
            }
        
            buttonDisabled = true; // Делаем кнопку неактивной
        
            formFooter = document.querySelector('.form-footer');
            footerMainBody = document.querySelector('.footer-main__body');
            if (formFooter && footerMainBody) {
                formFooter.classList.add('form-open');
                footerMainBody.classList.add('form-open');
                setTimeout(function() {
                    updateFooterHeight();
                }, 400);
                footerContainer.classList.add('popup-open');
                window.addEventListener('orientationchange', updateFooterHeight);
                window.addEventListener('resize', updateFooterHeight);
            }
        
            setTimeout(function() {
                buttonDisabled = false; // После 1 секунды делаем кнопку снова активной
            }, 1500);
        }
        
        buttonFormElement.addEventListener('click', handleClick);
        
  
          closeFromBtn.addEventListener('click', function(event) {
              if (formFooter && footerMainBody) {
                  formFooter.classList.remove('form-open');
                  footerMainBody.classList.remove('form-open');
                  setTimeout(function() {
                      footerMainBody.style.height = 'initial';
                  }, 400);
                  setTimeout(function() {
                    footerContainer.classList.remove('popup-open');
                  }, 800);
                  window.removeEventListener('orientationchange', updateFooterHeight);
                  window.removeEventListener('resize', updateFooterHeight);
              }
          });
      }
      // -------------------------------------------------------------------------------------

      
    });
    
    // CLONE TIKERS ==============================================================

    const tikers = document.querySelectorAll(".tiker");

    tikers.forEach((tiker) => {
      const originalLine = tiker.querySelector(".tiker__line");
    
      if (originalLine) {
        if (tiker.classList.contains("tiker-01")) {
          originalLine.style.animation = "scroll 40s linear infinite";
        } else if (tiker.classList.contains("tiker-insights")) {
          originalLine.style.animation = "scroll 30s linear infinite";
        }
    
        const clonedLine = originalLine.cloneNode(true);
        clonedLine.classList.add("clone-line");
    
        tiker.appendChild(clonedLine);
    
        document.addEventListener("DOMContentLoaded", function() {
          if (tiker.classList.contains("tiker-hover") && !document.documentElement.classList.contains("touch")) {
            tiker.addEventListener("mouseover", () => {
              const cloneLines = tiker.querySelectorAll(".tiker__line");
              cloneLines.forEach((cloneLine) => {
                cloneLine.style.animationPlayState = "paused";
              });
            });
    
            tiker.addEventListener("mouseout", () => {
              const cloneLines = tiker.querySelectorAll(".tiker__line");
              cloneLines.forEach((cloneLine) => {
                cloneLine.style.animationPlayState = "running";
              });
            });
          }
        });
      }
    });
      // -------------------------------------------------------------------------------------
     


 
      
//       const tikers = document.querySelectorAll(".tiker");
//       const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

// tikers.forEach((tiker) => {
//     const originalLines = tiker.querySelectorAll(".tiker__line");

//     originalLines.forEach((originalLine) => {
//         if (originalLine) {
//             if (tiker.classList.contains("tiker-01")) {
//                 originalLine.style.animation = "scroll 40s linear infinite";
//             } else if (tiker.classList.contains("tiker-insights")) {
//                 originalLine.style.animation = "scroll 30s linear infinite";
//             }

//             const clonedLine = originalLine.cloneNode(true);
//             clonedLine.classList.add("clone-line");

//             tiker.appendChild(clonedLine);
//         }
//     });

//     document.addEventListener("DOMContentLoaded", function() {
//         if (tiker.classList.contains("tiker-hover") && !document.documentElement.classList.contains("touch")) {
//             tiker.addEventListener("mouseover", () => {
//                 const allLines = tiker.querySelectorAll(".tiker__line, .clone-line");
//                 allLines.forEach((line) => {
//                     line.style.animationPlayState = "paused";
//                 });
//             });

//             tiker.addEventListener("mouseout", () => {
//                 const allLines = tiker.querySelectorAll(".tiker__line, .clone-line");
//                 allLines.forEach((line) => {
//                     line.style.animationPlayState = "running";
//                 });
//             });
//         }

//         let startX = null;
//         let startTranslateX = 0;

//         if (isMobile.iOS()) {
//             tiker.addEventListener("touchmove", (e) => {
//                 e.preventDefault();
//             });

//             tiker.addEventListener("touchstart", (e) => {
//                 const targetElement = e.target;

//                 if (targetElement) {
//                     if (targetElement.scrollHeight !== targetElement.clientHeight) {
//                         if (targetElement.scrollTop === 0) {
//                             targetElement.scrollTop = 1;
//                         }
//                         if (targetElement.scrollTop === targetElement.scrollHeight - targetElement.clientHeight) {
//                             targetElement.scrollTop = targetElement.scrollHeight - targetElement.clientHeight - 1;
//                         }
//                     }

//                     tiker.allowUp = targetElement.scrollTop > 0;
//                     tiker.allowDown = targetElement.scrollTop < (targetElement.scrollHeight - targetElement.clientHeight);
//                     tiker.lastY = e.changedTouches[0].pageY;
//                 }
//             });

//             tiker.addEventListener("touchmove", (e) => {
//                 const targetElement = e.target;
//                 const up = e.changedTouches[0].pageY > tiker.lastY;
//                 const down = !up;
//                 tiker.lastY = e.changedTouches[0].pageY;

//                 if (targetElement) {
//                     if ((up && tiker.allowUp) || (down && tiker.allowDown)) {
//                         e.stopPropagation();
//                     } else if (e.cancelable) {
//                         e.preventDefault();
//                     }
//                 }
//             });
//         } else if (isSafari) {
//           // Проверяем, является ли браузер Safari
//             tiker.addEventListener("touchstart", (e) => {
//                 const touch = e.touches[0];
//                 startX = touch.clientX;
//                 startScrollLeft = tiker.scrollLeft;
//             });
        
//             tiker.addEventListener("touchmove", (e) => {
//                 const touch = e.touches[0];
//                 const diffX = startX - touch.clientX;
//                 tiker.scrollLeft = startScrollLeft + diffX;
//             });
        
//             tiker.addEventListener("touchend", () => {
//                 // Возобновить анимацию всех .tiker__line и .clone-line при окончании касания
//                 const allLines = tiker.querySelectorAll(".tiker__line, .clone-line");
//                 allLines.forEach((line) => {
//                     line.style.animationPlayState = "running";
//                 });
//             });
//         } else {
//             tiker.addEventListener("touchstart", (e) => {
//                 // Остановить анимацию всех .tiker__line и .clone-line при касании
//                 const allLines = tiker.querySelectorAll(".tiker__line, .clone-line");
//                 allLines.forEach((line) => {
//                     line.style.animationPlayState = "paused";
//                 });
//                 const touch = e.touches[0];
//                 startX = touch.clientX;
//                 startTranslateX = parseInt(originalLines[0].style.transform.replace("translateX(", "").replace("px)", ""), 10) || 0;
//             });

//             tiker.addEventListener("touchmove", (e) => {
//                 const touch = e.touches[0];
//                 const moveX = touch.clientX;
//                 const diffX = moveX - startX;
//                 const newTranslateX = startTranslateX + diffX;

//                 // Прокрутка в зависимости от направления
//                 const allLines = tiker.querySelectorAll(".tiker__line, .clone-line");
//                 allLines.forEach((line) => {
//                     line.style.transform = `translateX(${newTranslateX}px)`;
//                 });
//             });

//             tiker.addEventListener("touchend", () => {
//                 // Возобновить анимацию всех .tiker__line и .clone-line при окончании касания
//                 const allLines = tiker.querySelectorAll(".tiker__line, .clone-line");
//                 allLines.forEach((line) => {
//                     line.style.animationPlayState = "running";
//                 });
//             });
//         }
//     });
// });

// const tikers = document.querySelectorAll(".tiker");

// tikers.forEach((tiker) => {
//     const originalLines = tiker.querySelectorAll(".tiker__line");

//     originalLines.forEach((originalLine) => {
//         if (originalLine) {
//             if (tiker.classList.contains("tiker-01")) {
//                 originalLine.style.animation = "scroll 40s linear infinite";
//             } else if (tiker.classList.contains("tiker-insights")) {
//                 originalLine.style.animation = "scroll 30s linear infinite";
//             }

//             const clonedLine = originalLine.cloneNode(true);
//             clonedLine.classList.add("clone-line");

//             tiker.appendChild(clonedLine);
//         }
//     });

//     document.addEventListener("DOMContentLoaded", function() {
//         if (tiker.classList.contains("tiker-hover") && !document.documentElement.classList.contains("touch")) {
//             tiker.addEventListener("mouseover", () => {
//                 const allLines = tiker.querySelectorAll(".tiker__line, .clone-line");
//                 allLines.forEach((line) => {
//                     line.style.animationPlayState = "paused";
//                 });
//             });

//             tiker.addEventListener("mouseout", () => {
//                 const allLines = tiker.querySelectorAll(".tiker__line, .clone-line");
//                 allLines.forEach((line) => {
//                     line.style.animationPlayState = "running";
//                 });
//             });
//         }

//         let startX = null;
//         let startY = null;
//         let translateX = 0;
//         let translateY = 0;
//         let isDragging = false;

//         tiker.addEventListener("touchstart", (e) => {
//             const touch = e.touches[0];
//             startX = touch.clientX;
//             startY = touch.clientY;
//             isDragging = true;
//         });

//         tiker.addEventListener("touchmove", (e) => {
//             if (!isDragging) return;

//             const touch = e.touches[0];
//             const diffX = touch.clientX - startX;
//             const diffY = touch.clientY - startY;

//             if (Math.abs(diffX) > Math.abs(diffY)) {
//                 e.preventDefault();
//                 translateX += diffX;
//                 tiker.style.transform = `translateX(${translateX}px)`;
//             }

//             startX = touch.clientX;
//             startY = touch.clientY;
//         });

//         tiker.addEventListener("touchend", () => {
//             isDragging = false;
//             // Возобновить анимацию всех .tiker__line и .clone-line при окончании касания
//             const allLines = tiker.querySelectorAll(".tiker__line, .clone-line");
//             allLines.forEach((line) => {
//                 line.style.animationPlayState = "running";
//             });
//         });
//     });
// });

