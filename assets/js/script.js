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
        swal('Hey buddy', 'I\'m Julian, what is your firs name? :)');
        return false;
    } else if (checkName == '') {
        swal('Nice to meet you ' + checkLname, 'I\'d love to know your family name :)');
        return false;
    } else if (emailAdd == '') {
        swal(checkLname + ' ' + checkName + ', really? :)', 'You have to be the star of the movie that I saw last week :). Okay, at what email should I respond to you?');
        return false;
    } else if (theMessage == '') {
        swal('Come on... ', 'Admit that, it fascinated you the story of the vampires, isn\'t it? I can\'t wait to find out your curiosity :)');
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
                swal('Your message is on the way ' + checkLname, 'I was glad to meet you, I\'ll come back to you with an answer, keep in touch and have a lovely day :)', 'success');
            },
            function (error) {
                console.log("FAILED", error);
            }
        );
    return false;  // To block from loading a new page
}