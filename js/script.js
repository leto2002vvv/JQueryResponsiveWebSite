'use strict'

// =============================== Burger menu

$(document).ready(function () {
    $('.burger').on('click', function () {
        $('.nav').slideToggle();
    });
});

// =============================== Nav menu dots do active

$('.nav__links').on('click', function () {
    $('.dot').removeClass('dot-active');
    let thisDot = $(this).find('.dot');
    thisDot.addClass('dot-active');
});

// =============================== Round btn adds .dot-active to products

$('.scrollDown-btn').on('click', function () {
    $('.dot').removeClass('dot-active');
    $('.dot-product').addClass('dot-active');
});

// =============================== Squares are moving on scroll

$(document).ready(function () {
    $(window).scroll(function () {
        let scrollPos = $(window).scrollTop();
        let blockUpperTop = $(".block-1__upper").offset().top;

        if (blockUpperTop <= scrollPos) {
            $(".bg-1__img-1, .bg-2__img-2").removeClass('animate__img-1 animate__img-2');

            $(".bg-1__img-1").addClass('animate__img-1');
            $(".bg-2__img-2").addClass('animate__img-2');
        } else {
            $(".bg-1__img-1, .bg-2__img-2").removeClass('animate__img-1 animate__img-2');
        }
    });
});

// =============================== btns 'more details'

$('.btn-show-1').on('click', function () {
    $('.more-details-text-1').show('slow')

    if ($(this).text() === 'MORE DETAILS') {
        $(this).text('HIDE DETAILS')
    } else {
        $('.more-details-text-1').hide('slow')
        $('.btn-show-1').css({
            'margin-top': '20px'
        })
        $(this).text('MORE DETAILS')
    }
})

$('.btn-show-2').on('click', function () {
    $('.more-details-text-2').show('slow')

    if ($(this).text() === 'MORE DETAILS') {
        $(this).text('HIDE DETAILS')
    } else {
        $('.more-details-text-2').hide('slow')
        $('.btn-show-2').css({
            'margin-top': '20px'
        })
        $(this).text('MORE DETAILS')
    }
})

// =============================== Modal-window with fotos 

let images = [
    "./assets/Image-1.jpg",
    "./assets/Image-2.jpg",
    "./assets/Image-3.jpg",
    "./assets/Image-4.jpg",
    "./assets/Image-5.jpg",
    "./assets/hid-1.jpg",
    "./assets/hid-2.jpg",
    "./assets/hid-3.jpg"
];

let currentImageIndex = 0;

function showImage(index) {
    $("#img01").attr('src', images[index]);
}

$(".btn-prev").on('click', function () {
    if (currentImageIndex > 0) {
        currentImageIndex--;
        showImage(currentImageIndex);
    }
});


$(".btn-next").on('click', function () {
    if (currentImageIndex < images.length - 1) {
        currentImageIndex++;
        showImage(currentImageIndex);
    }
});

$(".fotos__item").on('click', function () {
    $("#myModal").css('visibility', 'visible');
    currentImageIndex = images.indexOf($(this).attr('src'));
    showImage(currentImageIndex);
});

$(".popupClose").on('click', function () {
    $("#myModal").css('visibility', 'hidden');
});

// ================================= btn 'SEE MORE' opens up

let isClosed = false;

$('.btn-see-more').on('click', function () {
    if (!isClosed) {
        $('.hidden-foto').show('slow');
        $(this).text('CLOSE');
        isClosed = true;
    } else {
        $('.hidden-foto').hide('slow');
        $(this).text('SHOW MORE');
        isClosed = false;
    }
});


// ================================= Inputs change line's color

$(document).on('click', function (e) {
    let $target = $(e.target).closest('.input-wrap');

    if ($target.length && !$target.hasClass('input-wrap-active')) {
        $('.input-wrap').removeClass('input-wrap-active');
        $target.addClass('input-wrap-active');
    }
});

// ================================= Inputs change placeholder's color