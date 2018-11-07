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

  var name = document.getElementById('message_name');
  var text = document.getElementById('message_text');

  if(name && text){
    var form = document.getElementById('new_message');
    form.addEventListener('submit', function (event) {
      if(name.value.length === 0 || text.value.length === 0) {
        alert( '名前とメッセージを入力してね！' );
        event.preventDefault();
        var button = document.getElementsByClassName('l-message_btn')[0];
        button.dataset.disableWith = '送信';
        setTimeout(function () {
            button.disabled = false;
            button.value = '送信';
            button.dataset.disableWith = '送信中';
          }, 500);
      }
    })
  }
});
