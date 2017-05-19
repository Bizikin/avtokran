
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