$(document).ready(function () {

    const imgs = ['visit-1.jpg', 'visit-2.jpg', 'visit-3.jpg', 'visit-4.jpg', 'visit-5.jpg', 'main-image.jpg'];

    $('.callout-img').fadeIn(0, changeSlider());

    function changeSlider() {
        setTimeout(function () {
            let path = imgs[imgs.push(imgs.shift()) - 1];
            $('.callout-img').delay(2000).fadeOut(350, function () {
                $(this).css('background-image', 'url(assets/images/' + path + ')')
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

});

function sendMail(mailMeForm) {
    let checkLname = document.forms["myForm"]["fname"].value;
    let checkName = document.forms["myForm"]["name"].value;
    let emailAdd = document.forms["myForm"]["emailaddress"].value;
    let theMessage = document.forms["myForm"]["dtnewemail"].value;
    if (checkLname == '') {
        swal('Atention!', 'First name must be filled out');
        return false;
    } else if (checkName == '') {
        swal('Atention!', 'Last name must be filled out');
        return false;
    } else if (emailAdd == '') {
        swal('Atention!', 'Email Address must be filled out');
        return false;
    } else if (theMessage == '') {
        swal('Atention!', 'What is your message?');
        return false;
    }

    emailjs.send("gmail", "first_test_template", {
        "from_name": mailMeForm.name.value,
        "from_email": mailMeForm.emailaddress.value,
        "project_request": mailMeForm.dtnewemail.value
    })
        .then(
            function (response) {
                console.log("SUCCESS", response);
                swal('Thank you', 'Your message was successfully sent', 'success');
            },
            function (error) {
                console.log("FAILED", error);
            }
        );
    return false;  // To block from loading a new page
}