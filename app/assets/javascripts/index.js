document.addEventListener('DOMContentLoaded', function () {
  var video = document.getElementById('video');
  if(video) {
    video.addEventListener('ended', function() {
      location.href = '/message';
    });
  }
});

