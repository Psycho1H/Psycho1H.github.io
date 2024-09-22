document.addEventListener("DOMContentLoaded", function () {

  const videoContainer = document.querySelector('.video-background');
  const video = document.getElementById('bg-video');
  const muteButton = document.getElementById('muteButton');
  const muteImg = document.getElementById('mute');
  const unmuteImg = document.getElementById('unmute');
  const avatar = document.querySelector('.avatar');
  const analyzerContainer = document.getElementById('analyzer');

  // Video mute buttons
  muteButton.addEventListener('click', () => {
    if (video.muted) {
      video.muted = false;
      unmuteImg.style.display = "block";
      muteImg.style.display = "none";
    } else {
      video.muted = true;
      muteImg.style.display = "block";
      unmuteImg.style.display = "none";
    }
  });

  avatar.addEventListener('click', () => {
    if (video.muted) {
      video.muted = false;
      unmuteImg.style.display = "block";
      muteImg.style.display = "none";
    } else {
      video.muted = true;
      muteImg.style.display = "block";
      unmuteImg.style.display = "none";
    }
  });

  video.volume = 0.09;


  new AudioMotionAnalyzer(
    analyzerContainer,
    {
      mode: 3,
      gradient: 'orangered',
      alphaBars: true,
      overlay: true,
      bgAlpha: 0,
      radial: true,

      linearAmplitude: true,
      linearBoost: 9,
      showPeaks: true,
      onCanvasDraw: instance => {
        instance.radius = .4 + instance.getEnergy();
        avatar.style.transform = `scale(${1 + instance.getEnergy() * 0.25})`;
      },
      source: document.getElementById('bg-video')
    }
  );


  const arrayOfVideos = ['PSYCHO.mp4', 'apply.mp4', 'JujutsuKaisen.mp4']
  const randomVideo = arrayOfVideos[Math.floor(Math.random() * arrayOfVideos.length)];
  console.log(`videos/${randomVideo}`);
  video.src = `videos/${randomVideo}`;

  video.addEventListener('canplay', function () {
    videoContainer.classList.add('loaded');
    video.style.opacity = 1;
  });
});