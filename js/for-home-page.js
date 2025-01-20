/**
 * Created by Tema on 26.03.2019.
 */

$(document).ready(function() {

    var elementForAnimation = document.querySelectorAll('section.consultation .wrapper-for-tile .tile .content-right ul.list li');
    console.log(elementForAnimation.length);
    for (var i = 0; i < elementForAnimation.length; i++ ) {
        $(elementForAnimation[i]).addClass('wow fadeInRight');
    }
    $('section.consultation .wrapper-for-tile .tile .content-right ul.list li').each(function (index) {
        $(this).attr('data-wow-duration', .4*(.5+index) + 's');
    });

    var elementForAnimation = document.querySelectorAll('section.tiles-see-more .wrapper-item .tile-item');
    console.log(elementForAnimation.length);
    for (var i = 0; i < elementForAnimation.length; i++ ) {
        $(elementForAnimation[i]).addClass('wow fadeInUp');
    }
    $('section.tiles-see-more .wrapper-item .tile-item').each(function (index) {
        $(this).attr('data-wow-duration', 1.5*(.5+index) + 's');
        $(this).attr('data-wow-offset', '10');
    })
});