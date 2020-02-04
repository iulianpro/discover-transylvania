$('.card-area').mouseenter(function () {
    $(this).children('div.overlay-d-none').css({ 'display': 'flex' })
});

$('.card-area').mouseleave(function () {
    $('.overlay-d-none').css({ 'display': 'none' })
});

$('.card-area').mouseenter(function () {
    $(this).children('div.card-body').css({ 'color': '#c0f8ea' })
});

$('.card-area').mouseleave(function () {
    $('.card-body').css({ 'color': '#4d4d4d' })
});