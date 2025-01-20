$(function() {

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });
	
});

$(document).ready(function () {
        if ($(window).width() < 1200) {
            $('.more-info .container').removeClass();
            $('.more-info >').addClass('container-fluid');
            // for header
            $('header .container').removeClass();
            $('header >').addClass('container-fluid');
            // end for header
        } else {
            $('.more-info .container').removeClass('container-fluid');
            $('.more-info >').addClass('container');
            // for header
            $('header .container').removeClass('container-fluid');
            $('header >').addClass('container');
            // end for header
        }
    $(window).resize(function() {
        if ($(window).width() < 1200) {
            $('.more-info .container').removeClass();
            $('.more-info >').addClass('container-fluid');
            // for header
            $('header .container').removeClass();
            $('header >').addClass('container-fluid');
            // end for header
        } else {
            $('.more-info .container').removeClass('container-fluid');
            $('.more-info >').addClass('container');
            // for header
            $('header .container').removeClass('container-fluid');
            $('header >').addClass('container');
            // end for header
        }
    });
});





$(document).ready(function() {
	// line progress
    $('body').show();
    $('.version').text(NProgress.version);
    NProgress.start();
    NProgress.set(0.3);
    setTimeout(function() {
        NProgress.done();
        $('.fade').removeClass('out');
        $('.line').addClass('change-color');}, 1000);

    $('.line.as-hidden').delay(3000).fadeOut(500);
    $('.message').hide();
    $('.message').delay(2500).slideToggle().is(':visible');


    setTimeout(function () {
        $('.stopper').addClass('start');
        if ($('.stopper').hasClass('change-height')) {
            $('.mobile-menu').addClass('height');
        }
    }, 2500);
    setTimeout(function () {
        $('.message').addClass('change-background');
    }, 5000);
    setTimeout(function () {
        $('.message').addClass('trans');
    }, 2600);



    $(document).ready(function() {
        if ($(window).width() > 1200) {
            $(".nav_menu").show();
        } else {
            $(".nav_menu").hide();
        }
        if ($(window).width() > 1200) {
            $(".nav-toggle").hide();
        } else {
            $(".nav-toggle").css('display', 'flex').show();
        }
        $(".treatments, .info, .ddbut-3-content").hide();
    });

    $(window).resize(function() {
        if ($(window).width() > 1200) {
            $(".nav_menu").show();
        } else {
            $(".nav_menu").hide();
        }
        if ($(window).width() > 1200) {
            $(".nav-toggle").hide(),
                $(".nav-toggle").removeClass("border");
        } else {
            $(".nav-toggle").show();
        }
    });

    $(document).click(function() {
        if ($('.treatments, .info, .ddbut-3-content').is(':visible')) {
            $(".treatments, .info, .ddbut-3-content").fadeOut("fast")
        }
        if ($(window).width() < 950) {
            $(".nav_menu").fadeOut("fast");
            $(".nav-toggle").removeClass("border");
        }
    });

    // for mobile menu
    $(".ddbut1").click(function(event) {
        $('.ddbut2, .ddbut3').removeClass('opens');
        $(this).toggleClass('opens');
        $(".treatments").slideToggle("fast");
        $(".info, .ddbut-3-content").slideUp("fast");
        event.stopPropagation();
    });
    $(".ddbut2").click(function(event) {
        $('.ddbut1,.ddbut3').removeClass('opens');
        $(this).toggleClass('opens');
        $(".info").slideToggle("fast");
        $(".treatments, .ddbut-3-content").slideUp("fast");
        event.stopPropagation();
    });
    $(".ddbut3").click(function(event) {
        $('.ddbut1, .ddbut2').removeClass('opens');
        $(this).toggleClass('opens');
        $(".ddbut-3-content").slideToggle("fast");
        $(".treatments, .info").slideUp("fast");
        event.stopPropagation();
    });
    $(".nav-toggle").click(function(event) {
        $(this).toggleClass("border");
        $(this).toggleClass("open");
        $(".nav_menu").slideToggle("fast");
        event.stopPropagation();
    });


    $(window).scroll(function(){
        $('header').toggleClass('header-has-background', $(this).scrollTop() > 0);
    });


    // for login - singin page
    $('.sing-up-now a.button.sing-up-btn').click(function (event) {
        event.stopPropagation();
        $('#title').html('Treat | Sign Up');
       $('form.sing-up').css('display','block');
       $('form.login').css('display', 'none');
       $('.sing-up-now a.button.sing-up-btn').css('display', 'none');
       $('.sing-up-now a.log-in').css('display','flex');
       $('.sing-up-now a.forgot-pass').css('display','flex');
       $('.sing-up-now h3.for-log-in').css('display','none');
       $('.sing-up-now h3.for-sing-in').css('display','block');
    });
    $('.sing-up-now a.button.log-in').click(function (event) {
        event.stopPropagation();
        $('#title').html('Treat | Login');
        $('form.sing-up').css('display', 'none');
        $('form.login').css('display', 'block');
        $('.sing-up-now a.button.sing-up-btn').css('display', 'flex');
        $('.sing-up-now a.log-in').css('display','none');
        $('.sing-up-now a.forgot-pass').css('display','none');
        $('.sing-up-now h3.for-log-in').css('display','block');
        $('.sing-up-now h3.for-sing-in').css('display','none');
    });


    // Menu for window < 1200
    // Loop through each nav item
    $('.nav-menu').children('ul.nav').children('li').each(function(indexCount){

        // loop through each dropdown, count children and apply a animation delay based on their index value
        $(this).children('ul.dropdown').children('li').each(function(index){

            // Turn the index value into a reasonable animation delay
            var delay = 0.1 + index*0.03;

            // Apply the animation delay
            $(this).css("animation-delay", delay + "s")
        });
    });
});





