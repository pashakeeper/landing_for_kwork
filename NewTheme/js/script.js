$(document).ready(function () {
  let owl = $('.slider');
  owl.owlCarousel({
    center: true,
    items: 1,
    loop: true,
    margin: 0,
    nav: true,
    dots: true,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    responsive: {
      0: {
        items: 1,
        center: true,
        autoplay: false,
        autoplaySpeed: 500,
        autoplayTimeout: 2000,
        nav: true,
      }
    }
  });
  $('.slider_post').owlCarousel({
    center: false,
    items: 3,
    loop: false,
    margin: 0,
    nav: true,
    dots: false,
    responsive: {
      0: {
        items: 1,
        center: false,
        autoplay: false,
        autoplaySpeed: 500,
        autoplayTimeout: 2000,
        nav: true,
      },
      1000: {
        items: 3,
        center: false,
        autoplay: false,
        autoplaySpeed: 500,
        autoplayTimeout: 2000,
        nav: true,
      }
    }
  });
  $('.licence_slider').owlCarousel({
    center: false,
    items: 3,
    loop: true,
    margin: 0,
    nav: true,
    dots: false,
    responsive: {
      0: {
        items: 1,
        center: false,
        autoplay: false,
        autoplaySpeed: 500,
        autoplayTimeout: 2000,
        nav: true,
      },
      1000: {
        items: 4,
        center: false,
        autoplay: false,
        autoplaySpeed: 500,
        autoplayTimeout: 2000,
        nav: true,
      }
    }
  });
  $('.mobile_menu').click(function(event) {
    $('.main_menu').toggleClass('active');
    $(this).toggleClass('active');
  });
  $("#menu").on("click","a", function (event) {
    event.preventDefault();
    var id  = $(this).attr('href'),
        top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 1500);
  });
});
