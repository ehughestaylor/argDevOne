$(document).ready(function(){
  $('.carousel.carousel-slider').carousel({fullWidth: true});
  window.setInterval(function(){$('.carousel').carousel('next')},5000)
  $(".button-collapse").sideNav();

});

$(document).ready(function(){
  $('.parallax').parallax();
  var scrollTop = 0;
  $(window).scroll(function(){
    scrollTop = $(window).scrollTop();
     $('.counter').html(scrollTop);

    if (scrollTop >= 100) {
      $('nav').addClass('bluenav');
      $('.brand-logo img').addClass('small-logo').fadeIn();
    } else if (scrollTop < 100) {
      $('nav').removeClass('bluenav');
      $('.brand-logo img').removeClass('small-logo');
    }
  });
});
