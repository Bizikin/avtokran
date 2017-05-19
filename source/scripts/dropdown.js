$('*[data-type="dropdown"] .dropdown-menu a').on('click', function (event) {
	var currValue = $(this).text();	
	var inputField = $(this).parent().parent().siblings('[data-toggle="dropdown"]');
	inputField.text(currValue);
	inputField.removeClass('placeholder');
  event.preventDefault();
});