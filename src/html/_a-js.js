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



<div data-fp data-fp-effect="fade" class="fullpage-mob">
      <div data-fp-section class="approach-01">
        <section class="retail__container approach-01__cont">
        </section>
      </div>
      <div data-fp-section class="approach-02">
        <div class="approach-02__wrapper">
          <section class="retail">
            <div class="retail__container approach-02__cont">
              <div  class="retail__shelf shelf"></div>
              <div  class="retail__steps steps-retail"></div>
            </div>
          </section>
        </div>
      </div>
  </div>











if (isMobile) {

  let scrollTween = gsap.to('.shelf__cards', {
    xPercent: -50 * (shelfCard.length - 1),
    ease: 'none',
    scrollTrigger: {
      // мой код ....
    }
  });
  
  ScrollTrigger.create({
    // мой код ....
    
  });
  ScrollTrigger.create({
    // мой код ....
  });
  ScrollTrigger.create({
    // мой код ....
  });
   // === Design__Cookie =============================================
  const tl = gsap.timeline({
    scrollTrigger: {
       // мой код ....
    }
  });

  tl.to(cookieWrapper, {
    // мой код ....
  });

  // const progressMarker = document.querySelector('.progress-marker');
  const linesMob = [lineMob01, lineMob02, lineMob03, lineMob04, lineMob05];
  linesMob.forEach(line => {
 // мой код ....
  });
  const animateLine = (line, progress, start, end) => {
    // мой код ....
  };
  ScrollTrigger.create({
    // мой код ....
  });

    const timeline = gsap.timeline({
       // мой код ....
    });

    timeline.to({}, {
       // мой код ....
    });
    
    timeline.to(box, {
       // мой код ....
    }, `-=${scrollDuration / 10000}`); // Начало сразу после предыдущей анимации
    
    timeline.to({}, {
      // мой код ....
    }, `-=${scrollDuration / 3500}`);

    
    timeline.to(boxWrapper, {
    // мой код ....
    });

    const videoSteps = [videoStepsC, videoStepsD, videoStepsE, videoStepsF];
    timeline.to({}, {
      duration: scrollDuration / 10,
      // duration: 300,
      onUpdate: function() {
        // мой код ....
      }
    });


  ScrollTrigger.create({
  // мой код ....
  });

  const animation = gsap.timeline({ paused: true })
  .to(box, {
    transform: 'translate(-66%, 77%) scale(.3)',
    opacity: 0,
    duration: 0.7
  }, 0)
  .to(boxCookie, {
    transform: 'translate(-25%, 274%) scale(.3)',
    opacity: 0,
    duration: 0.7
  }, 0);

  // ScrollTrigger для запуска анимации
ScrollTrigger.create({
  trigger: logics,
  start: "top bottom",
  end: "center center",
  onEnter: () => {
    animation.play();
      videoSteps.forEach(video => {
        if (video.classList.contains('play')) {
          video.classList.remove('play');
          video.pause();
          video.currentTime = 0;
        }
      });
  },
  onLeaveBack: () => {
    animation.reverse();
      if (videoSteps[3].classList.contains('play')) {
        videoSteps[3].classList.add('play');
        videoSteps[3].play();
        videoSteps[3].playbackRate = 2;
      }
  },
  ease: "power1.in"
});
    

  
} // == end isMobile -----------