
for (i = 0; i < 16; i++){
$('#here').append (`<div class = "boxStyle" id = "toggleTo"></div>`)
}

$('.boxStyle').on ('click', function () {
    $(this).toggleClass ('darkGray') })