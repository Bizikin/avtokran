$('.slick-carousel').slick({
  centerMode: true,
  focusOnSelect: true,
  slidesToShow: 3,
  variableWidth: true,
  nextArrow: '<button type="button" class="slick-next"><svg width="35" height="35"><use xlink:href="#icon-carousel-next"></use></svg></button>',
  prevArrow: '<button type="button" class="slick-prev"><svg width="35" height="35"><use xlink:href="#icon-carousel-prev"></use></svg></button>',
  responsive: [
    {
      breakpoint: 480,
      settings: {
        dots: true,
        arrows: false,
        centerMode: true,
        slidesToShow: 1
      }
    }
  ]
});


$('.gallery-carousel__for').slick({
  adaptiveHeight: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  fade: true,
  infinite: false,
  nextArrow: '<button type="button" class="slick-next"><svg width="35" height="35"><use xlink:href="#icon-carousel-next-corner"></use></svg></button>',
  prevArrow: '<button type="button" class="slick-prev"><svg width="35" height="35"><use xlink:href="#icon-carousel-prev-corner"></use></svg></button>',
  asNavFor: '.gallery-carousel__nav',
  responsive: [
    {
      breakpoint: 767,
      settings: {
        dots: true,
        infinite: true,
        arrows: false,
      }
    },
  ]
});


$('.gallery-carousel__nav').slick({
  slide: '.slick-carousel__item',
     slidesToShow: 3,
  slidesToScroll: 1,
   centerMode: true,
  centerPadding: '60px',
  variableWidth: true,
  // infinite: false,

  arrows: false,
  asNavFor: '.gallery-carousel__for',
  //centerMode: true,
  focusOnSelect: true
});



$.indPos = function() {
  $('.slick-dots').each(function(){
    var indWidth = ($(this).width()/2);
    var indParentWidth = ($(this).parent().outerWidth()/2);
    var indCenter = indParentWidth - indWidth; 
    $(this).css("left", indCenter);
  });
};
$(document).ready($.indPos); 
$(window).resize($.indPos);


