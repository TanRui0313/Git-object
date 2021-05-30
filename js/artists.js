document.addEventListener('DOMContentLoaded', function () {
    ScrollReveal().reveal('.mod_pic7', {
        distance: '100px',
        duration: 500,
        easing: 'ease-out',
        interval: 200,
        origin: 'top'
    })
    ScrollReveal().reveal('.top_box__desc,.top_box_tit,.top_box__btn,.mod_pic6,.top_box__dot,.top_box__line', {
        distance: '40px',
        duration: 800,
        easing: 'ease-out',
        interval: 200,
        origin: 'bottom'
    })
    ScrollReveal().reveal('.tit_txt,.tit_txt2,.tit_txt3,.tit_txt4,.tit_txt5,.mod_pic2,.mod_tit,.mod_pic4', {
        distance: '20px',
        duration: 500,
        easing: 'ease-out',
        interval: 200,
        origin: 'left'
    })
    ScrollReveal().reveal('.mod_pic1,.mod_pic3', {
        distance: '50px',
        duration: 1000,
        easing: 'ease-out',
        interval: 200,
        origin: 'right'
    })
    ScrollReveal().reveal('.mod_pic9,.mod_pic10,.mod_pic11,.mod_pic12', {
        distance: '0px',
        duration: 500,
        easing: 'ease-out',
        interval: 200,
    })

    var pic8 = $('.mod_more').eq(2).offset().top;
    $(window).scroll(function () {
        if ($(document).scrollTop() >= pic8) {
            $('.mod_pic8').addClass('scale');
        }
    })

})