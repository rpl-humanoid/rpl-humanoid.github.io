// Speed up video on hover
document.addEventListener('DOMContentLoaded', function() {
  const hoverVideos = document.querySelectorAll('.hover-speedup');
  
  hoverVideos.forEach(video => {
    // Store original playback rate
    const originalRate = video.playbackRate || 1.0;
    
    // Speed up on mouse enter
    video.addEventListener('mouseenter', function() {
      this.playbackRate = 2.0;
    });
    
    // Return to normal speed on mouse leave
    video.addEventListener('mouseleave', function() {
      this.playbackRate = originalRate;
    });
  });
});
