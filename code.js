$(document).ready(function() {
  var currentstory;

  audiojs.events.ready(function() {
    var as = audiojs.createAll();

    var audiowrapper0 = document.getElementById("audiojs_wrapper0");
    var audio = $(audiowrapper0).find("audio");
    audio[0].addEventListener('play', function(){
      $(currentstory).attr("src", "images/pause.png");
      $(currentstory)[0].classList.add("pausebutton");
      $(currentstory)[0].classList.remove("playbutton");
    });
    audio[0].addEventListener('pause', function(){
      $(currentstory).attr("src", "images/play.png");
      $(currentstory)[0].classList.add('playbutton');
      $(currentstory)[0].classList.remove('pausebutton');
    });

    var container;
    var audioPlayer;
    $(".play-button").click(function() {
      if ($(this).hasClass("playbutton")) { // switch to pause
        if (currentstory != this) {
          var url = $(this).attr("data-url");
          as[0].load(url);

          if (currentstory) {
            $(currentstory).attr("src", "images/play.png");
            $(currentstory)[0].classList.add('playbutton');
            $(currentstory)[0].classList.remove('pausebutton');
          }
        }
        $(this).attr("src", "images/pause.png");
        $(this)[0].classList.add("pausebutton");
        $(this)[0].classList.remove("playbutton");
        $(".audiojs").css("display", "block");
        currentstory = this;
        $('.audiojs').each(function(index) {
          container = $(this);
          audioPlayer = container.find('audio');
          audiojs.instances["audiojs0"].play();
        });

      } else if ($(this).hasClass("pausebutton")) { // switch to play
        $(this).attr("src", "images/play.png");
        $(this)[0].classList.add('playbutton');
        $(this)[0].classList.remove('pausebutton');
        $('.audiojs').each(function(index) {
          audiojs.instances["audiojs0"].pause();
        });
      }
    });
    $(".gif-div").hover(function(){
      var src = $('.gif', this).attr('src').replace('png', 'gif');
      $('.gif', this).attr('src', src);
    }, function(){
      var src = $('.gif', this).attr('src').replace('gif', 'png');
      $('.gif', this).attr('src', src);
    });
  });
});
