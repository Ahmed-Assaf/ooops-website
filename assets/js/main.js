$(document).ready(function() {
    $('input').iCheck({
        checkboxClass: 'icheckbox_square-orange',
    });
});


/*ightbox.option({
    resizeDuration: 200,
    wrapAround: true,
    fadeDuration: 400,
    alwaysShowNavOnTouchDevices: true,
});*/


$("#categories").change(function() {
    var cate = $("#categories").val();

    if (cate == "2") {
        $("#cars-options").show();
    } else {
        $("#cars-options").hide();
    }
});