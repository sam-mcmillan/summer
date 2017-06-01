// Fixed Navigation //
$(window).scroll(function() {
  var headerHeight = $('header').height();
  if($(this).scrollTop() > headerHeight) {
    $('nav').addClass('fixed-nav');
  } else {
    $('nav').removeClass('fixed-nav');
  }
});

// Hover effect //
$(".content-box").hover(function(){
  if($(window).width() > 1082) {
    $(this).find(".description-content, .buttons").fadeToggle();
  }
});

// Expand linkable area //
$(".description-left, .description-right").click(function() {
  window.location = $(this).find("a").attr("href");
  return false;
});
