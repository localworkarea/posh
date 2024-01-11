// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from "./functions.js";
// Підключення списку активних модулів
import { flsModules } from "./modules.js";

document.addEventListener('DOMContentLoaded', function () {
  const links = document.querySelectorAll('.link-page');

  links.forEach(function (link) {
      link.addEventListener('click', function (event) {
          // Добавляем класс preloader
          document.documentElement.classList.add('preloader');

          // Предотвращаем сразу переход по ссылке
          event.preventDefault();

          const href = this.getAttribute('href');
          const mask = document.querySelector('.mask');
          if (mask) {
              mask.classList.add('active');
          }
          
          setTimeout(function () {
              window.location.href = href;
          }, 600);
      });
  });
});