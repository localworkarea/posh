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