document.addEventListener('DOMContentLoaded', function () {
  var video = document.getElementById('video');
  video.addEventListener('ended', function() {
    location.href = '/message';
  });
});

