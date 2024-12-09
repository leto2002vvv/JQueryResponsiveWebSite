$(function () {
    $('.fotos__item').on('click', function (event) {
        event.preventDefault();

        const modalFoto = $('<div>').addClass('modalWindowFoto')
            .append($('<span>').addClass('closeBtn').text('&times;'))
            .append($('<img>').attr('id', 'modal-img').attr('src', $(this).attr('src')))
        $('body').append(modalFoto);
    });
});

alert('g')
