$(document).ready(function(){
  $('.carousel.carousel-slider').carousel({fullWidth: true});
  window.setInterval(function(){$('.carousel').carousel('next')},5000)
  $(".button-collapse").sideNav();
  $('.tooltipped').tooltip({delay: 50});
  $('.parallax').parallax();

});

$(document).ready(function(){
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

  // business services section
  $('.step-col').on('click', function(e) {
    ($(".step-col").not($(this))).removeClass("step-col-active");
    $(this).toggleClass("step-col-active"); //you can list several class names
    // $(this).toggleClass("btn-pnl-viz");
    if ( $(this).is( ".step-one" ) ) {
      $('.about-service').text('The ACEA provides prompt response and identification of available commercial, office, industrial and developable land requests tailored to your specifications and requirements.  The ACEA acts as your liaison with brokers for follow up information requests while maintaining strict confidentiality until your firm is ready to engage in actual site visits.  Our staff is available to accompany you on site visits and provide insight and assistance throughout the process.');
      $('.subhead').text($('.step-title-one').text());

    } else if($(this).is( ".step-two" )){
      $('.about-service').text('he ACEA coordinates contact with municipal, county, and state agencies; including planning and zoning committees, environmental oversight boards and permit inspection professionals.  Our staff is available to assist you in working with state and federal regulatory agencies and meeting their requirements.');
      $('.subhead').text($('.step-title-two').text());
    }
    else if($(this).is( ".step-three" )){
      $('.about-service').text('The ACEA introduces you to utility company representatives, municipal and county officials, business leaders, education institutions and advocacy groups.  Our staff helps connect you to the right person for every stage of your development and project.  Upon request, we will provide professional service referrals for recognized experts in their fields.')
      $('.subhead').text($('.step-title-three').text());

    }
    else if($(this).is( ".step-four" )){
      $('.about-service').text('The ACEA provides experience in generating data and tailoring information requests taken directly from primary sources such as the US Department of Labor, Bureau of the Census, and various New Jersey state and county agencies.  Such information may include local wage rates by occupation, land and building prices, and information on Atlantic County sewer, water, sewage, roads, public transportation and household characteristics.  The ACEA strives to place you in an informed position prior to a full project due diligence commitment.')
      $('.subhead').text($('.step-title-four').text());

    }
    else if($(this).is( ".step-five" )){
      $('.about-service').text('The ACEA directs you to workforce training professionals who will assist you in training employees to meet your specifications, often subsidized by the New Jersey Department of Labor. ')
      $('.subhead').text($('.step-title-five').text());

    }
    else if($(this).is( ".step-six" )){
      $('.about-service').text('The ACEA provides information about available financing programs and opportunities, as well as referrals to financing groups and agencies such as the New Jersey Economic Development Authority, the Atlantic County Improvement Authority, economic and community development organizations, and commercial financial institutions.')
      $('.subhead').text($('.step-title-six').text());

    }
    else if($(this).is( ".step-seven" )){
      $('.about-service').text('The ACEA promotes your business accomplishments as part of its marketing campaigns in print and online. Your success and growth is our mission!')
      $('.subhead').text($('.step-title-seven').text());

    }
    e.preventDefault();
  });
});
