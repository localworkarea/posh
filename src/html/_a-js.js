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
         
      } else if (progress < 0.66) {
 
      } else if (progress < 1) {
      
      }
  },
  onLeave: () => {
      document.querySelector(".steps-retail-03").classList.remove("_active");
  },
  onLeaveBack: () => {
      document.querySelector(".steps-retail-01").classList.remove("_active");
  }
});