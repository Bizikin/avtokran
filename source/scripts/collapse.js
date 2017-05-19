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

