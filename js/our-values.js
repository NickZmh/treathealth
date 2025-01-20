/**
 * Created by Tema on 07.03.2019.
 */

$(document).ready(function(){
    $('#carousel').slick({
        slidesToShow: 5,
        autoplay: true,
        autoplaySpeed: 0,
        speed: 9000,
        cssEase:'linear',
        infinite: true,
        disabled: true,
        focusOnSelect: false,
        responsive: [
            {
                breakpoint: 1600,
                settings: {
                    arrows: false,
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    arrows: false,
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    slidesToShow: 2
                }
            }, {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    slidesToShow: 1
                }
            }]
    });
});