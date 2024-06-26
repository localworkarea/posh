document.addEventListener("DOMContentLoaded", function() {
  if (typeof gsap !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger,ScrollToPlugin)
    
    const animHandEye = document.querySelector('.hand-eye');
    const animGirlYouga = document.querySelector('.girl-youga');
    const girlStars = document.querySelectorAll('.girl-analys__stars path');
    const animGirlPuzzle = document.querySelector('.girl-puzzle');
    const animMenStar = document.querySelector('.men-star');
   

    const retailSteps = document.querySelector('.retail__steps');
    const retailShelf = document.querySelector('.retail__shelf');

    const designCookie = document.querySelector('.design__cookie');
    const cookieWrapper = document.querySelector('.cookie-wrapper');

    const designBoxes = document.querySelector('.design__boxes');
    const box = document.querySelector('.box');
    const boxBox = document.querySelector('.box-box');
    const boxItems = document.querySelectorAll('.box .box-item');

    const boxWrapper = document.querySelectorAll('.boxes-wrapper');
    
    const boxCookie = document.querySelector('.box-cookie');
    const boxCookieItem = document.querySelector('.box-cookie-item');
    
    const cookiesWrapper = document.querySelector('.cookies');
    const cookies = document.querySelectorAll('.cookies .cookie');

    const stepsPin = document.querySelector('.steps-pin');
    const stepsItems = document.querySelectorAll('.steps-pin .steps');
    const stepsAboutItems = document.querySelectorAll('.steps__about');

    const boxSteps = document.querySelector('.box-steps');
    const videoStepsC = document.querySelector('.video-steps-c');
    
    
    const stepsDesign = document.querySelector('.steps-design');
    const stepsDesignItems = document.querySelectorAll('.steps-design .steps-design__item');
    
    const logics = document.querySelector('.logics');


    const icon01 = document.querySelector(".ic-01");
    const icon02 = document.querySelector(".ic-02");
    const icon03 = document.querySelector(".ic-03");

    const stepsRetail01 = document.querySelector(".steps-retail-01");
    const stepsRetail02 = document.querySelector(".steps-retail-02");
    const stepsRetail03 = document.querySelector(".steps-retail-03");
 

      let breakPoint = 40.686;
      let mm = gsap.matchMedia();
      let scrollDuration = window.innerHeight * 2;

      mm.add({
        isDesktop: `(min-width: ${breakPoint}em)`,
        isMobile: `(max-width: ${breakPoint}em)`
      }, (context) => {
      
        let {isDesktop, isMobile} = context.conditions;

       
      
        if (isDesktop) {

          // === Retail__Steps =============================================
          
          ScrollTrigger.create({
              trigger: retailSteps,
              start: "center center",
              end: `+=${scrollDuration}`,
              pin: true,
              pinSpacing: true,
              scrub: true,
              onUpdate: (self) => {
                  let progress = self.progress;
              
                  if (progress < 0.33) {
                      gsap.to(".steps-retail-01", { opacity: 1, duration: 0.3 });
                      gsap.to(".steps-retail-02", { opacity: 0, duration: 0.3 });
                      gsap.to(".steps-retail-03", { opacity: 0, duration: 0.3 });
                  
                      icon01.classList.add("_active-anim");
                      icon01.classList.remove("_active-anim-before");
                      stepsRetail01.classList.add("_active");

                      icon02.classList.remove("_active-anim");
                      stepsRetail02.classList.remove("_active");

                      icon03.classList.remove("_active-anim");
                      stepsRetail03.classList.remove("_active");

                  } else if (progress < 0.66) {
                      gsap.to(".steps-retail-01", { opacity: 0, duration: 0.3 });
                      gsap.to(".steps-retail-02", { opacity: 1, duration: 0.3 });
                      gsap.to(".steps-retail-03", { opacity: 0, duration: 0.3 });
                  
                      icon01.classList.remove("_active-anim");
                      icon01.classList.add("_active-anim-before");
                      stepsRetail01.classList.remove("_active");

                      icon02.classList.add("_active-anim");
                      stepsRetail02.classList.add("_active");


                      icon03.classList.remove("_active-anim");
                      stepsRetail03.classList.remove("_active");

                  } else if (progress < 1) {
                      gsap.to(".steps-retail-01", { opacity: 0, duration: 0.3 });
                      gsap.to(".steps-retail-02", { opacity: 0, duration: 0.3 });
                      gsap.to(".steps-retail-03", { opacity: 1, duration: 0.3 });
                  
                      icon01.classList.remove("_active-anim-before");
                      
                      icon02.classList.remove("_active-anim");
                      stepsRetail02.classList.remove("_active");

                      icon03.classList.add("_active-anim");
                      stepsRetail03.classList.add("_active");
                  }
              },
              onLeave: () => {

                icon03.classList.remove("_active-anim");
                stepsRetail03.classList.remove("_active");
              },
              onLeaveBack: () => {
                  icon01.classList.remove("_active-anim");
                  icon01.classList.remove("_active-anim-before");
                  stepsRetail01.classList.remove("_active");
              }
          });
          // ==========================================

          // === Design__Cookie =============================================
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: designCookie,
              start: "center center",
              endTrigger: designBoxes,
              end: "center center",
              scrub: true,
              pin: true,
              pinSpacing: true,
            }
          });

          tl.to(cookieWrapper, {
            keyframes: [
              { rotation: 90, xPercent: 45, duration: 0.15, ease: "none" },
              { rotation: 180, xPercent: 150, duration: 0.25, ease: "none" },
              { rotation: 260, xPercent: 150, duration: 0.3, ease: "none" },
              { rotation: 340, xPercent: 60, duration: 0.20, ease: "none" },
              { rotation: 360, xPercent: 40, duration: 0.1, ease: "none" }
            ]
          },0);
          
          // Вторая анимация для designBoxes и box
          const timeline = gsap.timeline({
            scrollTrigger: {
              trigger: designBoxes,
              start: `center center`,
              end: `+=${scrollDuration * 2}`,
              pin: true,
              pinSpacing: true,
              scrub: true,
            }
          });
          
          // Анимация cookies
          timeline.to({}, {
            duration: scrollDuration / 1000,
            onUpdate: function() {
              let progress = this.progress();
              let index = Math.floor(progress * (cookies.length - 1));
              cookies.forEach((cookie, i) => {
                if (i === index) {
                  cookie.classList.add('active');
                } else {
                  cookie.classList.remove('active');
                }
              });
              if (progress === 0) {
                cookies[0].classList.remove('active');
              }
            }
          });
          
          // Анимация box после анимации cookies
          timeline.to(box, {
            ease: "power2.out",
            left: '50%',
            transform: 'translate(-48%, -50%)',
            duration: scrollDuration / 1500
          }, `-=${scrollDuration / 10000}`); // Начало сразу после предыдущей анимации
          
          // Анимация boxItems после анимации box
          timeline.to({}, {
            duration: scrollDuration / 1500,
            onUpdate: function() {
              let progress = this.progress();
              let index = Math.floor(progress * (boxItems.length - 1));
              boxItems.forEach((boxItem, i) => {
                if (i === index) {
                  boxItem.classList.add('active');
                } else {
                  boxItem.classList.remove('active');
                }
              });
            }
          }, `-=${scrollDuration / 3500}`);

          
          timeline.to(boxWrapper, {
            ease: "power2.out",
            transform: 'translate(0%, 87%)',
          });

          timeline.to({}, {
            duration: scrollDuration / 500,
            onUpdate: function() {
              boxCookieItem.classList.add('not-active');
              cookiesWrapper.classList.add('not-active');
              stepsPin.classList.add('active');
              boxSteps.classList.add('active');
          
              let progress = this.progress();
              let adjustedProgress = Math.min(progress / 0.8, 1); // Сжимаем время до 80%, чтобы перебор осуществлялся немного раньше чем конец прогресса.
              let index = Math.floor(adjustedProgress * (stepsItems.length - 1));
          
              stepsItems.forEach((step, i) => {
                if (i === index) {
                  step.classList.add('active');
                  if (i === 0) {
                    if (!videoStepsC.classList.contains('play')) {
                      videoStepsC.classList.add('play');
                      videoStepsC.play();
                      videoStepsC.playbackRate = 2;
                    }
                  } else if (i > 0 && i - 1 < stepsDesignItems.length) {
                    stepsDesignItems[i - 1].classList.add('active');
                  }
                } else {
                  step.classList.remove('active');
                  if (i === 0) {
                    if (videoStepsC.classList.contains('play')) {
                      videoStepsC.classList.remove('play');
                      videoStepsC.pause();
                      videoStepsC.currentTime = 0;
                    }
                  } else if (i - 1 < stepsDesignItems.length) {
                    stepsDesignItems[i - 1].classList.remove('active');
                  }
                }
              });
          
              if (progress === 0) {
                boxCookieItem.classList.remove('not-active');
                cookiesWrapper.classList.remove('not-active');
                stepsPin.classList.remove('active');
                boxSteps.classList.remove('active');
                stepsItems[0].classList.remove('active');
          
                if (videoStepsC.classList.contains('play')) {
                  videoStepsC.classList.remove('play');
                  videoStepsC.pause();
                  videoStepsC.currentTime = 0;
                }
          
                stepsDesignItems.forEach(item => {
                  item.classList.remove('active');
                });
              }
            }
          });
          

          ScrollTrigger.create({
            trigger: designBoxes,
            start: "center center",
            onUpdate: () => {
              cookieWrapper.classList.add('not-active');
            },
            onLeaveBack: () => {
              cookieWrapper.classList.remove('not-active');
            },
          });


          ScrollTrigger.create({
            trigger: logics,
            start: "top bottom",
            end: "center center",
            scrub: true,
            onUpdate: (self) => {
              const progress = self.progress;
              gsap.to(box, {
                // transform: 'translate(-15%, 80%) scale(0.1)',
                transform: `translate(${(-48 + 28 * progress)}%, ${-50 + 130 * progress}%) scale(${1 - 0.9 * progress})`,
                opacity: 1 - progress,
              });
              gsap.to(boxCookie, {
                // transform: 'translate(40%, 270%) scale(0.1)',
                transform: `translate(${(0 + 40 * progress)}%, ${0 + 270 * progress}%) scale(${1 - 0.9 * progress})`,
                opacity: 1 - progress,
              });
          
            },
          });
          
        } // == end isDesktop -----------
      
        if (isMobile) {
          ScrollTrigger.create({
              id: "shelfPin",
              trigger: retailShelf,
              start: "top top",
              end: "+=100%",
              pin: true,
              pinSpacing: true,
              scrub: true,
              onUpdate: (self) => {
                  let progress = self.progress;
                  let shelfCardsWidth = document.querySelector(".shelf__cards").offsetWidth;
                  let windowWidth = window.innerWidth;
                  let maxX = shelfCardsWidth - windowWidth + 50;
                  let translateX = progress * -maxX;
                  gsap.to(".shelf__cards", { x: translateX, duration: 0.3 });
              },
          });

          ScrollTrigger.create({
            trigger: stepsRetail01,
            start: "top center",
            end: "bottom center",
            onEnter: () => icon01.classList.add("_active-anim"),
            onLeave: () => icon01.classList.remove("_active-anim"),
            onLeaveBack: () => icon01.classList.remove("_active-anim"),
            onEnterBack: () => icon01.classList.add("_active-anim")
          });
          ScrollTrigger.create({
            trigger: stepsRetail02,
            start: "center center",
            end: "bottom center",
            onEnter: () => icon02.classList.add("_active-anim"),
            onLeave: () => icon02.classList.remove("_active-anim"),
            onLeaveBack: () => icon02.classList.remove("_active-anim"),
            onEnterBack: () => icon02.classList.add("_active-anim")
          });
          ScrollTrigger.create({
            trigger: stepsRetail03,
            start: "top center",
            end: "bottom center",
            onEnter: () => icon03.classList.add("_active-anim"),
            onLeave: () => icon03.classList.remove("_active-anim"),
            onLeaveBack: () => icon03.classList.remove("_active-anim"),
            onEnterBack: () => icon03.classList.add("_active-anim")
          });

           // === Design__Cookie =============================================
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: designCookie,
              start: "center center",
              endTrigger: designBoxes,
              end: "center center",
              scrub: true,
              pin: true,
              pinSpacing: true,
            }
          });

          tl.to(cookieWrapper, {
            keyframes: [
              { rotation: 150, xPercent: 145, duration: 0.11, ease: "none" },
              { rotation: 230, xPercent: 145, duration: 0.18, ease: "none" },
              { rotation: 360, xPercent: 20, duration: 0.11, ease: "none" },
              { rotation: 430, xPercent: 20, duration: 0.11, ease: "none" },
              { rotation: 530, xPercent: 145, duration: 0.1, ease: "none" },
              { rotation: 600, xPercent: 145, duration: 0.23, ease: "none" },
              { rotation: 720, xPercent: 0, duration: 0.16, ease: "none" }
            ]
          });

            const timeline = gsap.timeline({
              scrollTrigger: {
                trigger: designBoxes,
                start: `center center`,
                end: `+=${scrollDuration * 2}`,
                pin: true,
                pinSpacing: true,
                scrub: true,
              }
            });

            timeline.to({}, {
              duration: scrollDuration / 100,
              onUpdate: function() {
                let progress = this.progress();
                let index = Math.floor(progress * (cookies.length - 1));
                cookies.forEach((cookie, i) => {
                  if (i === index) {
                    cookie.classList.add('active');
                  } else {
                    cookie.classList.remove('active');
                  }
                });
                if (progress === 0) {
                  cookies[0].classList.remove('active');
                }
              }
            });
            
            timeline.to(box, {
              ease: "power2.out",
              left: '50%',
              transform: 'translate(-48%, -50%)',
              duration: scrollDuration / 100
            }, `-=${scrollDuration / 10000}`); // Начало сразу после предыдущей анимации
            
            timeline.to({}, {
              duration: scrollDuration / 100,
              onUpdate: function() {
                let progress = this.progress();
                let index = Math.floor(progress * (boxItems.length - 1));
                boxItems.forEach((boxItem, i) => {
                  if (i === index) {
                    boxItem.classList.add('active');
                  } else {
                    boxItem.classList.remove('active');
                  }
                });
              }
            }, `-=${scrollDuration / 3500}`);
  
            
            timeline.to(boxWrapper, {
              ease: "power2.out",
              transform: 'translate(0%, 178%)',
              duration: scrollDuration / 100
            });
  
            timeline.to({}, {
              duration: scrollDuration / 10,
              onUpdate: function() {
                boxCookieItem.classList.add('not-active');
                cookiesWrapper.classList.add('not-active');
                stepsPin.classList.add('active');
                boxSteps.classList.add('active');
            
                let progress = this.progress();
                let adjustedProgress = Math.min(progress / 0.8, 1);
                let index = Math.floor(adjustedProgress * (stepsItems.length - 1));
                let contentProgress = (adjustedProgress * (stepsItems.length - 1)) - index;
            
                stepsItems.forEach((step, i) => {
                  if (i === index) {
                    step.classList.add('active');
            
                    const stepAbout = step.querySelector('.steps__about');
                    const stepAboutWr = step.querySelector('.steps__about_wr');
            
                    let aboutHeight = stepAboutWr.scrollHeight - stepAbout.clientHeight;
                    stepAboutWr.style.transform = `translateY(-${aboutHeight * contentProgress}px)`;
            
                    if (i === 0) {
                      if (!videoStepsC.classList.contains('play')) {
                        videoStepsC.classList.add('play');
                        videoStepsC.play();
                        videoStepsC.playbackRate = 2;
                      }
                    } else if (i > 0 && i - 1 < stepsDesignItems.length) {
                      stepsDesignItems[i - 1].classList.add('active');
                    }
                  } else {
                    step.classList.remove('active');
                    const stepAboutWr = step.querySelector('.steps__about_wr');
                    if (stepAboutWr) {
                      stepAboutWr.style.transform = 'translateY(0)';
                    }
                    if (i === 0) {
                      if (videoStepsC.classList.contains('play')) {
                        videoStepsC.classList.remove('play');
                        videoStepsC.pause();
                        videoStepsC.currentTime = 0;
                      }
                    } else if (i - 1 < stepsDesignItems.length) {
                      stepsDesignItems[i - 1].classList.remove('active');
                    }
                  }
                });
            
                // Прокручивание элемента .steps__about_wr на последнем stepsItems
                if (adjustedProgress >= 1) {
                  const lastStep = stepsItems[stepsItems.length - 1];
                  const lastStepAbout = lastStep.querySelector('.steps__about');
                  const lastStepAboutWr = lastStep.querySelector('.steps__about_wr');
                  let remainingProgress = (progress - 0.8) / 0.2; // Прогресс от 0 до 1 для последних 20% времени
                  let aboutHeight = lastStepAboutWr.scrollHeight - lastStepAbout.clientHeight;
                  lastStepAboutWr.style.transform = `translateY(-${aboutHeight * remainingProgress}px)`;
                }
                // ----------------------------
            
                if (progress === 0) {
                  boxCookieItem.classList.remove('not-active');
                  cookiesWrapper.classList.remove('not-active');
                  stepsPin.classList.remove('active');
                  boxSteps.classList.remove('active');
                  stepsItems[0].classList.remove('active');
            
                  if (videoStepsC.classList.contains('play')) {
                    videoStepsC.classList.remove('play');
                    videoStepsC.pause();
                    videoStepsC.currentTime = 0;
                  }
            
                  stepsDesignItems.forEach(item => {
                    item.classList.remove('active');
                  });
                }
              }
            });
            
  
          ScrollTrigger.create({
            trigger: designBoxes,
            start: "center center",
            onUpdate: () => {
              cookieWrapper.classList.add('not-active');
            },
            onLeaveBack: () => {
              cookieWrapper.classList.remove('not-active');
            },
          });


          ScrollTrigger.create({
            trigger: logics,
            start: "top bottom",
            end: "top top",
            scrub: true,
            onUpdate: (self) => {
              const progress = self.progress;
              gsap.to(box, {
                transform: `translate(${(-48 + -20 * progress)}%, ${-50 + 130 * progress}%) scale(${1 - 0.7 * progress})`,
                opacity: 1 - progress,
              });
              gsap.to(boxCookie, {
                transform: `translate(${(0 + -25 * progress)}%, ${0 + 274 * progress}%) scale(${1 - 0.7 * progress})`,
                opacity: 1 - progress,
              });
          
            },
          });
            
            
        
          
        } // == end isMobile -----------

        window.addEventListener('resize', () => {
          ScrollTrigger.refresh();
        });
      
        window.addEventListener('orientationchange', () => {
          ScrollTrigger.refresh();
        });
      

        ScrollTrigger.refresh();
      });


      function checkScreenWidth() {
          if (window.innerWidth > 650) {
              document.querySelector('.shelf__cards').style.transform = 'unset';
          }
      }
      window.addEventListener('resize', checkScreenWidth);
      window.addEventListener('orientationchange', checkScreenWidth);
      document.addEventListener('DOMContentLoaded', checkScreenWidth);

  
    if (animHandEye) {
      gsap.set(".eye-01, .eye-02, .eye-03", { transformOrigin: "center center" });
      gsap.to(".eye-01", {
        duration: 0.9,
        // repeatDelay: 1,
        repeat: -1,
        yoyo: true,
        keyframes: [
          { 
            attr: { d: "M133.84 26C133.84 61.6774 149.195 68 171.775 68" }, 
            ease: "power4.InOut", 
            time: 0 
          },
          { 
            attr: { d: "M133.84 26C145.879 52.0493 161.452 58.3072 171.775 68" }, 
            ease: "power4.InOut", 
            time: 0.15 
          },
          { 
            attr: { d: "M133.84 26C133.84 61.6774 149.195 68 171.775 68" }, 
            ease: "power4.InOut", 
            time: 0.25 
          },
        ]
      });
      gsap.to(".eye-02", {
        duration: 0.9,
        // repeatDelay: 1,
        repeat: -1,
        yoyo: true,
        keyframes: [
          { attr: { d: "M133.84 26C166.202 32.3737 175.199 41.1303 171.775 67.5484" }, ease: "power4.InOut", time: 0 },
          { attr: { d: "M133.84 26C152.493 51.3003 163.641 57.0629 171.775 67.5484" }, ease: "power4.InOut", time: 0.15 },
          { attr: { d: "M133.84 26C166.202 32.3737 175.199 41.1303 171.775 67.5484" }, ease: "power4.InOut", time: 0.25 },
        ]
      });
      gsap.to(".eye-03", {
        duration: 0.9,
        // repeatDelay: 1,
        repeat: -1,
        yoyo: true,
        keyframes: [
          { attr: { cx: 155.846, cy: 49.5828, rx: 11.0229, ry: 5.99582 }, ease: "power4.InOut", time: 0 },
          { attr: { cx: 153.224, cy: 50.8414, rx: 2.68225, ry: 5.41558 }, ease: "power4.InOut", time: 0.15 },
          { attr: { cx: 155.846, cy: 49.5828, rx: 11.0229, ry: 5.99582 }, ease: "power4.InOut", time: 0.25 },
        ]
      });
    }
    
    if (animGirlYouga) {
      // .hair ==============================================
      gsap.to(".hair", {
        transformOrigin: "50% 50%",
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        keyframes: [
          {  
             attr: { d: "M170.079 97.4978C170.049 97.3431 170.018 97.2038 170.003 97.0645C169.895 95.2384 169.849 93.4123 169.665 91.6017C169.465 89.6364 168.497 88.0424 167.068 86.6961C166.161 85.8449 165.208 85.1795 163.994 84.7152C163.134 84.3747 162.335 84.3593 161.536 84.4367C160.844 84.514 160.183 84.9783 159.507 85.2568C158.723 85.5973 157.924 85.9223 157.156 86.2782C155.896 86.8508 154.651 87.5008 153.36 87.996C152.07 88.4912 150.733 88.9709 149.304 88.8935C147.383 88.7697 145.447 88.7388 143.541 88.5067C142.65 88.3983 141.789 87.965 140.913 87.671C140.007 87.3615 139.054 87.0984 138.193 86.6806C135.643 85.489 132.969 85.8604 130.326 85.9842C129.142 86.0461 128.097 86.727 127.022 87.3305C125.854 87.996 125.27 88.9554 124.686 90.0078C124.133 91.0137 123.979 92.1898 123.656 93.2731C123.195 94.8206 123.518 96.3681 123.242 97.8847C122.596 97.374 120.675 97.5288 119.922 97.8383C119.108 98.1633 118.601 98.7513 118.278 99.4323C118.032 99.912 118.002 100.701 118.232 101.181C118.57 101.908 119.093 102.698 119.753 103.084C120.568 103.564 121.597 103.765 122.596 103.425C122.888 103.332 123.195 103.286 123.595 103.193C123.487 103.564 123.38 103.765 123.365 103.967C123.318 104.477 123.195 105.034 122.658 105.05C122.012 105.065 121.321 104.911 120.721 104.647C120.23 104.431 119.907 103.889 119.446 103.58C117.94 102.574 116.342 101.676 114.913 100.593C113.76 99.7108 112.777 98.5811 111.716 97.5752C111.025 96.9252 110.272 96.3372 109.611 95.6408C108.889 94.8825 108.259 94.0468 107.598 93.2421C107.168 92.7005 106.753 92.1434 106.353 91.5863C105.892 90.9518 105.431 90.3018 105.001 89.6364C104.433 88.7543 103.833 87.8876 103.357 86.9591C102.65 85.5509 101.959 84.1271 101.39 82.657C100.914 81.4035 100.714 80.0262 100.191 78.7882C99.6843 77.5656 99.7612 76.2657 99.4077 75.0741C98.7009 72.7682 99.1311 70.4624 99.1158 68.1566C99.1158 67.1352 99.5153 66.1139 99.7612 65.0925C100.13 63.5759 100.468 62.0438 100.929 60.5582C101.19 59.7535 101.682 59.0416 102.082 58.2833C102.543 57.3858 102.957 56.4418 103.511 55.5906C104.11 54.6776 104.801 53.811 105.508 52.9753C106.184 52.1706 106.876 51.3504 107.675 50.6695C108.551 49.9112 109.55 49.2612 110.503 48.5958C111.209 48.1006 111.932 47.6518 112.669 47.203C112.961 47.0328 113.315 46.9399 113.637 46.8161C115.082 46.259 116.572 45.965 118.063 45.5936C120.353 45.021 122.688 45.2841 124.978 45.0055C125.67 44.9281 126.392 45.1912 127.083 45.1603C128.482 45.1138 129.926 45.1912 131.248 44.8198C132.907 44.3555 134.598 44.3246 136.273 44.0615C137.302 43.8913 138.347 43.5044 139.254 42.9937C139.945 42.5913 140.498 41.8795 141.021 41.214C141.897 40.0998 142.696 38.9237 143.495 37.763C143.664 37.5309 143.756 37.2369 143.848 36.9583C144.248 35.7822 144.632 34.5906 145.016 33.4145C145.293 32.5324 145.539 31.6348 145.815 30.7527C146.046 30.0099 146.307 29.2826 146.553 28.5552C146.906 27.5184 147.183 26.4506 147.659 25.4756C148.166 24.4388 148.858 23.4793 149.503 22.5044C149.98 21.777 150.487 21.0497 151.025 20.3688C151.393 19.92 151.808 19.4867 152.269 19.1462C153.237 18.4653 154.206 17.7689 155.251 17.2428C156.326 16.6856 157.54 16.4535 158.723 16.175C159.861 15.8964 160.952 15.7726 162.073 15.85C162.98 15.9119 163.887 16.1595 164.763 16.4226C165.5 16.6547 166.207 17.0106 166.929 17.3201C167.559 17.5987 168.189 17.9237 168.819 18.1713C170.54 18.8522 171.647 18.357 172.615 16.9951C173.506 15.7262 174.336 14.4262 175.258 13.1882C175.765 12.4918 176.426 11.9038 176.995 11.2538C177.471 10.7122 177.901 10.1241 178.393 9.58247C178.992 8.91703 179.607 8.26706 180.252 7.66352C180.928 7.04451 181.666 6.50287 182.373 5.91481C182.68 5.66721 182.941 5.3577 183.264 5.12557C184.155 4.47561 185.031 3.79469 185.999 3.23758C187.213 2.54119 188.443 1.86027 189.734 1.34959C190.871 0.91628 192.162 0.885329 193.253 0.390118C194.482 -0.151518 195.696 0.0187102 196.91 0.0496609C197.816 0.0651362 198.723 0.312742 199.599 0.591298C200.321 0.807952 200.982 1.21031 201.674 1.53529C203.241 2.27811 204.455 3.45423 205.592 4.73869C206.406 5.66721 207.282 6.58025 207.959 7.6171C208.911 9.07178 209.756 10.6038 210.54 12.1668C210.986 13.0335 211.216 13.9929 211.554 14.9215C211.939 15.9583 212.307 16.9952 212.691 18.0475C212.722 18.1248 212.722 18.2022 212.722 18.2796C212.814 19.9664 212.968 21.6532 212.999 23.34C213.014 24.1448 212.876 24.9649 212.707 25.7697C212.507 26.6827 212.261 27.5958 211.939 28.4778C211.385 29.9171 210.817 31.3563 210.11 32.7181C209.587 33.7085 208.85 34.5751 208.158 35.4727C207.574 36.231 206.929 36.9583 206.284 37.6702C205.807 38.1964 205.254 38.6451 204.747 39.1558C204.025 39.8832 203.272 40.595 202.611 41.3843C201.843 42.2973 201.136 43.2723 200.444 44.2472C200.214 44.5722 200.121 45.021 200.029 45.4388C199.891 46.0733 199.814 46.7233 199.676 47.3732C199.507 48.116 199.292 48.8589 199.092 49.6017C199.046 49.8029 198.984 49.9886 198.938 50.1743C198.723 51.0564 198.493 51.923 198.277 52.8051C197.97 54.0895 197.678 55.374 197.371 56.6584C197.202 57.4012 197.002 58.1286 196.864 58.8714C196.664 59.9237 196.387 60.9606 196.357 62.0129C196.28 64.3806 196.249 66.7638 196.357 69.1315C196.418 70.5243 196.649 71.9171 197.002 73.2789C197.402 74.8419 197.955 76.374 198.523 77.8906C199.092 79.4536 199.722 80.9702 200.352 82.5022C200.844 83.6938 201.382 84.8545 201.873 86.0461C202.273 87.0056 202.611 87.9805 202.98 88.94C203.41 90.0852 203.932 91.1994 204.286 92.36C204.685 93.7373 205.008 95.1611 205.254 96.5848C205.454 97.73 205.484 98.9216 205.607 100.082C205.623 100.283 205.746 100.454 205.776 100.655C205.823 101.042 205.899 101.444 205.869 101.846C205.838 102.218 205.638 102.558 205.592 102.93C205.346 104.694 205.223 106.458 204.87 108.207C204.716 108.981 204.163 109.661 203.794 110.404C203.671 110.652 203.61 110.915 203.487 111.163C202.596 112.88 201.458 114.381 200.045 115.712C198.754 116.919 197.386 118.003 195.85 118.885C195.004 119.364 194.098 119.751 193.206 120.169C192.223 120.633 191.239 121.113 190.225 121.516C189.641 121.748 189.027 121.856 188.412 122.011C187.705 122.196 186.998 122.398 186.291 122.583C185.339 122.815 184.386 123.094 183.418 123.249C182.419 123.419 181.328 123.28 180.421 123.667C179.33 124.115 178.27 124.007 177.21 123.93C175.842 123.837 174.49 123.543 173.137 123.295C171.754 123.048 170.371 122.785 169.004 122.444C167.882 122.15 166.776 121.748 165.685 121.361C165.362 121.252 165.008 121.082 164.778 120.85C164.64 120.711 164.594 120.308 164.686 120.123C165.224 118.993 165.854 117.894 166.407 116.765C167.006 115.542 167.605 114.32 168.159 113.081C168.481 112.354 168.62 111.534 168.973 110.822C169.849 109.089 169.895 107.201 170.079 105.328C170.11 104.926 170.356 104.539 170.54 104.09C172.123 104.74 173.583 104.4 174.613 103.115C175.565 101.924 175.688 99.8037 174.628 98.5656C173.399 97.1264 171.816 96.9562 170.079 97.4978Z" }, 
            ease: "steps(1)", 
          },
          { 
            attr: { d: "M170.697 101.013C171.765 101.511 173.468 101.277 174.04 100.749C174.799 100.066 175.371 99.3354 175.433 98.31C175.495 97.3157 175.495 96.3369 174.814 95.4979C173.947 94.4414 172.044 93.7733 170.248 94.4569C170.217 94.3326 170.171 94.2239 170.171 94.1151C170.062 92.2818 170 90.4641 169.83 88.6307C169.644 86.5955 168.654 84.9486 167.183 83.5658C166.27 82.7113 165.279 82.0743 164.087 81.5927C163.174 81.2198 162.323 81.1732 161.549 81.3441C160.543 81.5616 159.645 82.2297 158.701 82.6803C158.5 82.7735 158.252 82.8046 158.051 82.8978C157.153 83.3483 156.271 83.8455 155.357 84.2495C154.645 84.5602 153.871 84.6845 153.159 84.9952C150.853 85.974 148.438 85.8342 146.024 85.7565C145.141 85.7254 144.243 85.6167 143.392 85.3992C142.2 85.104 141.008 84.7466 139.863 84.3271C139.089 84.0475 138.408 83.5192 137.649 83.224C137.015 82.991 136.318 82.8667 135.653 82.8356C133.857 82.789 132.046 82.7269 130.251 82.8512C129.028 82.9288 127.882 83.3949 126.938 84.2495C126.721 84.4514 126.396 84.5136 126.164 84.7C125.901 84.902 125.653 85.135 125.468 85.3992C124.941 86.2071 124.431 87.015 123.966 87.8539C123.765 88.2268 123.672 88.6618 123.626 89.0813C123.44 90.6194 123.285 92.1575 123.13 93.6957C123.099 94.0685 123.084 94.4414 123.084 94.7366C122.728 94.6434 122.418 94.5036 122.109 94.488C121.01 94.4103 119.957 94.4414 118.982 95.2027C117.883 96.0572 117.511 97.1914 118.285 98.4188C118.657 99.0091 119.013 99.786 119.57 100.066C120.422 100.501 121.428 100.765 122.434 100.376C122.712 100.268 123.037 100.268 123.455 100.19C123.316 100.516 123.192 100.672 123.208 100.827C123.301 101.821 122.48 102.008 121.877 102.396C120.762 103.111 119.539 102.909 118.332 102.847C117.79 102.816 116.768 101.34 116.459 100.827C115.639 99.4908 116.351 97.9527 115.731 96.5854C115.313 95.6688 115.36 94.5191 114.849 93.6646C114.214 92.6081 114.354 91.4118 113.874 90.3708C113.472 89.5008 113.085 88.6308 112.729 87.7607C112.589 87.4034 112.605 86.9839 112.45 86.6576C111.8 85.2749 111.134 83.9076 110.422 82.5404C110.236 82.1831 109.896 81.9034 109.648 81.5772C108.611 80.2566 107.791 78.7806 106.537 77.5998C105.562 76.6676 104.71 75.549 104.045 74.3838C103.472 73.3894 103.271 72.1776 102.884 71.0745C102.698 70.5773 102.389 70.1112 102.218 69.6141C102.033 69.0392 101.94 68.4333 101.816 67.8274C101.615 66.7709 101.413 65.7144 101.212 64.6579C101.15 64.3627 101.073 64.052 101.057 63.7568C101.026 62.6537 100.965 61.5506 101.026 60.4631C101.088 59.0026 101.135 57.5267 101.398 56.0973C101.584 55.103 102.125 54.1708 102.466 53.2075C102.652 52.6793 102.745 52.1199 102.822 51.5762C102.961 50.7372 103.023 49.8982 103.163 49.0748C103.333 48.0338 103.472 46.9929 103.735 45.9675C103.967 45.0664 104.277 44.1653 104.649 43.3107C105.237 41.9746 105.546 40.5142 106.413 39.2868C107.342 37.9507 108.069 36.4747 109.06 35.2162C109.942 34.0976 111.057 33.1654 112.109 32.1866C112.883 31.4564 113.657 30.6796 114.54 30.0892C115.468 29.4677 116.505 29.0172 117.527 28.5511C118.44 28.116 119.384 27.7121 120.344 27.3703C120.917 27.1683 121.551 27.1683 122.14 26.9819C123.889 26.4536 125.684 26.4847 127.48 26.5002C128.238 26.5002 128.981 26.6245 129.74 26.6245C130.901 26.609 132.062 27.044 133.223 27.1839C134.352 27.3081 135.482 27.3392 136.612 27.3392C138.733 27.3392 140.838 27.3081 142.959 27.2615C144.445 27.2149 145.9 26.8576 147.169 26.0963C147.912 25.6457 148.531 24.9311 149.135 24.2785C149.909 23.4396 150.667 22.5695 151.333 21.6373C151.797 21.0003 152.169 20.2701 152.494 19.5399C153.159 18.0484 153.778 16.5258 154.429 15.0343C155.032 13.636 155.605 12.2222 156.317 10.8861C156.781 10.016 157.416 9.22364 158.02 8.43128C158.53 7.76321 159.041 7.0796 159.629 6.47368C160.388 5.69686 161.177 4.88896 162.075 4.29857C163.159 3.58389 164.32 2.96243 165.542 2.54294C166.75 2.13899 168.035 1.71951 169.366 1.98363C169.753 2.06131 170.109 2.3099 170.496 2.44972C171.842 2.94689 173.22 3.38192 174.551 3.91016C176.207 4.57823 177.879 4.73359 179.613 4.37625C179.767 4.34518 179.922 4.34518 180.077 4.34518C181.408 4.39179 182.631 3.86355 183.9 3.58389C184.504 3.44406 185.108 3.38192 185.696 3.22655C187.027 2.85367 188.358 2.43419 189.689 2.07685C190.247 1.92148 190.85 1.87487 191.423 1.78165C192.491 1.59522 193.544 1.37771 194.612 1.22234C195.401 1.09805 196.191 0.973756 196.98 1.00483C198.28 1.05144 199.611 0.989293 200.834 1.59522C201.206 1.78165 201.686 1.75058 202.073 1.90595C203.574 2.54294 205.091 3.13333 206.515 3.89462C207.8 4.57823 208.868 5.60364 209.874 6.64458C210.756 7.56124 211.638 8.46235 212.443 9.42562C212.939 10.0315 213.31 10.7462 213.713 11.4143C214.239 12.2999 214.827 13.1699 215.199 14.1176C215.632 15.2207 215.895 16.4015 216.189 17.5512C216.39 18.3436 216.53 19.167 216.685 19.9749C217.118 22.2588 217.087 24.5271 216.7 26.811C216.685 26.9197 216.685 27.0129 216.669 27.1217C216.39 28.7686 216.205 30.4465 215.802 32.0623C215.431 33.5227 214.874 34.9521 214.27 36.3349C213.759 37.5156 213.093 38.6498 212.443 39.7529C211.669 41.0735 210.694 42.3009 210.029 43.6681C209.379 45.0042 208.341 46.0296 207.506 47.2104C206.794 48.2203 206.082 49.2302 205.354 50.2245C204.75 51.0635 204.069 51.8558 203.497 52.7259C203.032 53.425 202.692 54.2018 202.289 54.9321C201.732 55.9419 201.128 56.9207 200.602 57.9461C200.122 58.8783 199.735 59.8571 199.317 60.8204C198.683 62.2187 198.002 63.6014 197.429 65.0308C197.104 65.8542 196.98 66.7398 196.717 67.5943C196.345 68.8372 195.896 70.0802 195.54 71.3231C195.386 71.8824 195.355 72.4883 195.246 73.0632C195.061 74.0264 194.813 74.9742 194.674 75.9374C194.426 77.5998 194.24 79.2778 194.008 80.9557C193.946 81.3597 193.621 81.7791 193.652 82.152C193.76 83.3017 193.977 84.4359 194.178 85.5701C194.318 86.3158 194.457 87.0771 194.674 87.7918C195.03 88.9259 195.463 90.0446 195.85 91.1632C195.958 91.4739 195.896 91.8468 195.989 92.1575C196.376 93.3072 196.763 94.4569 197.197 95.5756C197.8 97.1603 198.234 98.7606 198.033 100.485C197.924 101.355 197.909 102.241 197.738 103.08C197.429 104.587 197.181 106.14 196.609 107.539C196.005 108.999 195.123 110.366 194.225 111.671C193.544 112.666 192.661 113.536 191.841 114.437C190.603 115.804 189.287 117.063 187.708 118.041C186.95 118.507 186.284 119.144 185.495 119.548C184.597 119.999 183.637 120.418 182.662 120.558C180.882 120.838 179.086 121.04 177.291 120.993C175.557 120.947 173.824 120.589 172.105 120.294C171.068 120.108 170.031 119.813 169.025 119.502C168.05 119.207 167.09 118.834 166.131 118.461C165.697 118.29 165.202 118.15 164.846 117.855C164.273 117.358 164.939 116.907 165.109 116.534C165.589 115.431 166.254 114.406 166.812 113.334C167.152 112.681 167.446 112.013 167.74 111.33C168.205 110.289 168.669 109.232 169.118 108.176C169.319 107.71 169.505 107.228 169.598 106.731C169.846 105.255 170.031 103.763 170.279 102.287C170.279 101.821 170.511 101.448 170.697 101.013Z" }, 
            ease: "steps(1)", 
          },
          { 
            attr: { d: "M164.813 117.266C165.622 115.597 166.322 114.144 167.023 112.69C167.521 111.685 168.066 110.696 168.517 109.676C168.844 108.949 168.984 108.13 169.357 107.418C170.244 105.702 170.291 103.847 170.462 102.007C170.509 101.575 170.758 101.173 170.851 100.879C171.707 100.879 172.517 100.941 173.295 100.863C174.042 100.802 174.649 100.276 175.038 99.7194C176.049 98.2662 176.034 96.2718 175.022 95.0969C174.088 94.0147 172.221 93.5045 170.493 94.1847C170.462 94.092 170.416 94.0147 170.4 93.9374C170.291 92.2213 170.167 90.5053 170.073 88.7892C169.964 86.5939 168.984 84.8469 167.396 83.3628C166.478 82.5125 165.498 81.8632 164.284 81.3839C163.381 81.0283 162.556 81.0438 161.716 81.1056C161.062 81.1675 160.44 81.6003 159.786 81.8786C158.977 82.2342 158.09 82.4816 157.358 82.9608C155.958 83.8575 154.339 84.1976 152.845 84.8315C150.37 85.8828 147.849 85.5272 145.343 85.4499C144.176 85.419 143.025 84.8469 141.857 84.5223C141.468 84.4141 141.079 84.3213 140.69 84.2131C139.803 83.9348 138.885 83.7184 138.06 83.3319C135.43 82.0951 132.66 82.5434 129.936 82.6671C128.644 82.7289 127.477 83.4555 126.45 84.2595C125.968 84.6305 125.47 85.0479 125.174 85.5426C124.582 86.5475 124.116 87.6297 123.602 88.681C123.571 88.7428 123.555 88.8356 123.555 88.9129C123.415 90.5517 122.855 92.144 123.073 93.8137C123.104 94.0611 123.042 94.3239 123.026 94.5867C122.793 94.4476 122.59 94.262 122.388 94.2466C121.159 94.1693 119.96 94.1075 118.855 94.9578C117.813 95.7617 117.579 96.9212 118.139 98.1425C118.466 98.8846 118.995 99.503 119.556 99.7967C120.349 100.23 121.376 100.461 122.372 100.106C122.668 99.9977 122.979 99.9668 123.322 99.9049C123.151 100.941 122.933 101.791 122.015 102.224C121.517 102.456 120.987 102.765 120.458 102.811C119.166 102.904 117.859 102.966 116.583 102.827C115.712 102.734 114.887 102.286 114.046 102.007C112.21 101.374 110.903 100.075 109.891 98.5135C109.268 97.5705 108.91 96.4574 108.444 95.4215C108.054 94.5867 107.681 93.7364 107.307 92.9016C107.276 92.8243 107.245 92.7624 107.23 92.6851C106.95 91.5566 106.638 90.428 106.374 89.2994C106.094 88.109 105.876 86.8876 105.611 85.6972C105.004 82.8681 104.911 79.9925 105.066 77.1324C105.144 75.5555 105.347 73.9786 105.72 72.448C106.078 71.0103 106.56 69.5261 107.307 68.2584C108.459 66.295 109.673 64.3161 111.354 62.6928C112.21 61.8734 113.019 61.0231 113.797 60.1419C114.451 59.3998 114.715 58.4104 115.167 57.5601C116.241 55.5812 115.929 53.5096 115.929 51.4534C115.929 49.1344 115.852 46.8154 115.945 44.4965C115.992 43.3215 116.272 42.162 116.49 41.0025C116.63 40.2295 116.801 39.472 116.988 38.7144C117.268 37.6322 117.501 36.55 117.906 35.5142C118.248 34.6175 118.902 33.8291 119.229 32.9169C119.789 31.371 120.91 30.2578 121.999 29.1293C123.042 28.0471 124.209 27.0731 125.314 26.0527C125.89 25.5116 126.419 24.9242 127.026 24.414C127.695 23.8574 128.395 23.3163 129.127 22.8525C130.138 22.2187 131.166 21.6003 132.271 21.121C133.453 20.6108 134.714 20.2862 135.928 19.8378C139.227 18.6474 142.636 19.0803 146.013 19.1112C148.3 19.1421 150.604 19.3431 152.892 19.3586C154.183 19.374 155.475 19.2194 156.751 19.0339C157.95 18.8638 159.179 18.6629 160.3 18.2609C161.467 17.8435 162.556 17.3179 163.35 16.112C164.393 14.5351 165.638 13.02 167.287 11.9223C168.672 10.9947 169.933 9.88161 171.318 8.96948C172.127 8.44384 173.077 8.13464 173.979 7.7636C175.162 7.26888 176.345 6.74324 177.559 6.3722C178.384 6.12484 179.286 5.98571 180.142 6.00117C181.87 6.03209 183.597 6.07847 185.309 6.32582C186.632 6.5268 187.986 6.86692 189.216 7.40802C190.912 8.16556 192.531 9.10862 194.118 10.0671C194.709 10.4227 195.192 11.0102 195.612 11.5667C196.328 12.5098 197.355 12.7726 198.398 13.0818C199.285 13.3446 200.172 13.6075 201.028 13.9321C202.102 14.3341 203.176 14.7051 204.203 15.2153C205.386 15.8028 206.506 16.5139 207.642 17.1942C208.203 17.5343 208.763 17.8899 209.292 18.2918C210.226 18.9875 211.222 19.6368 212.031 20.4717C213.261 21.7239 214.49 23.0226 215.439 24.4758C216.451 26.0218 217.245 27.7069 217.789 29.5158C218.21 30.9226 218.241 32.3604 218.614 33.7209C219.19 35.8389 218.972 37.9414 218.894 40.044C218.848 41.389 218.568 42.7804 218.101 44.0481C217.712 45.1148 217.556 46.1661 217.385 47.2638C217.245 48.1605 216.933 49.0417 216.716 49.9384C216.607 50.3867 216.56 50.835 216.435 51.2834C216.155 52.2883 215.891 53.3086 215.517 54.2826C215.237 55.0556 214.801 55.7668 214.443 56.5088C214.303 56.8026 214.225 57.1272 214.07 57.421C213.401 58.7505 212.84 60.1574 212.016 61.3787C211.222 62.5382 210.21 63.574 209.183 64.5635C208.094 65.6147 206.895 66.5733 205.697 67.5318C205.355 67.8101 204.888 67.9028 204.483 68.1193C203.254 68.7995 202.024 69.5107 200.779 70.1909C200.374 70.4073 199.876 70.4692 199.534 70.732C198.756 71.3504 198.04 72.0461 197.308 72.7263C196.888 73.1283 196.499 73.5457 196.11 73.9786C195.519 74.6279 194.927 75.2772 194.383 75.9575C193.713 76.7768 193.091 77.6426 192.468 78.4929C192.359 78.6475 192.344 78.8794 192.25 79.0494C191.815 79.9307 191.41 80.8273 190.897 81.6622C190.196 82.8062 189.636 83.9812 189.294 85.2644C188.951 86.5166 188.671 87.7998 188.235 89.0211C187.099 92.2523 187.519 95.5916 187.535 98.8846C187.55 100.075 187.706 101.281 187.815 102.471C188.002 104.466 187.224 106.244 186.352 107.929C185.543 109.475 184.438 110.881 183.115 112.041C181.917 113.092 180.796 114.252 179.302 115.025C178.01 115.69 176.734 116.292 175.38 116.849C174.353 117.266 173.264 117.313 172.283 117.668C171.303 118.024 170.369 118.039 169.42 117.962C167.91 117.808 166.385 117.498 164.813 117.266Z" }, 
            ease: "steps(1)", 
          },
          { 
            attr: { d: "M164.752 116.969C164.799 116.722 164.783 116.49 164.876 116.305C165.452 115.224 166.043 114.143 166.619 113.078C166.992 112.398 167.381 111.719 167.708 111.009C168.159 110.005 168.533 108.986 168.937 107.967C169.093 107.565 169.326 107.179 169.388 106.762C169.653 105.218 169.824 103.658 170.089 102.114C170.151 101.728 170.384 101.389 170.493 101.141C171.333 101.141 172.127 101.203 172.92 101.126C173.667 101.064 174.258 100.539 174.678 99.9833C175.627 98.7171 175.596 96.6634 174.881 95.7214C173.652 94.1001 171.971 93.8839 170.089 94.4243C170.057 94.2699 170.026 94.1155 170.011 93.9611C169.902 92.139 169.855 90.3169 169.668 88.5102C169.466 86.5182 168.439 84.9277 166.961 83.5843C166.043 82.7505 165.079 82.1483 163.912 81.6696C163.009 81.299 162.185 81.3299 161.344 81.3916C160.691 81.4534 160.069 81.8858 159.415 82.1637C158.606 82.5189 157.719 82.7659 156.988 83.2446C155.588 84.1402 153.97 84.4799 152.476 85.1131C150.002 86.1631 147.481 85.8079 144.977 85.7307C143.81 85.6998 142.658 85.1285 141.491 84.8042C141.149 84.7116 140.807 84.6498 140.464 84.5417C139.562 84.2483 138.613 84.0167 137.773 83.6152C135.454 82.5034 132.996 82.8277 130.585 82.874C129.744 82.8895 128.873 82.9975 128.095 83.2755C127.364 83.538 126.726 84.0476 126.088 84.5263C125.606 84.8969 125.108 85.2984 124.812 85.8079C124.221 86.8116 123.754 87.8925 123.241 88.9426C123.21 89.0043 123.21 89.097 123.194 89.1742C123.054 90.811 122.494 92.4015 122.712 94.0692C122.743 94.3163 122.681 94.5633 122.65 94.8567C122.432 94.7177 122.276 94.5324 122.089 94.517C120.767 94.3935 119.476 94.3935 118.34 95.2582C117.266 96.092 117.079 97.4818 117.982 98.887C118.822 100.2 120.58 100.91 122.105 100.261C122.261 100.2 122.447 100.215 122.634 100.184C122.712 101.018 122.152 101.682 121.358 101.744C120.907 101.775 120.456 101.867 120.02 101.805C118.9 101.62 118.075 100.864 117.282 100.169C116.504 99.5046 115.804 98.7326 115.181 97.9142C114.621 97.173 114.03 96.3545 113.765 95.4744C113.376 94.1464 112.723 92.9574 112.178 91.7221C111.665 90.5639 111.26 89.3595 110.747 88.2014C110.265 87.0896 109.705 86.0087 109.176 84.9123C108.366 83.2446 107.246 81.8085 106.002 80.4342C105.037 79.3688 103.854 78.5349 102.781 77.593C102.127 77.0371 101.692 76.1878 101.303 75.3848C100.805 74.3502 100.463 73.2384 100.058 72.1575C100.042 72.1112 100.027 72.0494 100.027 72.0031C100.027 69.8413 99.9491 67.6795 100.058 65.5331C100.105 64.6066 100.4 63.6338 100.805 62.7845C101.645 61.0087 102.205 59.063 103.699 57.627C104.212 57.1328 104.477 56.3762 105.052 56.0056C106.064 55.3416 107.184 54.8629 108.289 54.3379C109.658 53.6739 111.105 53.1335 112.427 52.3923C113.75 51.6665 115.057 50.8635 116.239 49.9216C117.826 48.6708 119.351 47.312 120.829 45.9222C121.903 44.9031 122.93 43.8222 123.863 42.6795C124.454 41.9537 124.874 41.089 125.326 40.2551C125.995 39.0198 126.695 37.7999 127.286 36.5337C127.613 35.8234 127.753 35.0359 127.986 34.2947C128.375 33.013 128.811 31.7468 129.184 30.4806C129.355 29.9093 129.355 29.2607 129.573 28.7203C129.947 27.8246 130.445 26.9908 130.911 26.1415C131.207 25.6165 131.565 25.1224 131.86 24.5819C132.358 23.6863 132.778 22.7289 133.323 21.8642C133.883 20.9994 134.552 20.2119 135.174 19.3935C135.672 18.7295 136.155 18.0501 136.684 17.417C137.322 16.6604 137.991 15.9346 138.675 15.2243C139.391 14.4831 140.107 13.7573 140.885 13.0779C141.491 12.5529 142.129 12.0588 142.829 11.6573C143.825 11.0859 144.883 10.5918 145.926 10.1131C146.268 9.95869 146.657 9.91237 147.03 9.83516C147.964 9.61898 148.897 9.40279 149.831 9.23294C150.515 9.1094 151.216 8.98587 151.9 9.00131C153.534 9.04764 155.168 9.07852 156.77 9.31014C158.373 9.54177 159.991 9.86604 161.516 10.3911C162.605 10.7617 163.554 11.5337 164.55 12.1514C165.405 12.6764 166.23 13.2169 167.07 13.7419C168.502 14.6221 170.089 15.1471 171.676 15.6875C172.811 16.0736 173.9 16.3052 175.067 16.3978C175.596 16.4442 176.125 16.7684 176.608 16.7067C178.117 16.5368 179.642 16.3052 181.12 15.9655C182.178 15.7184 183.22 15.3478 184.216 14.9C185.492 14.3287 186.69 13.6184 187.95 13.0007C188.495 12.7382 189.086 12.5683 189.631 12.3367C190.595 11.9507 191.56 11.5029 192.54 11.1477C193.038 10.9624 193.598 10.808 194.111 10.8234C195.807 10.8697 197.566 10.7462 199.184 11.1477C201.082 11.6264 203.011 12.3521 204.443 13.7728C205.672 14.9927 206.901 16.228 207.585 17.9111C207.912 18.7141 208.146 19.4862 208.254 20.32C208.426 21.4781 208.301 22.7289 208.675 23.8098C209.095 25.0143 209.032 26.1724 208.97 27.3614C208.939 28.3033 208.69 29.2453 208.488 30.1872C208.363 30.8358 208.099 31.4534 208.006 32.102C207.834 33.2601 207.15 34.1866 206.776 35.2366C206.154 36.9506 205.547 38.6492 205.189 40.4713C204.8 42.4787 204.723 44.4553 204.832 46.4472C204.878 47.3274 205.158 48.2076 205.361 49.0878C205.532 49.8598 205.703 50.6165 205.874 51.3731C206.154 52.6084 206.372 53.8747 206.73 55.0945C207.119 56.4071 207.648 57.6733 208.099 58.9704C208.27 59.4645 208.379 59.9895 208.488 60.5146C208.783 61.9043 209.079 63.3095 209.359 64.6992C209.577 65.7801 209.935 66.8611 209.966 67.942C210.044 70.8141 209.966 73.6863 209.95 76.5584C209.95 76.7128 209.873 76.8518 209.841 77.0062C209.561 78.4886 209.328 79.971 208.97 81.4379C208.69 82.5961 208.317 83.7233 207.912 84.8351C207.445 86.1168 206.916 87.3984 206.341 88.6492C205.765 89.9154 205.236 91.2125 204.458 92.3552C203.447 93.8376 202.342 95.2582 200.817 96.3082C200.055 96.8332 199.433 97.559 198.686 98.1458C197.97 98.7017 197.192 99.1958 196.461 99.7208C195.605 100.338 194.749 100.956 193.878 101.574C193.831 101.605 193.8 101.636 193.754 101.666C192.478 102.346 191.233 103.072 189.942 103.72C188.961 104.214 187.95 104.616 186.939 105.033C185.663 105.558 184.309 105.959 183.08 106.592C181.882 107.21 180.56 107.272 179.315 107.642C178.148 107.982 176.997 108.368 175.861 108.801C174.678 109.233 173.512 109.681 172.376 110.221C170.882 110.916 169.653 111.951 168.564 113.186C167.412 114.483 166.199 115.734 165.016 117C165.063 116.985 164.985 116.954 164.752 116.969Z" }, 
            ease: "steps(1)", 
          },
        ]
      });
  
      // .girl-youga__circle ===================
      const animationSettings = {
        duration: 2,
        scale: 0,
        opacity: 1,
        yoyo: true,
        ease: "power2.inOut",
        transformOrigin: "50% 50%"
      };
      let tlGirlYougaCircle = gsap.timeline({
        repeat: -1
      });
      tlGirlYougaCircle.fromTo(".girl-youga__circle-01", {opacity: 0, scale: 1}, {...animationSettings})
                      .fromTo(".girl-youga__circle-02", {opacity: 0, scale: 1}, {...animationSettings}, "+=0.2")
                      .fromTo(".girl-youga__circle-03", {opacity: 0, scale: 1}, {...animationSettings}, "+=0.4");
  
  
      // .girl-youga__line =========================================
       const line = document.querySelector('.girl-youga__line');
       // Получаем общую длину пути линии
       const lineLength = line.getTotalLength();
       // Устанавливаем начальные значения для линии
       line.style.strokeDasharray = lineLength;
       line.style.strokeDashoffset = lineLength;
      
       let tlGirlYougaLine = gsap.timeline({repeat: -1, repeatDelay: 0.5});
      
       tlGirlYougaLine.to(line, {
         duration: 1,
         strokeDashoffset: 0,
         ease: "power2.inOut"
       }).to(line, {
         duration: 2,
         strokeDashoffset: -lineLength,
         ease: "power2.inOut"
       }).set(line, {
         strokeDashoffset: lineLength,
         opacity: 1
       });
    }
  
    if (girlStars) {
      let tlStars = gsap.timeline({ repeat: -1 });
      girlStars.forEach((star, index) => {
        let randomDelay = Math.random();
        tlStars.fromTo( star, 
          {
          opacity: 1
          }, 
          {
            opacity: 0,
            duration: 0.8,
            repeat: -1,
            yoyo: true,
            ease: "power1.inOut",
            delay: randomDelay
          }, 
          index * 0.1 // Добавляем небольшую задержку между каждой звездочкой
        ); 
      });
    }
  
    if (animGirlPuzzle) {
      gsap.to(".girl-puzzle__hair", {
        transformOrigin: "50% 50%",
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        keyframes: [
          {  
             attr: { d: "M175.569 176.943C175.481 176.219 175.598 175.437 175.336 174.8C174.203 171.904 173.709 168.689 171.589 166.228C169.585 163.911 167.609 161.449 165.227 159.509C163.484 158.09 161.073 157.482 159.011 156.41C154.654 154.18 149.89 154.122 145.184 154.006C143.034 153.948 140.856 154.296 138.735 154.73C136.092 155.31 133.419 155.918 130.95 156.989C126.564 158.901 122.759 161.855 118.982 164.751C115.409 167.444 112.069 170.456 108.467 173.091C106.143 174.8 103.558 176.19 101.059 177.667C99.9846 178.304 98.8808 178.941 97.7188 179.405C94.9883 180.476 92.2578 181.432 89.4982 182.417C86.5062 183.459 83.4851 184.502 80.4351 185.486C78.5469 186.095 76.5716 186.5 74.6835 187.108C72.3596 187.832 70.0357 188.585 67.7409 189.425C63.4417 191.018 59.0554 192.495 54.8725 194.377C51.7643 195.767 48.7433 197.505 46.0127 199.561C43.0498 201.791 40.4064 204.485 37.7339 207.062C36.2524 208.452 35.0034 210.074 33.609 211.551C32.5052 212.709 31.3142 213.781 30.2104 214.939C28.9613 216.214 27.8575 217.604 26.5503 218.791C25.3012 219.949 23.9359 220.992 22.5997 222.064C20.8858 223.425 19.172 224.757 17.4291 226.089C16.0057 227.19 14.4081 228.116 13.1299 229.362C11.6485 230.781 10.196 232.402 9.12125 234.169C8.1336 235.82 7.26215 237.76 7.08786 239.643C6.82643 242.075 7.20406 244.595 7.49454 247.056C7.87217 250.474 8.62743 253.775 10.0217 256.99C11.2999 259.944 12.7523 262.608 15.0471 264.867C16.79 266.605 18.9687 266.605 21.1182 266.634C22.3383 266.663 23.5583 266.199 25.156 265.881C24.4878 266.952 24.0812 267.879 23.4712 268.603C22.3383 269.993 22.3383 272.86 23.2388 274.077C23.8778 274.917 24.6912 275.67 25.2141 276.567C27.3636 280.072 29.978 283.17 32.97 285.979C35.2938 288.18 37.7339 290.295 40.2902 292.235C42.2074 293.683 44.3279 294.899 46.4194 296.058C48.3656 297.129 50.4571 297.94 52.4615 298.925C55.802 300.547 59.1426 301.618 62.7446 299.62C63.9356 298.954 65.2718 298.548 66.6952 297.94C65.7366 302.371 65.998 303.674 69.6871 306.165C71.1686 307.15 72.8244 307.729 74.4801 308.424C78.3436 309.988 82.3522 310.654 86.39 311.436C88.0748 311.754 89.7886 312.015 91.5025 312.189C92.8387 312.334 94.204 312.594 95.5112 312.391C97.835 312.044 100.188 311.552 102.425 310.799C104.778 309.988 107.101 308.945 109.251 307.7C112.621 305.702 115.293 302.892 117.733 299.881C118.895 298.432 120.26 297.158 121.364 295.681C123.136 293.335 124.763 290.845 126.477 288.47C128.191 286.124 129.846 283.692 131.705 281.491C134.552 278.102 135.976 273.961 137.98 270.138C139.345 267.532 140.304 264.751 141.582 262.087C142.686 259.799 143.935 257.569 145.3 255.426C147.043 252.646 148.67 249.75 150.819 247.288C154.131 243.494 157.791 239.99 161.422 236.457C166.099 231.91 170.078 226.9 172.315 220.702C172.954 218.878 173.419 216.995 173.884 215.142C174.436 212.883 175.162 210.653 175.394 208.365C175.83 204.34 176.062 200.314 176.208 196.26C176.411 189.802 176.411 183.343 175.569 176.943ZM75.1192 201.704C70.82 203.5 67.0437 206.106 64.197 209.813C62.5993 211.898 61.0307 214.128 59.985 216.503C58.8521 219.081 58.2421 221.89 57.574 224.641C56.8768 227.508 56.2958 230.404 55.8601 233.3C55.3953 236.486 55.3372 239.701 54.8144 242.886C54.2915 246.072 53.2748 249.171 52.7519 252.327C52.2581 255.339 50.9219 257.975 49.6438 260.639C48.7433 262.492 47.407 264.201 46.0708 265.823C44.9379 267.155 43.5726 268.285 42.2074 269.385C41.8007 269.704 41.1035 269.646 40.5226 269.733C40.4935 269.327 40.2902 268.748 40.4935 268.574C41.394 267.647 42.4688 266.866 43.3984 265.939C44.4441 264.896 45.4608 263.796 46.3322 262.608C48.8014 259.307 49.9342 255.426 51.1543 251.574C52.4324 247.636 52.6067 243.523 53.1877 239.498C53.8558 234.922 54.4077 230.317 55.2501 225.771C55.6858 223.425 56.6154 221.166 57.3997 218.936C58.1259 216.909 58.7359 214.794 59.8107 212.97C61.1179 210.74 62.6865 208.626 64.4584 206.714C66.0271 205.006 67.8571 203.442 69.8324 202.255C71.9239 200.951 74.3058 200.111 76.5716 199.156C78.1983 198.461 79.8831 197.824 81.5679 197.273C83.0785 196.752 84.6471 196.376 86.2157 195.97C88.1038 195.449 89.992 194.899 91.9092 194.406C92.7806 194.175 93.7392 194.204 94.6107 193.972C97.225 193.306 99.8394 192.582 102.396 191.8C104.923 191.018 107.508 190.323 109.919 189.251C112.098 188.267 114.189 186.992 116.165 185.602C117.733 184.502 119.186 183.141 120.493 181.722C122.468 179.578 124.269 177.32 126.128 175.061C127.784 173.062 129.353 170.977 130.979 168.95C131.88 167.849 132.751 166.72 133.797 165.764C135.772 163.969 137.777 162.173 139.926 160.638C142.802 158.582 146.172 157.511 149.657 157.018C150.906 156.844 152.214 157.221 153.492 157.482C153.695 157.511 153.927 158.177 153.898 158.553C153.869 158.785 153.463 159.161 153.201 159.19C152.446 159.277 151.662 159.219 150.877 159.219C145.997 158.988 142.018 160.957 138.474 164.143C137.225 165.243 135.83 166.17 134.639 167.328C133.536 168.429 132.577 169.703 131.589 170.919C129.934 173.004 128.278 175.09 126.651 177.175C125.751 178.333 124.995 179.607 124.066 180.766C123.136 181.924 122.207 183.083 121.074 184.009C118.953 185.718 116.804 187.456 114.48 188.846C112.272 190.149 109.89 191.221 107.479 192.118C104.197 193.306 100.856 194.29 97.5155 195.217C95.1335 195.883 92.6354 196.202 90.2244 196.781C87.7552 197.389 85.2571 198.026 82.8461 198.808C80.2317 199.648 77.6755 200.662 75.1192 201.704ZM145.126 168.342C145.01 168.747 145.039 169.297 144.748 169.529C143.993 170.224 143.18 170.832 142.337 171.383C139.461 173.323 137.225 175.785 135.83 179.028C134.436 182.301 132.838 185.515 131.183 188.672C130.689 189.599 129.759 190.41 128.859 190.989C126.854 192.321 125.024 194.059 122.381 194.175C121.539 194.204 120.696 194.522 119.505 194.783C119.302 194.464 118.75 194.03 118.808 193.711C118.895 193.335 119.447 192.9 119.883 192.784C121.771 192.205 123.833 192.003 125.576 191.134C127.058 190.41 128.307 189.078 129.382 187.774C131.735 184.878 132.577 181.2 134.175 177.899C135.337 175.466 136.992 173.294 139.113 171.585C140.623 170.369 142.25 169.326 143.877 168.284C144.138 168.081 144.69 168.313 145.126 168.342ZM161.887 170.89C157.5 171.383 153.957 173.352 151.023 176.596C149.483 178.333 147.798 179.955 146.404 181.779C145.416 183.054 144.777 184.618 144.051 186.095C143.238 187.745 142.511 189.425 141.785 191.105C140.71 193.537 139.752 196.057 138.59 198.461C137.486 200.749 136.237 202.979 134.901 205.151C133.739 207.062 132.461 208.915 131.008 210.624C129.788 212.072 128.249 213.26 126.796 214.476C125.111 215.866 123.456 217.256 121.655 218.472C118.808 220.384 115.729 221.803 112.446 222.874C109.193 223.946 105.881 224.989 102.802 226.437C101.263 227.161 100.072 228.724 98.9389 230.086C96.1502 233.474 95.1916 237.615 94.2621 241.786C93.7102 244.305 92.8387 246.767 92.1416 249.257C91.9673 249.866 92.0254 250.503 91.9382 251.111C91.2701 256.092 90.5729 261.044 89.9048 265.997C89.5853 268.314 89.4982 270.688 89.0624 272.976C88.3653 276.509 87.5229 280.043 85.78 283.257C85.4314 283.894 84.9666 284.531 84.4437 285.024C84.1823 285.255 83.4851 285.284 83.2237 285.082C82.9913 284.879 82.8461 284.126 83.0204 283.894C85.6928 280.071 86.9709 275.785 87.3776 271.21C87.7262 267.416 88.1329 263.593 88.6267 259.799C89.0043 256.729 89.3239 253.602 90.1082 250.648C91.4153 245.637 92.0544 240.425 94.233 235.617C95.1335 233.648 95.6855 231.534 96.7312 229.651C97.4574 228.348 98.6193 227.247 99.8103 226.292C101.873 224.641 104.342 223.685 106.84 222.817C109.338 221.948 111.865 221.253 114.305 220.239C118.866 218.357 122.962 215.721 126.622 212.362C129.382 209.813 131.822 207.004 133.681 203.847C135.714 200.401 137.138 196.578 138.822 192.929C139.403 191.655 140.042 190.41 140.652 189.164C141.785 186.819 142.802 184.415 144.08 182.156C145.039 180.476 146.172 178.826 147.479 177.406C148.989 175.756 150.645 174.163 152.475 172.831C155.264 170.832 158.227 169.037 162.032 168.776C162.526 169.095 162.991 169.413 163.484 169.761C162.962 170.108 162.468 170.803 161.887 170.89Z" }, 
            ease: "steps(1)", 
            translateX: 0,
            translateY: 0,
          },
          { 
            attr: { d: "M176.147 179.25C175.943 177.049 175.42 174.877 175.188 172.676C174.839 169.635 173.3 167.029 171.499 164.857C168.71 161.497 165.341 158.717 160.925 157.327C158.108 156.429 155.319 155.937 152.443 155.734C151.252 155.647 150.003 155.995 148.812 156.256C146.808 156.69 144.716 157.009 142.857 157.791C139.11 159.412 135.479 161.266 131.848 163.09C128.682 164.712 125.341 165.581 121.768 165.523C118.486 165.465 115.203 165.233 111.921 165.32C109.219 165.378 106.46 165.639 103.816 166.16C101.26 166.652 98.7326 167.319 96.3507 168.332C94.0558 169.288 91.9063 170.707 89.7857 172.039C87.7814 173.284 85.8061 174.53 83.9761 175.978C82.3493 177.252 80.955 178.816 79.3864 180.148C77.2078 181.973 75.6682 184.289 74.0996 186.548C72.8215 188.402 71.8338 190.487 70.73 192.485C69.2485 195.092 67.3023 197.235 64.7751 198.885C63.1774 199.928 61.5798 201.029 59.924 201.955C59.2268 202.361 58.3263 202.477 57.513 202.621C54.6662 203.143 51.8195 203.606 48.9728 204.185C46.1551 204.764 43.3664 205.431 40.5778 206.126C38.6025 206.589 36.54 206.908 34.739 207.747C31.2823 209.311 27.6803 210.846 24.6012 213.047C19.3434 216.754 14.6957 221.04 11.4422 226.861C9.14741 230.945 8.5374 235.202 7.92739 239.575C7.52071 242.442 8.82788 244.933 9.98982 247.394C10.7741 248.987 11.878 250.493 13.0399 251.854C14.1728 253.158 15.6543 254.142 16.8162 255.416C19.5467 258.399 22.1901 261.498 24.8336 264.539C26.9541 267.001 29.0165 269.578 30.1203 272.648C31.108 275.428 31.5728 278.353 32.299 281.22C32.5314 282.147 32.6476 283.19 33.1123 284C35.0586 287.447 37.9925 289.59 42.0011 290.169C42.4369 290.227 43.1631 290.43 43.1921 290.661C43.2502 291.096 43.0178 291.646 42.7274 292.023C41.4202 293.673 41.3621 295.266 42.524 297.062C44.8769 300.653 47.898 303.636 51.6161 305.721C54.7243 307.459 58.152 308.385 61.6959 308.993C64.5136 309.457 67.3023 310.036 70.12 310.557C71.6305 310.818 73.112 311.223 74.6225 311.281C78.1373 311.426 81.6812 311.513 85.167 311.397C86.4161 311.339 87.7814 310.789 88.8852 310.123C91.0639 308.791 93.0972 307.198 95.334 305.605C95.3921 305.663 95.7407 305.808 95.8859 306.068C96.9897 308.096 98.965 308.559 100.94 308.907C105.21 309.688 109.19 308.096 113.024 306.734C115.784 305.75 118.137 303.694 120.606 302.014C121.739 301.261 122.785 300.334 123.772 299.379C125.138 298.046 126.59 296.743 127.665 295.208C129.03 293.268 130.25 291.241 130.657 288.75C131.005 286.636 132.051 284.667 132.777 282.61C133.765 279.946 134.491 277.137 135.798 274.617C137.454 271.403 140.272 269.144 143.206 267.116C145.355 265.611 147.65 264.278 149.829 262.801C152.966 260.658 155.522 257.907 158.02 255.069C160.199 252.636 161.332 249.711 162.291 246.757C163.075 244.354 163.017 241.689 163.336 239.112C163.394 238.735 163.481 238.359 163.481 237.982C163.481 235.463 163.481 232.972 163.452 230.452C163.423 228.107 163.249 225.732 163.423 223.386C163.54 221.793 164.092 220.229 164.469 218.637C164.789 217.16 164.934 215.596 165.486 214.235C166.561 211.541 167.81 208.935 169.088 206.328C170.54 203.316 172.138 200.391 173.59 197.409C174.142 196.25 174.723 194.976 174.868 193.731C175.304 190.081 175.537 186.404 175.827 182.726C175.885 181.509 176.234 180.351 176.147 179.25ZM67.0409 232.364C66.2856 233.406 65.2689 234.246 64.4846 235.26C62.6255 237.722 59.8659 238.938 57.4549 240.647C55.4796 242.037 53.301 243.253 51.7033 245.02C49.7571 247.163 48.4208 249.769 47.8108 252.781C47.317 255.359 46.4746 257.82 44.8479 260.108C42.9307 262.801 40.7521 265.234 38.5153 267.609C38.1668 267.985 37.4115 267.956 36.8596 268.13C37.0048 267.551 37.0048 266.827 37.3534 266.392C39.2706 264.076 41.5364 261.962 43.2212 259.471C44.4993 257.56 45.1965 255.214 45.9227 252.984C46.6779 250.609 47.1717 248.234 48.7113 246.12C51.0061 242.992 53.94 240.762 57.1644 238.764C59.7788 237.171 62.1607 235.318 64.2813 233.059C67.0699 230.076 69.1033 226.659 70.73 223.039C71.8048 220.606 72.3858 217.913 72.9086 215.306C73.722 211.165 74.332 206.937 76.4816 203.23C77.2949 201.811 78.5731 200.594 79.764 199.436C82.9884 196.25 86.968 194.483 91.3544 193.615C93.7654 193.122 96.2635 192.891 98.6164 192.138C102.044 191.037 105.762 190.516 108.725 188.199C110.091 187.128 111.572 186.201 112.734 184.955C113.722 183.884 114.274 182.465 115.029 181.191C116.423 178.903 117.759 176.615 120.054 174.993C122.058 173.603 123.743 171.749 125.806 170.446C127.839 169.172 130.163 168.332 132.342 167.29C135.188 165.928 138.006 164.538 140.853 163.206C141.347 162.974 141.928 162.974 142.509 162.859C142.915 164.017 142.683 164.48 141.753 164.886C140.039 165.581 138.413 166.537 136.728 167.319C134.172 168.477 131.47 169.404 129.03 170.765C126.329 172.271 123.685 173.979 121.361 175.978C118.892 178.092 117.062 180.785 115.552 183.768C114.041 186.722 111.688 189.097 108.522 190.4C105.791 191.53 103.061 192.659 100.272 193.528C97.9193 194.252 95.4502 194.483 93.0682 195.063C90.8896 195.584 88.7109 196.105 86.6485 196.974C83.7437 198.19 81.1874 200.015 79.3283 202.592C77.8759 204.591 76.5978 206.676 76.162 209.224C75.6392 212.265 74.4482 215.19 74.0415 218.202C73.6348 221.272 72.2405 223.936 70.9914 226.63C69.9166 228.686 68.4061 230.51 67.0409 232.364ZM115.668 196.656C115.377 197.061 115.203 197.64 114.796 197.814C112.937 198.712 110.962 199.32 109.19 200.362C107.534 201.347 105.82 202.535 104.658 204.012C102.857 206.328 101.579 209.051 99.8946 211.483C98.9069 212.902 97.5998 214.09 96.3797 215.364C95.334 216.465 94.2011 217.478 92.9811 218.666C92.6034 218.173 92.371 217.826 92.0515 217.391C93.4168 216.03 95.0144 214.727 96.2635 213.163C97.8031 211.281 99.4007 209.311 100.388 207.11C101.55 204.591 103.235 202.563 105.298 200.971C107.244 199.465 109.655 198.538 111.863 197.38C112.56 197.003 113.228 196.54 113.983 196.366C114.535 196.25 115.116 196.54 115.668 196.656ZM159.008 176.933C158.253 178.468 157.614 180.09 157.236 181.741C155.755 188.344 152.414 193.731 146.953 197.756C144.716 199.407 142.509 201.086 140.098 202.506C138.064 203.693 135.74 204.417 133.649 205.517C131.557 206.618 129.582 207.921 127.549 209.109C123.918 211.223 121.071 214.264 118.195 217.218C117.091 218.347 116.104 219.592 115.174 220.867C113.78 222.836 112.385 224.805 111.165 226.89C110.003 228.889 109.074 231.032 108.028 233.117C107.07 234.999 106.227 237.027 105.007 238.735C103.613 240.647 101.957 242.442 100.185 244.035C98.2969 245.715 96.1473 247.163 94.0849 248.64C91.5867 250.435 88.6238 251.681 86.8228 254.374C85.2542 256.691 83.7437 259.037 83.366 261.904C82.9594 264.915 82.6979 267.956 82.117 270.939C81.4198 274.472 80.5484 278.064 78.5731 281.104C77.353 282.958 75.552 284.435 73.9834 286.115C73.5186 285.68 73.2572 285.42 72.8796 285.101C73.3443 284.493 73.722 283.856 74.2449 283.363C75.9878 281.684 77.5564 279.83 78.4278 277.571C79.2121 275.573 79.7931 273.43 80.1707 271.316C80.6355 268.536 80.5483 265.668 81.1584 262.917C81.9136 259.471 83.1917 256.198 85.4285 253.331C87.4909 250.667 90.2796 249.045 93.0392 247.279C94.8983 246.091 96.6121 244.614 98.2969 243.195C99.6912 242.008 101.144 240.82 102.247 239.401C103.642 237.635 104.891 235.723 105.966 233.725C107.476 230.945 108.667 228.02 110.12 225.24C111.078 223.444 112.182 221.677 113.431 220.056C114.825 218.26 116.394 216.58 118.05 215.017C120.635 212.555 123.104 209.89 126.038 207.892C129.088 205.778 132.632 204.388 135.915 202.621C138.297 201.347 140.679 200.073 142.944 198.567C144.978 197.206 146.953 195.729 148.725 194.02C151.63 191.24 153.576 187.794 155.028 184.058C155.551 182.668 155.667 181.104 156.045 179.656C156.684 177.252 157.672 174.993 159.357 173.082C160.17 172.155 160.664 172.126 161.768 172.763C160.78 174.182 159.734 175.456 159.008 176.933Z" }, 
            ease: "steps(1)", 
            translateX: 0,
            translateY: 0,
          },
          { 
            attr: { d: "M173.979 177.205C173.834 175.351 173.195 173.527 173.021 171.645C172.643 167.851 170.61 164.926 168.257 162.145C167.56 161.306 166.601 160.697 165.904 159.829C162.796 156.064 158.7 154.094 153.994 153.399C150.799 152.907 147.574 152.762 144.524 152.473C141.213 152.762 138.075 152.994 134.996 153.341C133.341 153.544 131.627 153.747 130.087 154.326C127.386 155.369 124.713 156.585 122.157 157.917C119.659 159.191 117.219 160.582 114.895 162.145C113.21 163.275 111.787 164.81 110.189 166.084C108.591 167.358 106.936 168.575 105.28 169.762C103.537 171.036 101.852 172.397 99.993 173.469C97.9597 174.685 95.7811 175.699 93.6315 176.684C91.9176 177.466 90.1747 178.219 88.4028 178.769C85.4979 179.667 82.564 180.449 79.6011 181.115C75.6215 182.012 71.6128 182.794 67.6041 183.605C66.4712 183.837 65.3093 183.924 64.2345 184.3C61.533 185.256 58.8315 186.27 56.1881 187.399C53.4285 188.557 50.5237 189.6 48.0255 191.222C43.8425 193.915 39.7758 196.782 36.7547 200.924C34.8956 203.472 33.7337 206.223 32.688 209.09C32.136 210.596 31.8456 212.189 31.3517 213.724C30.6836 215.867 29.9574 218.039 29.1731 220.153C28.4759 222.036 27.7207 223.918 26.8202 225.714C25.6292 228.06 24.322 230.29 22.3467 232.114C21.1267 233.215 20.3133 234.75 19.0062 235.705C16.7985 237.298 15.0265 239.267 13.4579 241.41C10.9598 244.828 9.4202 248.68 8.98448 252.908C8.83923 254.298 9.18779 255.746 9.21684 257.194C9.27494 259.8 10.5531 262.001 11.5698 264.289C12.5574 266.548 13.6032 268.894 15.1427 270.776C17.6409 273.846 20.4876 276.597 24.293 278.306C27.0816 279.551 29.7541 280.623 32.8332 280.797C35.099 280.913 37.3938 281.318 39.6015 281.897C42.8839 282.766 46.1083 283.867 49.3327 284.88C49.7975 285.025 50.3203 284.938 50.756 285.083C51.1337 285.199 51.5694 285.43 51.7146 285.72C52.0342 286.386 52.1504 287.168 52.4118 287.863C53.9514 291.889 55.2586 296.059 57.2048 299.882C58.8606 303.154 61.1844 306.079 64.3507 308.28C68.2722 311.003 72.3681 312.769 77.2482 312.972C82.5059 313.204 87.328 312.248 91.7433 309.497C93.6605 308.28 95.5487 306.977 97.3496 305.558C98.7149 304.486 99.964 303.241 101.155 301.938C102.317 300.693 103.188 299.129 104.437 297.999C106.238 296.378 107.981 294.814 108.824 292.41C109.114 291.599 109.695 291.078 110.944 291.483C112.484 292.004 114.227 292.12 115.883 292.178C117.19 292.207 118.526 291.802 119.833 291.686C122.825 291.454 125.817 291.454 128.78 291.078C130.901 290.817 133.108 290.47 134.996 289.543C138.656 287.776 141.794 285.401 143.624 281.492C145.367 277.814 146.238 273.991 146.5 270.023C146.674 267.417 146.5 264.811 146.5 262.204C146.5 261.046 146.354 259.858 146.587 258.729C147.313 255.485 148.242 252.3 149.056 249.085C150.131 244.741 151.932 240.744 154.343 236.979C155.098 235.792 155.824 234.518 156.812 233.562C159.629 230.84 163.377 229.218 165.701 225.946C166.979 224.121 168.547 222.412 169.361 220.385C171.191 215.867 172.207 211.118 172.12 206.165C172.062 202.14 172.324 198.085 172.585 194.06C172.846 189.803 173.253 185.546 173.602 181.317C173.747 179.956 174.096 178.566 173.979 177.205ZM67.4589 221.804C66.965 224.179 66.7617 226.612 65.9774 228.899C64.8736 232.085 64.2054 235.445 62.3754 238.428C60.8358 240.918 59.2091 243.264 57.0596 245.233C54.8228 247.318 52.3828 249.143 49.7103 250.678C47.8803 251.749 46.1373 253.168 44.7721 254.79C42.8549 257.107 41.3153 259.713 39.6596 262.233C39.3691 262.667 39.2819 263.218 39.0786 263.681C38.701 264.55 38.3233 265.39 37.9457 266.23C37.6552 266.172 37.3647 266.114 37.1033 266.056C37.1904 265.071 37.0161 263.971 37.3938 263.102C39.4272 258.381 42.1868 254.153 46.3407 251.054C48.7808 249.23 51.5694 247.782 53.8352 245.783C56.1591 243.727 58.3958 241.381 60.1096 238.804C62.4335 235.3 63.7988 231.303 64.4088 227.046C64.8445 224.063 66.0646 221.196 66.5003 218.213C66.8779 215.636 67.8365 213.319 68.7951 210.973C69.6375 208.888 70.9447 207.15 72.6295 205.615C75.0405 203.385 77.8582 202.111 80.9373 201.039C84.6846 199.765 88.2575 197.999 91.8886 196.319C94.7063 195.016 97.524 193.683 100.196 192.12C103.857 189.977 107.488 187.747 109.753 183.982C111.002 181.897 112.193 179.782 113.472 177.697C114.459 176.075 115.65 174.627 117.422 173.73C118.119 173.382 118.729 172.89 119.397 172.484C121.547 171.094 124.103 171.181 126.427 170.399C129.39 169.415 132.527 168.864 135.084 166.924C136.797 165.621 138.482 164.231 140.022 162.725C140.661 162.117 140.835 161.074 141.329 160.292C141.59 159.887 142.142 159.684 142.549 159.365C142.723 159.771 143.159 160.292 143.043 160.611C142.607 161.711 142.055 162.812 141.387 163.796C139.47 166.547 136.565 168.111 133.718 169.704C132.353 170.457 130.726 170.805 129.216 171.297C125.643 172.484 121.779 172.832 118.526 175.004C115.708 176.857 114.227 179.609 112.774 182.505C110.944 186.183 108.185 189.137 104.612 191.309C102.288 192.699 100.109 194.321 97.7563 195.624C95.2001 197.014 92.4986 198.172 89.7971 199.36C86.8632 200.634 83.9584 202.082 80.8792 202.951C78.6716 203.588 76.8124 204.631 75.0114 205.876C73.4428 206.947 72.0776 208.28 71.2642 210.046C70.9156 210.799 70.4508 211.523 70.0732 212.276C68.6498 215.259 68.127 218.561 67.4589 221.804ZM84.4812 225.221C85.1784 229.363 84.5393 233.215 81.8378 236.719C79.7173 239.47 77.161 241.468 73.9076 242.598C73.53 242.743 72.9781 242.395 72.5423 242.279C72.8328 241.787 73.0361 240.947 73.4138 240.86C76.7253 240.165 78.9911 237.964 80.7049 235.358C82.1283 233.186 83.5807 230.84 83.2321 228.002C83.0579 226.698 82.5931 225.337 82.7674 224.063C82.9126 222.876 83.6679 221.746 84.2488 220.646C84.365 220.414 84.917 220.298 85.2365 220.356C85.527 220.385 85.7593 220.733 86.0498 220.964C85.7303 221.37 85.527 221.601 85.3527 221.862C84.6265 222.847 84.2779 223.86 84.4812 225.221ZM163.057 175.96C162.563 177.408 162.099 178.943 161.314 180.246C160.239 182.012 159.107 183.837 157.596 185.227C155.911 186.762 154.081 188.181 151.786 188.963C148.62 190.034 145.57 191.454 142.52 192.815C140.254 193.828 138.017 194.871 135.868 196.087C134.125 197.072 132.469 198.23 130.901 199.447C129.245 200.721 127.618 202.053 126.108 203.501C124.858 204.746 123.871 206.281 122.651 207.527C119.485 210.741 117.596 214.68 115.912 218.763C115.505 219.748 115.563 220.964 115.534 222.065C115.389 226.785 113.965 231.129 111.409 235.039C109.637 237.79 107.662 240.426 105.541 242.916C104.467 244.191 102.869 245.031 101.504 246.073C99.7026 247.463 97.9306 248.911 96.0425 250.185C93.1086 252.155 90.0876 253.979 87.1537 255.949C85.0912 257.368 83.145 258.961 81.1407 260.466C80.153 261.219 79.1944 262.03 78.1487 262.696C75.331 264.492 73.9948 267.098 73.2395 270.313C72.368 273.991 72.8328 277.669 72.7747 281.347C72.7747 281.781 73.1524 282.216 73.1814 282.679C73.2105 283.287 73.2105 284.301 72.92 284.417C71.9323 284.822 71.5547 283.953 71.4385 283.2C71.148 281.463 70.9737 279.725 70.7704 277.959C70.7123 277.582 70.7704 277.177 70.7704 276.8C70.7123 276.8 70.6542 276.8 70.5961 276.771C70.9447 274.078 71.0318 271.298 71.7 268.691C72.31 266.432 73.5009 264.289 75.4181 262.754C78.2939 260.495 81.1407 258.179 84.0746 256.007C86.0208 254.559 88.1413 253.371 90.1457 252.01C92.9924 250.07 95.8391 248.158 98.5987 246.102C100.981 244.335 103.363 242.511 105.454 240.426C107.052 238.804 108.388 236.835 109.492 234.836C110.944 232.201 112.164 229.421 113.21 226.612C113.704 225.25 113.384 223.629 113.704 222.181C114.314 219.429 114.779 216.591 115.912 214.072C116.986 211.668 118.7 209.467 120.414 207.44C122.331 205.152 124.51 203.125 126.659 201.039C128.025 199.736 129.419 198.404 130.988 197.39C133.805 195.566 136.681 193.741 139.731 192.264C142.985 190.672 146.47 189.513 149.84 188.152C152.629 187.023 155.272 185.546 157.247 183.345C158.642 181.781 159.426 179.667 160.472 177.784C160.878 177.06 161.14 176.249 161.605 175.554C161.779 175.265 162.273 175.178 162.621 175.033C162.796 175.265 163.144 175.699 163.057 175.96Z" }, 
            ease: "steps(1)", 
            translateX: 0,
            translateY: 0,
          },
          { 
            attr: { d: "M178 192.517C177.971 189.244 177.448 185.943 176.867 182.699C176.46 180.498 175.676 178.355 174.95 176.212C174.34 174.388 173.642 172.592 172.887 170.854C172.219 169.349 171.609 167.698 170.563 166.481C168.327 163.817 165.828 161.355 163.388 158.865C162.401 157.851 161.326 156.838 160.164 156.085C156.417 153.623 152.03 153.044 147.731 152.696C141.631 152.204 135.531 152.58 129.547 153.884C128.995 153.999 128.385 153.97 127.833 154.173C125.509 154.984 123.243 155.824 120.92 156.664C118.799 157.417 116.649 158.141 114.558 158.952C110.695 160.458 106.889 162.05 103.055 163.585C98.7847 165.294 94.3984 166.771 90.2154 168.682C86.9329 170.188 83.8538 172.129 80.8038 174.069C78.6251 175.459 76.708 177.226 74.5874 178.703C71.3631 180.991 68.952 183.974 66.8605 187.275C66.0181 188.607 65.0305 189.853 63.9848 191.04C62.91 192.285 61.6899 193.415 60.528 194.573C58.6689 196.398 56.8388 198.251 54.515 199.525C53.5854 200.047 52.6849 200.626 51.7263 201.031C49.5767 201.958 47.3981 202.769 45.2486 203.696C41.7337 205.173 38.2479 206.65 34.7621 208.243C32.4091 209.314 29.9981 210.299 27.9066 211.776C25.0599 213.774 22.2712 215.946 19.9183 218.466C16.9554 221.593 13.9924 224.866 11.93 228.602C10.158 231.787 9.60617 235.697 8.56042 239.288C8.09565 240.852 7.74706 242.474 7.31133 244.038C6.8756 245.746 6.0913 247.455 6.00415 249.193C5.68462 255.014 5.82989 260.806 10.2452 265.468C10.4195 265.671 10.4776 265.99 10.5938 266.25C11.1457 267.322 11.8428 268.133 13.2372 267.988C13.9343 267.93 14.6606 268.046 15.6192 268.104C15.503 268.799 15.5321 269.291 15.3287 269.726C14.4282 271.666 15.2125 273.23 16.6359 274.359C18.8436 276.097 21.1384 277.748 23.5784 279.138C26.1347 280.586 28.9524 281.571 31.5377 282.99C34.3844 284.525 37.1731 286.204 39.8746 288.029C43.0409 290.172 46.0329 292.605 49.1701 294.806C51.3778 296.369 53.6725 297.817 56.0255 299.15C56.8098 299.613 57.9137 300.018 58.7561 299.845C60.9347 299.41 61.6028 299.758 62.4161 301.843C62.8228 302.885 63.52 304.073 64.4205 304.623C67.1801 306.361 70.0268 308.012 72.9898 309.315C76.1851 310.734 79.3223 312.385 82.8662 312.935C86.1487 313.456 89.344 314.614 92.6264 314.933C94.9213 315.136 97.3323 314.499 99.6271 313.977C101.544 313.543 103.462 312.964 105.233 312.124C107.703 310.937 109.997 309.517 112.118 307.635C113.919 306.042 115.168 304.16 116.301 302.19C117.492 300.134 118.247 297.846 119.351 295.732C120.484 293.56 121.791 291.504 123.069 289.419C124.289 287.392 125.48 285.364 126.787 283.424C128.908 280.325 131.232 277.342 133.265 274.186C134.805 271.753 136.257 269.407 138.755 267.727C141.631 265.787 144.304 263.47 146.889 261.124C149.329 258.923 151.624 256.52 153.89 254.087C155.313 252.523 156.62 250.843 157.869 249.106C159.409 246.963 160.861 244.762 162.285 242.532C163.475 240.649 164.725 238.796 165.712 236.798C167.048 234.017 168.065 231.092 169.401 228.312C171.231 224.576 172.016 220.551 173.061 216.583C173.294 215.743 173.207 214.846 173.439 214.006C174.456 210.559 175.502 207.142 176.605 203.725C177.651 200.047 178.029 196.282 178 192.517ZM144.914 166.858C147.121 167.263 147.673 167.35 149.155 165.613C149.59 165.091 149.968 164.425 150.549 164.078C151.072 163.759 151.798 163.759 152.437 163.643C152.466 163.846 152.495 164.02 152.524 164.223C151.769 165.149 150.985 166.076 150.258 167.032C148.748 169.03 146.221 169.001 144.274 168.335C143.984 168.248 143.868 167.64 143.694 167.263C144.071 167.119 144.536 166.8 144.914 166.858ZM36.6211 256.664C36.3016 257.446 35.7497 258.141 35.1687 259.068C34.6749 258.547 34.4135 258.286 33.9778 257.823C35.314 255.622 36.4469 253.16 38.1026 251.162C39.9327 248.932 42.1113 247.05 44.5513 245.399C48.2405 242.908 52.4235 241.258 55.8221 238.217C58.9884 235.379 61.8642 232.425 63.7524 228.602C64.9433 226.227 65.9019 223.736 67.2091 221.449C68.4291 219.334 69.8525 217.307 71.3921 215.396C73.1641 213.253 75.0522 211.168 77.0855 209.285C78.538 207.953 80.339 207.026 81.9366 205.81C83.6505 204.536 85.2772 203.174 86.933 201.813C88.3564 200.655 89.8668 199.554 91.174 198.251C92.4812 197.006 93.5269 195.471 94.8051 194.197C97.7971 191.214 99.7724 187.507 102.154 184.118C103.752 181.831 105.785 179.774 108.516 178.645C112.466 177.023 116.446 175.43 120.397 173.751C122.633 172.795 124.957 171.926 126.991 170.623C129.576 168.972 131.9 166.887 133.468 164.194C134.253 162.861 134.776 161.355 135.502 159.994C135.676 159.647 136.199 159.473 136.548 159.212C136.693 159.589 136.983 159.994 136.925 160.313C136.635 161.5 136.431 162.774 135.821 163.817C133.439 167.756 130.157 170.912 126.206 173.229C123.999 174.503 121.501 175.256 119.119 176.183C117.347 176.878 115.517 177.429 113.774 178.181C111.944 178.934 110.055 179.687 108.4 180.73C106.831 181.715 105.292 182.931 104.101 184.35C102.387 186.406 101.08 188.781 99.4819 190.924C97.6809 193.357 95.8799 195.847 93.7884 198.048C91.9583 199.96 89.7506 201.524 87.6882 203.232C85.9453 204.68 84.1733 206.157 82.3723 207.547C80.8037 208.764 79.0899 209.806 77.5503 211.052C76.5337 211.863 75.6622 212.818 74.7617 213.774C71.2178 217.597 68.7777 222.057 66.7444 226.806C65.7567 229.094 64.2462 231.237 62.7066 233.235C60.9637 235.494 59.0465 237.666 56.8969 239.578C55.0669 241.2 52.8592 242.358 50.7677 243.661C48.2115 245.254 45.3647 246.528 43.0989 248.44C40.4555 250.728 38.0154 253.305 36.6211 256.664ZM61.9223 252.06C60.7894 254.521 60.0342 256.983 59.5403 259.618C58.727 263.934 57.9427 268.336 54.3697 271.405C52.9754 272.593 51.3196 273.491 49.6929 274.359C49.2862 274.562 48.1824 274.33 48.0372 273.983C47.6305 273.114 48.3857 272.882 49.141 272.622C52.162 271.55 54.3988 269.552 55.8221 266.627C56.7807 264.716 57.0131 262.688 57.3617 260.603C57.7684 258.228 58.6689 255.94 59.337 253.624C59.8599 251.77 60.8475 250.177 62.0095 248.613C63.4328 246.731 65.321 245.775 67.3834 245.022C67.761 244.878 68.371 245.37 68.8648 245.573C68.8648 245.746 68.8648 245.891 68.8648 246.065C68.0224 246.47 67.1801 246.789 66.3667 247.252C64.4205 248.411 62.939 249.888 61.9223 252.06ZM161.5 177.544C160.222 178.616 158.973 179.716 157.579 180.614C156.591 181.28 155.371 181.57 154.325 182.178C150.055 184.727 145.611 187.043 141.893 190.461C139.278 192.864 137.477 195.789 136.054 198.975C135.531 200.163 134.863 201.263 134.311 202.421C133.12 204.883 132.103 207.432 130.767 209.777C129.547 211.92 128.007 213.919 126.497 215.917C125.103 217.742 123.563 219.479 122.023 221.159C120.077 223.302 118.218 225.561 116.01 227.414C113.28 229.76 110.288 231.816 107.325 233.902C105.466 235.234 103.578 236.653 101.486 237.493C99.2495 238.39 97.5066 239.925 95.5603 241.171C94.166 242.039 92.946 243.198 91.726 244.298C90.3026 245.602 88.792 246.818 87.6011 248.324C86.4391 249.801 85.5386 251.538 84.6962 253.247C83.8248 255.043 83.1276 256.925 82.4886 258.808C81.8495 260.661 81.5299 262.659 80.7747 264.484C79.8742 266.685 78.7994 268.857 77.5213 270.855C75.7493 273.606 73.3093 275.778 70.4335 277.313C68.7487 278.211 66.8605 278.703 65.0885 279.37C65.0595 279.283 65.0305 279.196 65.0015 279.109C64.6529 279.109 64.2752 279.225 63.9848 279.08C63.6362 278.906 63.4038 278.559 63.1133 278.298C63.4038 278.095 63.6652 277.748 63.9557 277.719C66.6281 277.371 69.0392 276.242 71.2469 274.881C72.6993 273.954 73.745 272.419 75.0812 271.232C77.0856 269.407 78.0151 267.003 79.0318 264.629C79.6127 263.296 79.758 261.791 80.2809 260.429C81.559 256.896 82.6047 253.305 84.551 250.004C86.0034 247.513 87.7754 245.283 89.8378 243.43C92.4231 241.055 95.4442 239.143 98.4071 237.232C100.847 235.668 103.52 234.51 105.96 232.946C108.051 231.585 109.968 229.934 111.944 228.399C113.251 227.385 114.587 226.343 115.836 225.242C116.708 224.518 117.55 223.707 118.305 222.868C120.222 220.724 122.111 218.581 123.912 216.38C125.451 214.527 127.02 212.645 128.327 210.646C129.518 208.822 130.418 206.852 131.377 204.883C132.858 201.871 134.34 198.859 135.676 195.789C137.39 191.822 140.556 189.158 143.723 186.522C145.582 184.958 147.906 183.916 150.026 182.67C152.03 181.483 154.064 180.354 156.039 179.166C157.521 178.297 158.915 177.313 160.396 176.473C160.687 176.299 161.181 176.444 161.529 176.589C161.645 176.676 161.674 177.4 161.5 177.544Z" }, 
            ease: "steps(1)", 
            translateX: 0,
            translateY: 0,
          },
        ]
      });
    }
  
    if (animMenStar) {
      gsap.fromTo(".men-star__leg-l", 
        { 
          attr: { d: "M113.034 124C114.825 149.578 122.455 196.2 127.203 221.395C121.466 224.235 115.611 227.216 109.873 230.057C108.874 230.534 107.768 231.281 107.997 232.437C108.236 233.723 109.807 233.85 111.097 233.74C126.347 232.701 141.468 231.673 156.717 230.634C153.389 200.746 139.288 148.593 134.035 119" }
        }, 
        { 
          attr: { d: "M90.0197 118.002C82.5746 142.538 73.0827 188.817 68.5367 214.049C62.164 214.658 55.631 215.356 49.2583 215.964C48.1547 216.053 46.8548 216.357 46.6562 217.519C46.4217 218.806 47.8438 219.484 49.0887 219.842C63.7068 224.307 78.2003 228.737 92.8183 233.203C100.364 204.092 105.781 150.338 111.423 120.817" },
          transformOrigin: "50% 50%",
          duration: 1,
          repeat: -1,
          yoyo: true,
          ease: "none"
        });
      gsap.fromTo(".men-star__leg-r", 
        { 
          attr: { d: "M83.1836 123.999C78.9353 147.349 68.3226 187.885 64.0743 211.235C54.9637 211.097 45.724 210.971 36.6023 210.704C35.6879 210.651 34.6556 210.739 33.9255 211.324C32.8304 212.201 32.8451 213.897 33.7189 214.998C34.4636 216.11 35.8204 216.778 37.0371 217.328C43.788 220.279 50.9334 221.759 58.1968 223.099C66.5257 224.74 74.8546 226.381 83.1836 228.022L108.033 132.5" }
        }, 
        { 
          attr: { d: "M106.622 131.179C119.878 150.866 140.571 187.301 153.827 206.987C147.207 213.248 140.502 219.606 133.784 225.782C133.092 226.383 132.414 227.166 132.3 228.094C132.128 229.487 133.323 230.692 134.717 230.87C136.026 231.147 137.464 230.678 138.719 230.222C145.613 227.623 151.763 223.696 157.9 219.586C165.009 214.947 172.119 210.309 179.229 205.67L130.35 119.922" },
          transformOrigin: "50% 50%",
          duration: 1,
          repeat: -1,
          yoyo: true,
          ease: "none"
        });
        gsap.to(".men-star__eye", {
          duration: 0.5,
          repeat: -1,
          yoyo: true,
          repeatDelay: 4,
          keyframes: [
            { 
              attr: { d: "M110.5 93.5005C110.5 83.5014 102 82.5 96.5 92.0005" }, 
              ease: "power2.InOut", 
              time: 0 
            },
            { 
              attr: { d: "M110.5 93.5005C108.319 92.1865 99.937 91.0859 96.5 92.0005" }, 
              ease: "power2.InOut", 
              time: 0.25 
            },
            { 
              attr: { d: "M110.5 93.5005C110.5 83.5014 102 82.5 96.5 92.0005" }, 
              ease: "power2.InOut", 
              time: 0.35
            },
          ]
        });
  
        const spiralMenStar = document.querySelector('.men-star__spiral');
        const lineLengthStar = spiralMenStar.getTotalLength();
        spiralMenStar.style.strokeDasharray = lineLengthStar;
        spiralMenStar.style.strokeDashoffset = lineLengthStar;
       
        let tlspiralMenStar = gsap.timeline({repeat: -1, repeatDelay: 1});
       
        tlspiralMenStar.to(spiralMenStar, {
          duration: 1,
          strokeDashoffset: 0,
          ease: "power2.inOut"
        }).to(spiralMenStar, {
          duration: 1.5,
          strokeDashoffset: -lineLengthStar,
          ease: "power2.inOut"
        }).set(spiralMenStar, {
          strokeDashoffset: lineLengthStar,
          opacity: 1
        });
  
  
        const paths = document.querySelectorAll('.men-star__lines path');
        paths.forEach(path => {
          const length = path.getTotalLength();
          path.style.strokeDasharray = length;
          path.style.strokeDashoffset = length;
        });
    
        const tl = gsap.timeline({ repeat: -1, repeatDelay: 4 });
    
        const duration = 0.5;
        const overlap = 0.5;
    
        paths.forEach((path, index) => {
          tl.to(path, {
              duration: duration,
              strokeDashoffset: 0,
              ease: "power1.out"
            }, index * (duration - overlap))
            .to(path, {
              duration: duration,
              strokeDashoffset: -path.getTotalLength(),
              opacity: 0,
              ease: "power1.out"
            }, index * (duration - overlap) + duration);
        });
  
    }
  
  }
});

window.addEventListener('load', function () {
  if (typeof gsap !== 'undefined') {
    document.body.classList.remove('_reload');
  }
});
// Функция при смене ширины экрана
function changeOrientation() {
  if (typeof gsap !== 'undefined') {
    document.body.classList.add('_reload');
    location.reload();
  }
}
window.addEventListener('orientationchange', changeOrientation);