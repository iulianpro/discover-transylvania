var imgs = ['/assets/images/visit-1.jpg', '/assets/images/visit-2.jpg', '/assets/images/visit-3.jpg', '/assets/images/visit-4.jpg', '/assets/images/visit-5.jpg', '/assets/images/main-image.jpg'];

$('.callout-img').fadeIn(350, mySlide());

function mySlide() {
    setTimeout(function () {
        var url = imgs[imgs.push(imgs.shift()) - 1];
        $('.callout-img').delay(2000).fadeOut(300, function () {
            $(this).css('background-image', 'url(' + url + ')')
            $(this).css('background-repeat', 'no-repeat')
            $(this).css('background-position', 'center center')
        }).fadeIn(350, mySlide())
    });
}

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