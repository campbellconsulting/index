/**    
 * Author: Almir Pamukovic | http://themeforest.net/user/codenpixel
 * Web site: pamukovic.com
 * Last Update: 24.03.2014
 * Demo url: pamukovic.com/demo/t-one 
 ***/


$(document).ready(function () {
    $('.popup').magnificPopup({
        type: 'image'
    });
});

//Portfolio

jQuery('.isotope-item').hover(function () {
        jQuery('.text-work', this).stop().animate({
            'top': '0%',
            opacity: 1
        }, 200);

    },
    function () {
        jQuery('.text-work', this).stop().animate({
            'top': '100%',
            opacity: 0
        }, 200, function () {
            jQuery(this).css('top', '-100%')
        });

    }
);

/**    PORTFOLIO
 *************************************************** **/

var $container = jQuery('#portfolio-container');
$container.isotope({
    filter: '*',
    animationOptions: {
        duration: 750,
        easing: 'linear',
        queue: false
    },
    layoutMode: 'fitRows'
});


jQuery('.portfolio-categories li a').click(function () {
    jQuery('.portfolio-categories li').removeClass('active');
    jQuery(this).parent().addClass('active');

    var selector = jQuery(this).attr('data-filter');
    $container.isotope({
        filter: selector,
        animationOptions: {
            duration: 750,
            easing: 'linear',
            queue: false
        },
        layoutMode: 'fitRows'
    });
    return false;
});



jQuery(window).load(function () {
    $container.isotope('reLayout');
});

/**    CAROUSELS AND SLIDERS
 *************************************************** **/

$(document).ready(function () {

    $("#quote").owlCarousel({
        navigation: true, //Show next and prev buttons
        slideSpeed: 300,
        paginationSpeed: 400,
        singleItem: true,
        navigation: false

    });

});


$(document).ready(function () {
    $('.flexslider').flexslider({
        animationSpeed: 1000,
        directionNav: true,
        controlNav: true,

    });
    $('.project-slide').flexslider({
        animation: "slide"
    });

});

$(document).ready(function () {
    $(".navbar-wrap").sticky({
        topSpacing: 0
    });
});

$(document).ready(function () {


  /**    ONE PAGE NAV
 *************************************************** **/

    jQuery('#top-nav, #top-nav-2, a.go-up').onePageNav({
        scrollSpeed: 1000,
        changeHash: true,
        filter: ':not(.external)'
    });


});


/**   CLOSE MOBILE NAV AFTER CLICK
 *************************************************** **/

(function($) {
  "use strict";

jQuery.fn.exists = function() {
                  return this.length > 0;
              }

    $(function() {
                var navMain = $(".navbar-collapse");
                navMain.on("click", "a", null, function() {
                    if ($(this).attr("href") !== "#") {
                        navMain.collapse('hide');
                    }
                });

                $("#wrapper").bind("click", function() {
                     if ($(".navbar-collapse.navbar-ex1-collapse.in").exists()) {
                        navMain.collapse('hide');
                    }
                });

            });

})(jQuery);



    /**    SEND EMAILS
 *************************************************** **/

    $('#contactform').submit(function () {

        var action = $(this).attr('action');

        $("#message").slideUp(750, function () {
            $('#message').hide();

            $('#submit')
                .after('<img src="images/loader.gif" class="loader" />')
                .attr('disabled', 'disabled');

            $.post(action, {
                    name: $('#name').val(),
                    email: $('#email').val(),
                    phone: $('#phone').val(),
                    subject: $('#subject').val(),
                    comments: $('#comments').val(),
                    verify: $('#verify').val()
                },
                function (data) {
                    document.getElementById('message').innerHTML = data;
                    $('#message').slideDown('slow');
                    $('#contactform img.loader').fadeOut('slow', function () {
                        $(this).remove()
                    });
                    $('#submit').removeAttr('disabled');
                    if (data.match('success') != null) $('#contactform').slideUp('slow');

                }
            );

        });

        return false;

    });




