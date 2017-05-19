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