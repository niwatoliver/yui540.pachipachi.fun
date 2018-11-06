document.addEventListener('DOMContentLoaded', function () {
  var video = document.getElementById('video');
  if(video) {
    video.addEventListener('ended', function() {
      location.href = '/message';
    });

    var soundOff = document.getElementsByClassName('c-sound_off')[0];
    var soundUp = document.getElementsByClassName('c-sound_up')[0];

    soundOff.addEventListener('click', function () {
      soundOff.style.display = 'none';
      soundUp.style.display = 'block';
      video.muted= false;
    });

    soundUp.addEventListener('click', function () {
      soundUp.style.display = 'none';
      soundOff.style.display = 'block';
      video.muted= true;
    });
  }
});

