$(document).ready(function () {
  let owl = $('.slider');
  owl.owlCarousel({
    center: true,
    items:7,
    loop:true,
    margin:0,
    nav: false,
    dots: false,
    startPosition: 3,
    responsive:{
      0:{
        items:1,
        center: true,
        autoplay: true,
        autoplaySpeed: 500,
        autoplayTimeout: 2000,
        nav: true,
      },
      600:{
        items:1,
        center: true,
      },
      960:{
        items:4,
        center: true,
      },
      1200:{
        items:5,
        center: true,
      },
      1290:{
        items:7,
        center: true,
      }
    }


  });
  owl.on('mousewheel', '.owl-stage', function (e) {
    if (e.deltaY>0) {
      owl.trigger('next.owl');
    } else {
      owl.trigger('prev.owl');
    }
    e.preventDefault();
  });
  let owl2 = $('.partners_slider');

  owl2.owlCarousel({
    center: true,
    items:3,
    loop:true,
    margin:0,
    nav: true,
    dots: false,
    responsive:{
      0:{
        items:2,
      },
      600:{
        items:1
      },
      960:{
        items:3
      },
      1200:{
        items:3
      }
    }
  });

  $('.mobile_menu').click(function(event) {
    $('.main_menu').toggleClass('active');
    $(this).toggleClass('active');
  });
  $('.main_menu,.footer_list,.buttons_row').on('click','a', function (event) {
    event.preventDefault();
    var id  = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 1500);
  });
  up();
  $('body').mousemove(function(e){
    let posX = e.pageX/100;
    let posY= e.pageY/100;
    let phoneX = e.pageX/200;
    let phoneY = e.pageY/200;
  //   $('.cards,.number,.text_side,.price_block').css("transform","translate("+posX+"px,"+posY+"px)");
  //   $('.i_phone_btn').css("transform","translate("+phoneX+"px,"+phoneY+"px)");
    $('.fifth_section').css({
      "background-position-x":+posX+"px",
      "background-position-y":+posY+"px"
  });
  });

});
function up() {
  var top = Math.max(document.body.scrollTop,document.documentElement.scrollTop);
  if(top > 0) {
    window.scrollBy(0,((top+100)/-10));
    t = setTimeout('up()',20);
  } else clearTimeout();
  return false;
}
$(window).on('load', function () {
  var $preloader = $('#p_prldr'),
    $svg_anm   = $preloader.find('.svg_anm');
  $svg_anm.fadeOut();
  $preloader.delay(500).fadeOut('slow');

});

// $(window).scroll(function () {
//   let indx = $('.first_section').index();
//   console.log(indx);
//   let st = $(this).scrollTop();
//   $('.title,.buttons_row').css({
//     'transform':'translate(0px,-'+ st/2 +'px',
//   });
// });
