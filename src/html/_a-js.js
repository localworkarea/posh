const videoSteps = [videoStepsC, videoStepsD, videoStepsE, videoStepsF];
timeline.to({}, {
  duration: scrollDuration / 500,
  onUpdate: function() {
    boxCookieItem.classList.add('not-active');
    cookiesWrapper.classList.add('not-active');
    stepsPin.classList.add('active');
    boxSteps.classList.add('active');
  
    let progress = this.progress();
    let adjustedProgress = Math.min(progress / 0.8, 1);
    let index = Math.floor(adjustedProgress * (stepsItems.length - 1));
  
    stepsItems.forEach((step, i) => {
      if (i === index) {
        step.classList.add('active');
        if (!videoSteps[i].classList.contains('play')) {
          videoSteps[i].classList.add('play');
          videoSteps[i].play();
          videoSteps[i].playbackRate = 2;
        }
      } else {
        step.classList.remove('active');
        if (videoSteps[i].classList.contains('play')) {
          videoSteps[i].classList.remove('play');
          videoSteps[i].pause();
          videoSteps[i].currentTime = 0;
        }
      }
    });
  
    if (progress === 0) {
      boxCookieItem.classList.remove('not-active');
      cookiesWrapper.classList.remove('not-active');
      stepsPin.classList.remove('active');
      boxSteps.classList.remove('active');
      stepsItems[0].classList.remove('active');
  
      videoSteps.forEach(video => {
        if (video.classList.contains('play')) {
          video.classList.remove('play');
          video.pause();
          video.currentTime = 0;
        }
      });
    }
  },
});


     // timeline.to({}, {
            //   duration: scrollDuration / 10,
            //   // duration: 300,
            //   onUpdate: function() {
            //     boxCookieItem.classList.add('not-active');
            //     cookiesWrapper.classList.add('not-active');
            //     stepsPin.classList.add('active');
            //     boxSteps.classList.add('active');
            
            //     let progress = this.progress();
            //     let adjustedProgress = Math.min(progress / 0.8, 1);
            //     let index = Math.floor(adjustedProgress * (stepsItems.length - 1));
            //     let contentProgress = (adjustedProgress * (stepsItems.length - 1)) - index;
            
            //     stepsItems.forEach((step, i) => {
            //       if (i === index) {
            //         step.classList.add('active');
            
            //         // const stepAbout = step.querySelector('.steps__about');
            //         // const stepAboutWr = step.querySelector('.steps__about_wr');
            
            //         // let aboutHeight = stepAboutWr.scrollHeight - stepAbout.clientHeight;
            //         // stepAboutWr.style.transform = `translateY(-${aboutHeight * contentProgress}px)`;
            
            //         if (i === 0) {
            //           if (!videoStepsC.classList.contains('play')) {
            //             videoStepsC.classList.add('play');
            //             videoStepsC.play();
            //             videoStepsC.playbackRate = 2;
            //           }
            //         } else if (i > 0 && i - 1 < stepsDesignItems.length) {
            //           stepsDesignItems[i - 1].classList.add('active');
            //         }
            //       } else {
            //         step.classList.remove('active');
            //         // const stepAboutWr = step.querySelector('.steps__about_wr');
            //         // if (stepAboutWr) {
            //         //   stepAboutWr.style.transform = 'translateY(0)';
            //         // }
            //         if (i === 0) {
            //           if (videoStepsC.classList.contains('play')) {
            //             videoStepsC.classList.remove('play');
            //             videoStepsC.pause();
            //             videoStepsC.currentTime = 0;
            //           }
            //         } else if (i - 1 < stepsDesignItems.length) {
            //           stepsDesignItems[i - 1].classList.remove('active');
            //         }
            //       }
            //     });
            
            //     // Прокручивание элемента .steps__about_wr на последнем stepsItems
            //     // if (adjustedProgress >= 1) {
            //     //   const lastStep = stepsItems[stepsItems.length - 1];
            //     //   const lastStepAbout = lastStep.querySelector('.steps__about');
            //     //   const lastStepAboutWr = lastStep.querySelector('.steps__about_wr');
            //     //   let remainingProgress = (progress - 0.8) / 0.2; // Прогресс от 0 до 1 для последних 20% времени
            //     //   let aboutHeight = lastStepAboutWr.scrollHeight - lastStepAbout.clientHeight;
            //     //   lastStepAboutWr.style.transform = `translateY(-${aboutHeight * remainingProgress}px)`;
            //     // }
            //     // ----------------------------
            
            //     if (progress === 0) {
            //       boxCookieItem.classList.remove('not-active');
            //       cookiesWrapper.classList.remove('not-active');
            //       stepsPin.classList.remove('active');
            //       boxSteps.classList.remove('active');
            //       stepsItems[0].classList.remove('active');
            
            //       if (videoStepsC.classList.contains('play')) {
            //         videoStepsC.classList.remove('play');
            //         videoStepsC.pause();
            //         videoStepsC.currentTime = 0;
            //       }
            
            //       stepsDesignItems.forEach(item => {
            //         item.classList.remove('active');
            //       });
            //     }
            //   }
            // });





