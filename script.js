$(document).ready(function () {
    new Swiper(".slider", { slidesPerView: (window.screen.width > 767) ? 3 : 1, spaceBetween: 30, slidesPerGroup: (window.screen.width > 767) ? 3 : 1, navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" } }),
    new Swiper(".scheme-slider", { 
        slidesPerView: (window.screen.width > 767) ? 2 : 1, 
        spaceBetween: 30, 
        slidesPerGroup: (window.screen.width > 767) ? 2 : 1, 
        navigation: { 
            nextEl: "#scheme-block-mob .scheme-control-right", 
            prevEl: "#scheme-block-mob .scheme-control-left" 
        } 
        });
        new Swiper(".scheme-slider", { 
            slidesPerView: (window.screen.width > 767) ? 2 : 1, 
            spaceBetween: 30, 
            slidesPerGroup: (window.screen.width > 767) ? 2 : 1, 
            navigation: { 
                nextEl: "#scheme-block .scheme-control-right", 
                prevEl: "#scheme-block .scheme-control-left" 
            } 
            });
    $(".selectBox").SumoSelect(),
        $(".pretty input").on("click", function () {
            $(this).prop("checked") ? $(".form-group > div > button").removeClass("btn-disabled") : $(".form-group > div > button").addClass("btn-disabled");
        }),
        $(".form-group > div > button").on("click", function () {
            let errors = 0;
            $(".form-group > div > input").each(function () {
                if ("" == $(this).val()) $(this).addClass("failed"), $(this).parent().find(".input-error").text("Заполните поле"), errors++;
                else if (($(this).parent().find(".input-error").text(""), $(this).removeClass("failed"), "email" == $(this).attr("type"))) {
                    let email = $(this).val();
                    email.length > 0 && 1 !== (email.match(/.+?\@.+/g) || []).length
                        ? ($(this).addClass("failed"), $(this).parent().find(".input-error").text("Введите корректный email"), errors++)
                        : ($(this).parent().find(".input-error").text(""), $(this).removeClass("failed"));
                }
            });
            if(0 == errors) {
                $.ajax({
                    url: './send.php',
                    method: "POST",
                    data: {
                        'name': $('#name').val(),
                        'phone': $('#phone-input').val(),
                        'company': $('#company').val(),
                        'email': $('#email').val(),
                        'time': $('.SelectBox span').text()
                    },
                    success: function () {
                        $(".req-success").css('opacity', '1');
                        $(".req-success").text("Спасибо, ваша заявка отправлена!");
                        $(".form-group > div > input").each(function () {
                            $(this).val(null);
                        });
                    }
                });
                $(".form-group > div > button").addClass('btn-disabled');
                $('.pretty > input').prop('checked', false);
                return false;
            }
        });
    let img = 0;
    if (window.screen.width > 767) {
        $(".slider > .swiper-wrapper > .swiper-slide > img").each(function () {
            switch ((img > 2 && (img = 0), img)) {
                case 0:
                    $(this).addClass("img-main");
                    break;
                case 2:
                    $(this).addClass("img-minor");
                    break;
            }
            ++img;
        });
    }
    $('.menu-btn').on('click', function() {
        $(this).toggleClass('active');
        $('#navbar-list').toggleClass('navbar-active');
        $('body').toggleClass('hidden');
    });
    $(window).scroll(function () {
        if ($(window).scrollTop() >= 50)
            $('nav').addClass('scrolled');
        else
            $('nav').removeClass('scrolled');
    });
    IMask(document.getElementById('phone-input'), {mask: '+{7} (000) 000-00-00'});
    $(".slider > .swiper-wrapper > .swiper-slide > img, .scheme-slider img").on('click', function () {
        $('.photo-modal').toggleClass('uk-flex');
        $('.photo-modal img').attr('src', $(this).attr('src'));
        $('body').toggleClass('stopScroll');
    });
    $('.close-modal').on('click', function () {
        $('.photo-modal').toggleClass('uk-flex');
        $('body').toggleClass('stopScroll');
    });
    let $page = $('html, body');
    $('a[href*="#"]').click(function() {
        let offset = 0;
        switch ($(this).attr('href')) {
            case '#s1':
                offset = 100;
                break;
            case '#s2':
                offset = 50;
                break;
            case '#s3':
                offset = 35;
                break;
            case '#s4':
                offset = 50;
                break;
            case '#s1-d2':
                offset = 150;
                break;
            case '#s2-d2':
                offset = 150;
                break;
        }
        $page.animate({
            scrollTop: $($.attr(this, 'href')).offset().top-parseFloat(offset)
        }, 1000);
        return false;
    });
    $('#navbar-list > a').on('click', function () {
        $('.menu-btn').toggleClass('active');
        $('#navbar-list').toggleClass('navbar-active');
        $('body').toggleClass('hidden');
    });
});
