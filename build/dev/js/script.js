
$('#choose-all').change(function() {
    if(this.checked) {
    	$('.imgs-list-block__item > .checkbox input').each(function() {
    		$(this).prop( "checked", true);
    	});
    }
    else {
    	$('.imgs-list-block__item > .checkbox input').each(function() {
    		$(this).prop( "checked", false);
    	});
    }
});

//************************************************************//

$('[data-event="aboutMeEditOpen"]').on('click', function (event) {
		event.preventDefault();
    $(this).parent().css("display","none");
});

$('[data-event="aboutMeEditClose"]').on('click', function () {
		event.preventDefault();
    var cont = $(this).parent().parent();
    cont.collapse('hide');
		cont.on('hidden.bs.collapse', function () {
		  cont.siblings('.about-me').css('display','block');
		}); 
});

$('#about-me__desc , #about-me__desc_phone').on('show.bs.collapse', function () {
    $(this).parent().siblings('.btn-open-full-text').css('display','none');
    $(this).parent().find('.show-more').css('display','none');
});



//************************************************************//

$('*[data-type="dropdown"] .dropdown-menu a').on('click', function (event) {
	var currValue = $(this).text();	
	var inputField = $(this).parent().parent().siblings('[data-toggle="dropdown"]');
	inputField.text(currValue);
	inputField.removeClass('placeholder');
  event.preventDefault();
});

//************************************************************//

$('[data-object="editTitle"]').on('click', function () {
        var container = $(this).parents('.title-edit');
        container[0].setAttribute('data-events', 'edit');
        var el = container.find('.title-edit-field');
        el[0].focus();
        el[0].setSelectionRange(el[0].value.length,el[0].value.length);
});

$('[data-control="saveTitle"]').on('focusout', function () {
    var val = $(this).val();
    var titleEdit = $(this).parents('.title-edit');
    var titleEditText = titleEdit.find('.title-edit__text');
    titleEdit[0].setAttribute('data-events', '');
    console.log(titleEditText);
    titleEditText.text(val);
});

//************************************************************//


$('#modal_gallery').on('shown.bs.modal', function () {
  $('#gallery-carousel__nav').collapse('show');
  $('.gallery-carousel__for').slick('slickGoTo', 0);
});

$('#modal_gallery').on('shown.bs.modal', function () {
  $('.gallery-carousel__for').resize();
});

$(document).on('hidden.bs.modal', function (event) {
    if ($('.modal:visible').length) {
        $('body').addClass('modal-open');
    }
});
$('.modal[data-level="two"]').on('show.bs.modal', function (event) {
    var zIndex = Number($('.modal-backdrop').css("z-index")) + 10;
    $('.modal-backdrop').css({"z-index": zIndex});
});
$('.modal[data-level="two"]').on('hide.bs.modal', function (event) {
    var zIndex = Number($('.modal-backdrop').css("z-index")) - 10;
    $('.modal-backdrop').each(function(){
        $(this).css({"z-index": zIndex});
    });
});

//************************************************************//

// $('select').change(function() {
// 	if ($(this).children('option:first-child').is(':selected')) {
// 	  $(this).addClass('placeholder');
// 	} else {
// 	 $(this).removeClass('placeholder');
// 	}
// });



//************************************************************//

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
  slidesToScroll: 1,
  variableWidth: true,
  infinite: false,
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




//************************************************************//

$('[data-sortable="sortable-list"]').sortable({
	items: ".sortable",
    handle: ".move-icon",
});



//************************************************************//

// $('.tooltip-elem').mouseenter(function () {
//      var tooltipBottom = $(this).find('.tooltip-elem-body__bottom');
//      if (tooltipBottom.length > 0) {
//          tooltipBottom.css("bottom", "-" + (tooltipBottom.outerHeight() + 5) + "px");
//      };    
//  });