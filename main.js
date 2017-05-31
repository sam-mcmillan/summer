// Fixed Navigation //
$(window).scroll(function() {
  var headerHeight = $('header').height();
  if($(this).scrollTop() > headerHeight) {
    $('nav').addClass('fixed-nav');
  } else {
    $('nav').removeClass('fixed-nav');
  }
});

// Button Rollover //
$(".content-box").hover(function(){
  $(this).find(".description-content, .buttons").fadeToggle();
});

// Linkable area //
$(".description-left, .description-right").click(function() {
  window.location = $(this).find("a").attr("href");
  return false;
});


$(function () {
    addTouchEvents();
});

addTouchEvents = function() {
    var isTouchDevice = (('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch);

    if (isTouchDevice) {
        //replace link clicks with ontouchend events for more responsive UI
        $("a", "[onclick]").on("touchstart",function(e) {
            $(this).trigger("click");
            e.preventDefault();
            return false;
        });
    }
}
