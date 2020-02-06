let imgs = ['visit-1.jpg', 'visit-2.jpg', 'visit-3.jpg', 'visit-4.jpg', 'visit-5.jpg', 'main-image.jpg'];

$('.callout-img').fadeIn(0, changeSlider());

function changeSlider() {
    setTimeout(function () {
        let path = imgs[imgs.push(imgs.shift()) - 1];
        $('.callout-img').delay(2000).fadeOut(350, function () {
            $(this).css('background-image', 'url(/assets/images/' + path + ')')
            $(this).css('background-repeat', 'no-repeat')
            $(this).css('background-position', 'center center')
        }).fadeIn(350, changeSlider())
    });
}

$('.card-area').hover(function () {
    $(this).children('.overlay-d-none').css({ 'display': 'flex' })    // over
    $(this).children('.card-body').css({ 'color': '#c0f8ea' })

}, function () {
    $('.overlay-d-none').css({ 'display': 'none' })    // out
    $('.card-body').css({ 'color': '#4d4d4d' })
}
);