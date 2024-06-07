// Підключення функціоналу "Чертоги Фрілансера"
import {isMobile,  bodyLockStatus, bodyLock, bodyUnlock, bodyLockToggle  } from "./functions.js";
// Підключення списку активних модулів
import { flsModules } from "./modules.js";

// import Typed from 'typed.js';





// const splitTextElements = document.querySelectorAll('.split');
// const splitTextLines = document.querySelectorAll('.split-lines');
// const splitTextWords = document.querySelectorAll('.split-words');

// if (splitTextElements.length > 0) {
//   const splitText = new SplitType('.split-text', { types: 'lines' });

//   window.addEventListener("resize", function() {
//     splitText.split();
//   });
// }

var videoHero = document.getElementById("heroVideo");
var deferredSource = document.getElementById("deferredSource");
function setPosterForMobile() {
  if (window.innerWidth > 500) {
    videoHero.setAttribute("poster", "files/video.webp");
  }
}
if (videoHero) {
  setPosterForMobile();
}


function loadVideoWithDelay(delay) {
    setTimeout(function() {
        // Если информация о загруженном видео есть в локальном хранилище,
        // устанавливаем src для отложенного источника
        var videoLoaded = localStorage.getItem("videoLoaded");
        if (videoLoaded) {
            deferredSource.src = deferredSource.dataset.src;
        } else {
            // Если информации нет, то загружаем видео и после успешной загрузки сохраняем флаг в локальное хранилище
            deferredSource.onload = function() {
                video.appendChild(deferredSource.cloneNode(true));
                localStorage.setItem("videoLoaded", true);
            };
            deferredSource.src = deferredSource.dataset.src;
        }
    }, delay);
}
document.addEventListener("DOMContentLoaded", function() {
  if(deferredSource) {
    loadVideoWithDelay(100);
  }
});


