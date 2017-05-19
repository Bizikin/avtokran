
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