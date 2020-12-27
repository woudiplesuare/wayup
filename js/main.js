let btn = document.querySelector('.btn-theme')

btn.onclick = function () {
    let bg = document.querySelector('.header');
    bg.classList.toggle('headertwo');
    let footer = document.querySelector('.footer');
    footer.classList.toggle('footertwo');
    let mail = document.querySelector('.mail');
    mail.classList.toggle('mailtwo');
}


$(function () {
    $(window).scroll(function() {
        $('.moments').each(function(){
            var imagePos = $(this).offset().top;

            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow+650) {
                $(this).addClass("fadeInUp");
            }
        });
    });
    $(window).scroll(function() {
        $('.section-title').each(function(){
            var imagePos = $(this).offset().top;

            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow+650) {
                $(this).addClass("fadeInDown");
            }
        });
    });
    $(window).scroll(function() {
        $('.mail .section-title').each(function(){
            var imagePos = $(this).offset().top;

            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow+650) {
                $(this).addClass("fadeInLeft");
            }
        });
    });
    $(window).scroll(function() {
        $('.form').each(function(){
            var imagePos = $(this).offset().top;

            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow+650) {
                $(this).addClass("fadeInRight");
            }
        });
    });
}) 