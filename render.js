$.global = new Object();

var COUNTER = 0;
var IMAGES = [];
var TIMER = 0;


$(document).ready(function (){
  get_latest_images()
});


///lalit code

function get_latest_images(argument) {
  $.getJSON(CONTEXT_PATH + "internal/api/file/list").done(function(resp){
    IMAGES = resp.files;
    if(!IMAGES.length) return;
    var image = $("#slide-window");
    image.css("background-image","url("+CONTEXT_PATH+"data/"+IMAGES[COUNTER]+")");
    clearInterval(TIMER);
    TIMER = setInterval(function() {
      image.fadeOut(500, function() {
        image.css("background-image","url("+CONTEXT_PATH+"data/"+IMAGES[COUNTER++]+")");
        image.fadeIn(500);
      });
      if(COUNTER >= IMAGES.length)
      {
        COUNTER = 0;
      }
    },5000);
  }).fail(function(){
    setTimeout(get_latest_images,3*1000)
  }).always(function(){
    setTimeout(get_latest_images,300*1000)
  })
}