let tl5 = gsap.timeline({
  scrollTrigger: {
    trigger: retailShelf,
    start: "center center",
    end: "+=200%",
    pin: true,
    scrub: 0.2,
  }
});

// Первая часть анимации до паузы
tl5.to('.shelf__cards', {
  xPercent: 0,
  ease: 'none',
  duration: 0.5 // Длительность до паузы
})
// .addPause("+=0.5") // Пауза на 1 секунду
// Оставшаяся часть анимации после паузы
.to('.shelf__cards', {
  xPercent: -50 * (shelfCard.length - 1),
  ease: 'none',
  duration: 1 // Длительность анимации после паузы
});





const animations = {
  eye01: gsap.to(".eye-01", {// мой код ....
  }),
  eye02: gsap.to(".eye-02", {// мой код ....
  }),
  eye03: gsap.to(".eye-03", {// мой код ....
  }),

  
  hair: gsap.to(".hair", {// мой код ....
  }),
  tlGirlYougaCircle: // мой код ....

  tlStars: // мой код ....,
  girlPuzzleHair:  // мой код ....,
};

const observerOptions = {
  root: null, // Означает область просмотра
  rootMargin: "0px",
  threshold: 0.1 // Процент видимости элемента для запуска анимации
};

// Функция для запуска и остановки анимаций
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animations.eye01.play();
      animations.eye02.play();
      animations.eye03.play();
      animations.hair.play();
      animations.tlGirlYougaCircle.play();
      animations.tlStars.play();
      animations.girlPuzzleHair.play();
      animations.mainTimeline.play();
    } else {
      animations.eye01.pause();
      animations.eye02.pause();
      animations.eye03.pause();
      animations.hair.pause();
      animations.tlGirlYougaCircle.pause();
      animations.tlStars.pause();
      animations.girlPuzzleHair.pause();
      animations.mainTimeline.pause();
    }
  });
}, observerOptions);

const elements = document.querySelectorAll(".eye-01, .eye-02, .eye-03, .hair, .girl-youga__circle-01, .girl-youga__circle-02, .girl-youga__circle-03, .girl-youga__line, .girl-analys__stars path, .girl-puzzle__hair, .girl-puzzle__lines path");
elements.forEach(el => observer.observe(el));





if (animHandEye) {
  gsap.to(".eye-01", {
   duration: 0.9,
   repeat: -1,
   yoyo: true,
   keyframes: [
     { attr: { d: "M188 124C188 159.677 203.355 166 225.935 166" }, ease: "power4.InOut", time: 0 },
     { attr: { d: "M188 124C203.5 146 205.5 148.5 225.935 166" }, ease: "power4.InOut", time: 0.15 },
     { attr: { d: "M188 124C188 159.677 203.355 166 225.935 166" }, ease: "power4.InOut", time: 0.25 },
   ]
 }),
 gsap.to(".eye-02", {
   duration: 0.9,
   repeat: -1,
   yoyo: true,
   keyframes: [
     { attr: { d: "M188 124C220.363 130.374 229.36 139.13 225.935 165.548" }, ease: "power4.InOut", time: 0 },
     { attr: { d: "M188 124C207.5 145.5 211 148.5 225.935 165.548" }, ease: "power4.InOut", time: 0.15 },
     { attr: { d: "M188 124C220.363 130.374 229.36 139.13 225.935 165.548" }, ease: "power4.InOut", time: 0.25 },
   ]
 }),
 gsap.to(".eye-03", {
   duration: 0.9,
   repeat: -1,
   yoyo: true,
   keyframes: [
     { attr: { cx: 209.538, cy: 147.107, rx: 9.95618, ry: 5.41558 }, ease: "power4.InOut", time: 0 },
     { attr: { cx: 208.108, cy: 148.258, rx: 2.38377, ry: 5.41558 }, ease: "power4.InOut", time: 0.15 },
     { attr: { cx: 209.538, cy: 147.107, rx: 9.95618, ry: 5.41558}, ease: "power4.InOut", time: 0.25 },
   ]
 });
}