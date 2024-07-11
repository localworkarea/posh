let icon01AnimAdded = false;
          let icon02AnimAdded = false;
          let icon03AnimAdded = false;
          
          ScrollTrigger.create({
              trigger: retailSteps,
              start: "center center",
              end: `+=${scrollDuration / 2}`,
              pin: true,
              pinSpacing: true,
              scrub: true,
              onUpdate: (self) => {
                  let progress = self.progress;
              
                  if (progress < 0.45) {
                      gsap.to(".steps-retail-01", { opacity: 1, duration: 0.3 });
                      gsap.to(".steps-retail-02", { opacity: 0, duration: 0.3 });
                      gsap.to(".steps-retail-03", { opacity: 0, duration: 0.3 });
                  
                      if (!icon01AnimAdded) {
                        icon01.classList.add("_active-anim");
                        setTimeout(() => {
                            icon01.classList.remove("_active-anim");
                        }, 1800);
                        icon01AnimAdded = true;
                        icon03AnimAdded = false;
                      }
                      icon01.addEventListener('mouseenter', () => {
                        icon01.classList.add('_active-anim');
                        setTimeout(() => {
                          icon01.classList.remove('_active-anim');
                        }, 1800);
                      });

                      icon02.classList.remove("_active-anim");

                      stepsRetail01.classList.add("_active");
                      stepsRetail02.classList.remove("_active");
                      stepsRetail03.classList.remove("_active");

                  } else if (progress < 0.70) {
                      gsap.to(".steps-retail-01", { opacity: 0, duration: 0.3 });
                      gsap.to(".steps-retail-02", { opacity: 1, duration: 0.3 });
                      gsap.to(".steps-retail-03", { opacity: 0, duration: 0.3 });
                  
                      icon02.classList.add("_active-anim");
                      icon01AnimAdded = false;
                      icon03AnimAdded = false;
                      
                      stepsRetail01.classList.remove("_active");
                      stepsRetail02.classList.add("_active");
                      stepsRetail03.classList.remove("_active");

                  } else if (progress < 1) {
                      gsap.to(".steps-retail-01", { opacity: 0, duration: 0.3 });
                      gsap.to(".steps-retail-02", { opacity: 0, duration: 0.3 });
                      gsap.to(".steps-retail-03", { opacity: 1, duration: 0.3 });
                      
                      if (!icon03AnimAdded) {
                        icon03.classList.add("_active-anim");
                        setTimeout(() => {
                            icon03.classList.remove("_active-anim");
                        }, 2500);
                        icon03AnimAdded = true;
                        icon01AnimAdded = false;
                      }
                      icon03.addEventListener('mouseenter', () => {
                        icon03.classList.add('_active-anim');
                        setTimeout(() => {
                          icon03.classList.remove('_active-anim');
                        }, 2500);
                      });

                      icon02.classList.remove("_active-anim");

                      stepsRetail02.classList.remove("_active");
                      stepsRetail03.classList.add("_active");
                  }
              },
              onLeave: () => {
                stepsRetail03.classList.remove("_active");
                icon03AnimAdded = false;
              },
              onLeaveBack: () => {
                  stepsRetail01.classList.remove("_active");
                  icon01AnimAdded = false;
              }
          });


          const elementsWithKeyframes = {
            ".girl-puzzle__l1": [
              { 
                attr: { d: "M59.2354 " }, 
              },
              { 
                attr: { d: "M54.6019" }, 
              },
              { 
                attr: { d: "M59.2354 " }, delay: 2
              },
            ],
            ".girl-puzzle__l2": [
              { 
                attr: { d: "M97.6091 " }, 
              },
              { 
                attr: { d: "M118.031 " }, 
              },
              { 
                attr: { d: "M97.6091 " }, delay: 2
              },
            ],
           // остальные элементы svg
          };