document.addEventListener("DOMContentLoaded", function() {

  const splitTextLines = document.querySelectorAll('.split-lines');
  const splitTextWords = document.querySelectorAll('.split-words');
  const splitTextBoth = document.querySelectorAll('.split-both');

  if (splitTextLines.length > 0) {
    splitTextLines.forEach(element => {
      const splitText = new SplitType(element, { types: 'lines' });
  
      window.addEventListener("resize", function() {
        splitText.split();
      });
    });
  }
  
  if (splitTextWords.length > 0) {
    splitTextWords.forEach(element => {
      const splitText = new SplitType(element, { types: 'words' });
  
      window.addEventListener("resize", function() {
        splitText.split();
      });
    });
  }
  if (splitTextBoth.length > 0) {
    splitTextBoth.forEach(element => {
      const splitText = new SplitType(element, { types: 'lines, words' });
  
      window.addEventListener("resize", function() {
        splitText.split();
      });
    });
  }

  // Функция для обновления индексов и расстановки их заново
  const splitBoth = document.querySelectorAll('.split-both');
  const splitWords = document.querySelectorAll('.split-words');
  // const blockContents = document.querySelectorAll('.block-about__content');

  function updateIndexes() {
    
    splitBoth.forEach((splitElement) => {
      const words = splitElement.querySelectorAll('.word');
      
      words.forEach((word, index) => {
        word.style.setProperty('--index', index);
      });
    });
    splitWords.forEach((splitElement) => {
      const words = splitElement.querySelectorAll('.word');
      
      words.forEach((word, index) => {
        word.style.setProperty('--index', index);
      });
    });

    // // расстановка индексов для текстовых блоков внутри blockContents (страница About)
    // if (blockContents) {
    //   blockContents.forEach((blockContent) => {
    //     const splitWords = blockContent.querySelectorAll('.split-words');
    
    //     let totalIndex = 0; // Индекс для накопления индексов предыдущих элементов
    
    //     splitWords.forEach((splitElement) => {
    //       const words = splitElement.querySelectorAll('.word');
          
    //       words.forEach((word, index) => {
    //         // Устанавливаем индекс с учетом предыдущих индексов
    //         word.style.setProperty('--index', totalIndex);
    //         totalIndex++;
    //       });
    //     });
    //   });
    // }
  }
  
  if (splitBoth || splitWords) {
    updateIndexes();
  }
  
 


    // ИНДЕКСЫ ДЛЯ TRANSITION-DELAY (блок services-main) ========================================================
    const leftItems = document.querySelectorAll('.items-serv-left__item');
    const rightItems = document.querySelectorAll('.items-serv-right__item');
    const brandsRelationship = document.querySelectorAll('.relationship__brand');
    const lastIndex = leftItems.length > 0 ? leftItems.length - 1 : 0;
    const startIndex = lastIndex + 1;
    
    if (leftItems && rightItems && brandsRelationship) {
      leftItems.forEach((item, index) => {
        item.style.setProperty('--index', index);
      });
      brandsRelationship.forEach((item, index) => {
        item.style.setProperty('--index', index);
      });
    
      rightItems.forEach((item, index) => {
        item.style.setProperty('--index', startIndex + index);
      });
    }
    

    const splitWordsElements = document.querySelectorAll('.split-words.txt-anim');
  
    function createSpanInWord() {
      if (splitWordsElements) {
        splitWordsElements.forEach(splitWordsElement => {
          const words = splitWordsElement.querySelectorAll('.word');
          
          words.forEach(word => {
            const text = word.textContent.trim();
            word.innerHTML = `<span class="word-span">${text}</span>`;
          });
        });
      }
    }
    createSpanInWord();

     // Добавление слушателя события resize к окну
  window.addEventListener("resize", function() {
    createSpanInWord();
    updateIndexes();
  });

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
    var startDelay = 1200; // Задержка в миллисекундах
  
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
               setTimeout(() => {
                 startIntervalForWatcher();
               }, 1000);
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
      const pageContacts = document.querySelector('.page-contacts');
      const buttonFormElement = document.querySelector('.button-form');
      const closeFromBtn = document.querySelector('.form-footer__close');
      const footerContainer = document.querySelector('.form-footer__container form');
      if (!pageContacts) {
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
      }
      // -------------------------------------------------------------------------------------


      // CASES MOBILE MENU FOR BUTTONS (CASES, CASE PAGES) ==============================================================
      const casesFooter = document.querySelector('.footer');
      const headNav = document.querySelector('.head-section .cases-nav');
      const footerNav = document.querySelector('.footer__case-nav');
      const casesNav = document.querySelector('.cases-nav');
      let casesMobButtons = document.querySelectorAll('.cases-nav__mob'); 
      let casesNavWrappers = document.querySelectorAll('.cases-nav__wrapper'); 
      const casesCloseButton = document.querySelector('.cases-nav__close');
      const lockWidthThreshold = 30.06125; // задаем пороговое значение для ширины экрана в em
      if (headNav) {
          const clonedNav = casesNav.cloneNode(true);
          clonedNav.classList.add('cases-nav-clone');
          casesFooter.insertBefore(clonedNav, casesFooter.firstChild);
          const clonedWrapper = clonedNav.querySelector('.cases-nav__wrapper');
          if (clonedWrapper) {
              clonedWrapper.classList.remove('origin-wrapper');
              clonedWrapper.classList.add('wrapper-clone');
          }
          // Обновлено после клонирования:
          casesMobButtons = document.querySelectorAll('.cases-nav__mob'); 
          casesNavWrappers = document.querySelectorAll('.cases-nav__wrapper'); 
          // вызываем функцию открытия/закрытия меню категорий на мобилке:
          openCategories();
      }
      if (footerNav) {
        openCategories();
      }
      function openCategories() {
        casesMobButtons.forEach(function(button) {
          button.addEventListener('click', function() {
              casesNavWrappers.forEach(function(wrapper) {
                  if (wrapper.classList.contains('origin-wrapper')) {
                      wrapper.classList.add('_active');
                  }
              });
              if (window.innerWidth / parseFloat(getComputedStyle(document.documentElement).fontSize) <= lockWidthThreshold) {
                  document.documentElement.classList.add('lock');
              }
              window.addEventListener('resize', function() {
                  document.documentElement.classList.remove('lock');
                  casesNavWrappers.forEach(function(wrapper) {
                    if (wrapper.classList.contains('origin-wrapper')) {
                        wrapper.classList.remove('_active');
                    }
                });
              });
          });
        });
        casesCloseButton.addEventListener('click', function() {
            casesNavWrappers.forEach(function(wrapper) {
                wrapper.classList.remove('_active');
            });
            if (window.innerWidth / parseFloat(getComputedStyle(document.documentElement).fontSize) <= lockWidthThreshold) {
                document.documentElement.classList.remove('lock');
            }
        });
      }
      
   
      // == ISOTOP СЕТКА НА СТРАНИЦЕ PARTNERS ==========================
      const itemsPartners = document.querySelector('[data-iso-items]');
      if (itemsPartners) {
        const itemsGrid = new Isotope(itemsPartners, {
          itemSelector: '[data-iso-item]',
          layoutMode: 'fitRows'
        });
      
        document.addEventListener("click", documentActions);
      
        function documentActions(e) {
          const targetElement = e.target;
          if (targetElement.closest(".filter-partners__btn")) {
            const filterItem = targetElement.closest(".filter-partners__btn");
            const filterValue = filterItem.dataset.filter;
            const filterActiveItem = document.querySelector('.filter-partners__btn.active');
          
            if (filterValue === "*") {
              itemsGrid.arrange({ filter: '' });
            } else {
              itemsGrid.arrange({
                filter: function(itemElem) {
                  const filters = itemElem.getAttribute('data-filter').split(' ');
                  return filters.includes(filterValue);
                }
              });
            }
          
            filterActiveItem.classList.remove("active");
            filterItem.classList.add("active");
          
            e.preventDefault();
          }
        }
      }


      // === страница CLIETNS - движение картинок ======================= 
      const clientsItems = document.querySelectorAll('.clients__item');

      if (clientsItems.length > 0) {
          clientsItems.forEach(item => {
          
              item.addEventListener('mousemove', function(event) {
                  const img = item.querySelector('.clients__img');
                  const rect = item.getBoundingClientRect();
                  const x = event.clientX - rect.left;
                  const y = event.clientY - rect.top;
              
                  img.style.left = `${x + 10}px`;
                  img.style.top = `${y + 10}px`;
              });
            
          });
      }
      // =============================================================


      // страница SERVICES - запус видео из слайдеров ================
      const videoContainers = document.querySelectorAll('.slide-serv');    
      if (videoContainers.length > 0) {
          videoContainers.forEach(container => {
              const buttonService = container.querySelector('.slide-serv__video-btn');
              const video = container.querySelector('.slide-serv__video');
    
              if (buttonService && video) {
                  buttonService.addEventListener('click', function() {
                      video.play();
                      video.controls = true;
                      video.muted = false; // Включаем звук
                      buttonService.classList.add('_play');
                  });
              }
          });
      }
      // ===================================================================

      // === страница OUR-SERVICES === добавляем класс _sticky =======
      const navElement = document.querySelector('.our-serv__nav');
      if (navElement) {
        function checkNavPosition() {
          if (navElement) {
            const rect = navElement.getBoundingClientRect();
            if (rect.top >= 0) {
              navElement.classList.add('_sticky');
            } else {
              navElement.classList.remove('_sticky');
            }
          }
        }
      
        window.addEventListener('scroll', checkNavPosition);
        checkNavPosition();
      }
      
    // ====================================================================


     // === страница OUR-SERVICES ===  навигация по странице =======
    const navLinks = document.querySelectorAll('.nav-serv__link');

    if (navLinks.length > 0) {
        navLinks.forEach(link => {
            link.addEventListener('click', function(event) {
                event.preventDefault();
                
                const targetId = this.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                  let offset;
                  const emWidth = window.innerWidth / 16; // Преобразуем ширину экрана в em
                  if (emWidth >= 48.0625) { // 768.98 / 16
                      offset = 28 * window.innerHeight / 100;
                  } else {
                      offset = 18 * window.innerHeight / 100;
                  }

                  const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - offset;

                  window.scrollTo({
                      top: targetPosition,
                      behavior: 'smooth'
                  });
                }
            });
        });
    }
    // ====================================================================



      
}); // END OF DOMContentLoaded ----------------------------------------------------------------------------



  // CLONE TIKERS ==============================================================
  const tikers = document.querySelectorAll(".tiker");
  tikers.forEach((tiker) => {
    const originalLine = tiker.querySelector(".tiker__line");
  
    if (originalLine) {
      if (tiker.classList.contains("tiker-01")) {
        originalLine.style.animation = "scroll 40s linear infinite";
      }
      if (tiker.classList.contains("tiker-02")) {
        originalLine.style.animation = "scroll-rev 40s linear infinite";
      }
      if (tiker.classList.contains("tiker-03")) {
        originalLine.style.animation = "scroll 50s linear infinite";
      }
      const clonedLine = originalLine.cloneNode(true);
      clonedLine.classList.add("clone-line");
  
      tiker.appendChild(clonedLine);
    }
  });

  // window.addEventListener("load", function (e) {

  
  //   // Проверяем, является ли устройство мобильным
  //   if (!isMobile.any()) {
  //     // Находим элементы тикера
  //     const tikerInsights = document.querySelector('.slider-insights');
  //     const tikerLine = document.querySelector('.slider-insights__wrapper');
  //     const clonedLine = tikerLine.cloneNode(true);
  //     // Добавляем клон в конец элемента тикера
  //     tikerInsights.appendChild(clonedLine);
  //     // Присваиваем анимацию обоим линиям тикера
  //     tikerLine.style.animation = "scroll 40s linear infinite";
  //     clonedLine.style.animation = "scroll 40s linear infinite";
  //     // Функция для приостановки анимации
  //     function playStatePaused() {
  //         tikerLine.style.animationPlayState = "paused";
  //         clonedLine.style.animationPlayState = "paused";
  //     }
  //     // Функция для возобновления анимации
  //     function playStateRunning() {
  //         tikerLine.style.animationPlayState = "running";
  //         clonedLine.style.animationPlayState = "running";
  //     }
  //     // Обработчики событий для мыши и касаний
  //     tikerInsights.addEventListener("mouseover", playStatePaused);
  //     tikerInsights.addEventListener("mouseout", playStateRunning);
  //   }
  // });
  // -------------------------------------------------------------------------------------


  function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    var viewportHeight = window.innerHeight || document.documentElement.clientHeight;
    return (
      rect.top <= viewportHeight && rect.bottom >= 0
    );
  }
  

function handleScroll() {
  var paragraphs = document.querySelectorAll('.block-about__txt span');

  paragraphs.forEach(function (paragraph) {
    var scrollPos = window.pageYOffset || document.documentElement.scrollTop;
    var paragraphTop = paragraph.getBoundingClientRect().top + scrollPos;
    var paragraphBottom = paragraphTop + paragraph.offsetHeight;
    var viewportHeight = window.innerHeight || document.documentElement.clientHeight;
    var gradientHeight = viewportHeight * 0.8;
    console.log(paragraphBottom);
    var progress = Math.max(0, Math.min(1, (scrollPos + viewportHeight - paragraphTop) / gradientHeight));

    // Проверяем положение элемента относительно верха страницы
    var isInViewport = isElementInViewport(paragraph);

    if (isInViewport) {
      paragraph.style.backgroundSize = (progress * 100) + '% 100%';
    }
  });
}

window.addEventListener('scroll', handleScroll);
// window.addEventListener('load', handleScroll);
handleScroll();
