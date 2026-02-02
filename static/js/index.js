// Default 2x speed, normal speed on hover
document.addEventListener('DOMContentLoaded', function() {
  const hoverVideos = document.querySelectorAll('.hover-speedup');
  
  hoverVideos.forEach(video => {
    // Set default playback rate to 2x
    video.playbackRate = 2.0;
    
    // Slow down to normal speed on mouse enter
    video.addEventListener('mouseenter', function() {
      this.playbackRate = 1.0;
    });
    
    // Return to 2x speed on mouse leave
    video.addEventListener('mouseleave', function() {
      this.playbackRate = 2.0;
    });
  });
});
