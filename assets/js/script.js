$(document).ready(function () {

    // defined images slide array
    const imgs = ['visit-1.jpg', 'visit-2.jpg', 'visit-3.jpg', 'visit-4.jpg', 'visit-5.jpg', 'main-image.jpg'];

    // targeting DOM element where to show slide
    $('.callout-img').fadeIn(0, changeSlider());

    // function to show images in continuously slide
    function changeSlider() {
        setTimeout(function () {
            let path = imgs[imgs.push(imgs.shift()) - 1];
            $('.callout-img').delay(2000).fadeOut(350, function () {
                $(this).css('background-image', 'url(assets/images/' + path + ')');
                $(this).css('background-repeat', 'no-repeat');
                $(this).css('background-position', 'center center');
            }).fadeIn(350, changeSlider());
        });
    }

    // function to targeting DOM element where to show overlay content and hide card body text
    $('.card-area').hover(function () {
        $(this).children('.overlay-d-none').css({ 'display': 'flex' });    // over
        $(this).children('.card-body').css({ 'color': '#c0f8ea' });

    }, function () {
        $('.overlay-d-none').css({ 'display': 'none' });    // out
        $('.card-body').css({ 'color': '#4d4d4d' });
    });

    // function to targeting DOM element to show/hide touch screen icon in xs, sm and md displays and hide in lg and xl displays
    function hideTouchIcon(minWidth) {
        if (minWidth.matches) {
            $('.touch-icon').css({ 'display': 'none' });
        } else {
            $('.card-area').hover(function () {
                $(this).children('.touch-icon').css({ 'display': 'none' });
            }, function () {
                $('.touch-icon').css({ 'display': 'block' });
            });
        }
    }

    let minWidth = window.matchMedia('(min-width: 992px)');
    hideTouchIcon(minWidth);
    minWidth.addListener(hideTouchIcon);
});

// function to send email from form with external js EmailJS
function sendMail(mailMeForm) {
    let checkLname = document.forms["myForm"]["fname"].value;
    let checkName = document.forms["myForm"]["name"].value;
    let emailAdd = document.forms["myForm"]["emailaddress"].value;
    let theMessage = document.forms["myForm"]["dtnewemail"].value;

    // validate input form
    if (checkLname == '') {
        swal('Hey buddy', 'What is your firs name?');
        return false;
    } else if (checkName == '') {
        swal('Nice to meet you ' + checkLname, 'We\'d love to know your family name');
        return false;
    } else if (emailAdd == '') {
        swal('Okay ' + checkLname + ' ' + checkName, 'At what email address should we respond to you?');
        return false;
    } else if (theMessage == '') {
        swal('One more thing', 'What is your curiosity? We can\'t wait to find out.');
        return false;
    }

    // send email
    emailjs.send("gmail", "first_test_template", {
        "from_name": mailMeForm.name.value,
        "from_email": mailMeForm.emailaddress.value,
        "project_request": mailMeForm.dtnewemail.value
    })
        .then(
            function (response) {
                console.log("SUCCESS", response);
                swal('Your message is on the way ' + checkLname, 'We was glad to meet you, We\'ll come back to you with an answer, have a lovely day :)', 'success');
            },
            function (error) {
                console.log("FAILED", error);
            }
        );
    return false;  // To block from loading a new page
}