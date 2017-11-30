
$(window).load(function() { // makes sure the whole site is loaded

    "use strict";



    //------------------------------------------------------------------------
    //						PRELOADER SCRIPT
    //------------------------------------------------------------------------   
    $('#preloader').delay(400).fadeOut('slow'); // will fade out the white DIV that covers the website.
    $('#preloader .inner').fadeOut(); // will first fade out the loading animation


    //------------------------------------------------------------------------
    //						WOW ANIMATION SETTINGS
    //------------------------------------------------------------------------ 	
    var wow = new WOW({
        offset: 100, // distance to the element when triggering the animation (default is 0)
        mobile: false // trigger animations on mobile devices (default is true)
    });
    wow.init();



    //------------------------------------------------------------------------
    //						STELLAR (PARALLAX) SETTINGS
    //------------------------------------------------------------------------ 	
    if (!(navigator.userAgent.match(/iPhone|iPad|iPod|Android|BlackBerry|IEMobile/i))) {
        $.stellar({
            horizontalScrolling: false,
            positionProperty: 'transform'
        });
    }



    //------------------------------------------------------------------------
    //						NAVBAR SLIDE SCRIPT
    //------------------------------------------------------------------------ 		
    $(window).scroll(function() {
        if ($(window).scrollTop() > $("nav").height()) {
            $("nav.navbar-slide").addClass("show-menu");
        } else {
            $("nav.navbar-slide").removeClass("show-menu");
            $(".navbar-slide .navMenuCollapse").collapse({
                toggle: false
            });
            $(".navbar-slide .navMenuCollapse").collapse("hide");
            $(".navbar-slide .navbar-toggle").addClass("collapsed");
        }
    });

    //------------------------------------------------------------------------
    //						NAVBAR HIDE ON CLICK (COLLAPSED) SCRIPT
    //------------------------------------------------------------------------ 		
    $('.nav a').on('click', function() {
        if ($('.navbar-toggle').css('display') != 'none') {
            $(".navbar-toggle").click()
        }
    });

})




$(document).ready(function() {

    "use strict";



   


    //------------------------------------------------------------------------
    //						ANCHOR SMOOTHSCROLL SETTINGS
    //------------------------------------------------------------------------
    $('a.goto, .navbar .nav a').smoothScroll({
        speed: 1200
    });




    //------------------------------------------------------------------------
    //						FULL HEIGHT SECTION SCRIPT
    //------------------------------------------------------------------------
    $("#minimal-intro").css("min-height", $(window).height());
    $(window).resize(function() {
        $("#minimal-intro").css("min-height", $(window).height());
    })




    //------------------------------------------------------------------------
    //						INTRO SUPERSLIDER SETTINGS
    //------------------------------------------------------------------------
    $("#slides").superslides({
        play: 8000, //Milliseconds before progressing to next slide automatically. Use a falsey value to disable.
        animation: "fade", //slide or fade. This matches animations defined by fx engine.
        pagination: false,
        inherit_height_from: ".intro-block",
        inherit_width_from: ".intro-block"
    });




    //------------------------------------------------------------------------
    //						SCREENSHOTS SLIDER SETTINGS
    //------------------------------------------------------------------------
    var owl = $("#screenshots-slider");
    owl.owlCarousel({
        items: 5,
        itemsDesktop: [1400, 4],
        itemsDesktopSmall: [1200, 3],
        itemsTablet: [900, 2],
        itemsMobile: [600, 1],
        stopOnHover: true
    });



    //------------------------------------------------------------------------
    //						TESTIMONIALS SLIDER SETTINGS
    //------------------------------------------------------------------------
    var owl = $("#testimonials-slider");
    owl.owlCarousel({
        singleItem: true,
        autoPlay: 5000,
        stopOnHover: true
    });



    //------------------------------------------------------------------------	
    //                    MAGNIFIC POPUP(LIGHTBOX) SETTINGS
    //------------------------------------------------------------------------  

    $('#screenshots-slider').magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery: {
            enabled: true
        }
    });



  



});