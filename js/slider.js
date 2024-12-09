$(document).ready(function(){
  $('.slider-wrap').slick({
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
    dots: true,
  });
});

// Second ==========

$(document).ready(function(){
  $('.slider-wrap-second').slick({
    autoplay: true,
    autoplaySpeed: 4000,
    dots: true,
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 1288,
        settings: {
          slidesToShow: 2, 
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 928,
        settings: {
          slidesToShow: 1, 
          slidesToScroll: 1
        }
      }
    ]
  });
});

