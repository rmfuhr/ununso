$(window).on("load", function() {
    "use strict";
    //=================================
    //  Preloader
    //=================================
    $("#preloader").fadeOut("slow");

    /*=================================
        Portfolio filter
    ===================================*/
    var $portfolio = $(".pf-isotope");
    $portfolio.isotope({
        filter: "*",
        animationOptions: {
            duration: 750,
            easing: "linear",
            queue: false
        }
    });

    $(".portfolio-filter a").on("click", function(){
        $(".portfolio-filter a").removeClass("active");
        $(this).addClass("active");
       // portfolio fiter
        var selector = $(this).attr("data-filter");
        $portfolio.isotope({
            filter: selector,
            animationOptions: {
                duration: 750,
                easing: "linear",
                queue: false
            }
        });
        return false;
    });
    /*=================================
        Portfolio Masonry
    ===================================*/
    var $masonry = $(".pf-masonry");
    $masonry.isotope({
        filter: '*',
        itemSelector: '[class^="col-"]',
        masonry: {
            columnWidth: 0
        },
        animationOptions: {
            duration: 750,
            easing: "linear",
            queue: false
        }
    });
    $(".portfolio-filter a").on("click", function(){
        $(".portfolio-filter a").removeClass("active");
        $(this).addClass("active");
       // portfolio fiter
        var selector = $(this).attr("data-filter");
        $masonry.isotope({
            filter: selector,
            animationOptions: {
                duration: 750,
                easing: "linear",
                queue: false
            }
        });
        return false;
    });
    parallaxInit();
    headerFix ();
});

function headerFix () {
    "use strict";
    /*var navbar_height = $(".site-header").height();
    if (!$(".sticky-header").parent().is(".sticky-head-wrapper")) {
        $(".sticky-header").wrap('<div class="sticky-head-wrapper"></div>').parent().css("height", navbar_height);
    }*/
}
(function($){
    "use strict";
    //initiating wow js
    var wow = new WOW({
        mobile: false
    });
    wow.init();

    // window width and height
    var display = {
        dwidth: $(window).width(),
        dheight: $(window).height()
    }

  


    // Image popups
    $(".ajax-popup").magnificPopup({
        type: "ajax",
        removalDelay: 500, //delay removal by X to allow out-animation
        gallery: {
            enabled: true // set to false to disable gallery
        },
        ajax: {
            cursor: ""
        },
        mainClass: "white-bg",
        midClick: true
    });
    // iframe popups
    $(".iframe-popup").magnificPopup({
        type: "iframe",
        removalDelay: 500,
        ajax: {
            cursor: ""
        },
        midClick: true
    });
    // iframe popups
    $(".inline-popup").magnificPopup({
        type: "inline",
        removalDelay: 500,
        ajax: {
            cursor: ""
        },
        midClick: true
    });
    /*=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
        index2 header
    -=-=-=-=-=-=-=-=-=--=-=-=-=-=-*/
/*    $(window).scroll(function() {
        if ($(window).scrollTop() >= 300) {
            $(".header-top").slideUp();
            $(".header2 .site-logo").slideUp();
        }else {
        }
    });*/
    /*=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
        Header Search
    -=-=-=-=-=-=-=-=-=--=-=-=-=-=-*/
    $(".header-search .toggle").on("click", function() {
        $("body").toggleClass("h-search-active");
        $(this).closest(".if-has-search").toggleClass("active");
    });
    /*=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
        Sticky Header
    -=-=-=-=-=-=-=-=-=--=-=-=-=-=-*/
    $(window).scroll(function () {
        if ($(window).scrollTop() >= 1) {
            $(".sticky-header").addClass("on");
            $(".header-top").slideUp();
            $(".header2 .site-logo").slideUp();
        }else {
            $(".sticky-header").removeClass("on");
            $(".header-top").slideDown();
            $(".header2 .site-logo").slideDown();
        }
    });
    // landing page scrolling
    $(".lp-menu").singlePageNav({
        offset: $(".navbar-default").height(),
        currentClass: "active",
        filter: ":not(.external)",
        speed: 1500,
        easing: "easeInOutExpo"
    });
    // navbar toggle
    $(".navbar-toggle").on("click", function() {
        $(this).toggleClass("active");
    });

    $(".navbar-nav li a").on("click", function(event){
        event.preventDefault;
        if($(window).width() <= 767){
            if ($(this).next().is("ul")) {
                $(this).next("ul").slideToggle();
            }else {
                $(".navbar-toggle").trigger("click");
            }
        };
    });

    $(".sub-menu li a, .sub-nav-list li a").each(function() {
        if($(this).next().is("ul")){
            $(this).append('<i class="fa fa-angle-right"></i>');
        }
    });

    $(".navbar-toggle").on("click", function(e){
        e.preventDefault;
        if($(window).width() <= 767){
            $(this).parent().parent(".header-inner").toggleClass("menu-open");
        };
    });

    $(".nav-toggle").on("click", function(e){
        $(this).toggleClass("active");
        $(".fs-nav").toggleClass("active");
        $(".menu-inner").toggleClass("active");
    });

    $('.nav-toggle2').click(function(){
        $(this).toggleClass('open');
        $(this).toggleClass('kulus');
        $(".fs-nav").toggleClass("active");
        $(".menu-inner").toggleClass("active");
        $(".vertical-nav3").toggleClass("active");
    });

    $(window).scroll(function() {
        if ($(window).scrollTop() >= 1) {
            $(".vertical-nav.tp").addClass("active");
        }else {
            $(".vertical-nav.tp").removeClass("active");
        }
    });

    //=================================
    //  Top Nav
    //=================================

    $(".top-nav li a").each(function() {
        if ($(this).next().is("ul")) {
            $(this).append('<i class="fa fa-angle-down"></i>')
        }
    });


    //=================================
    //  vertical nav 3
    //=================================

    $('.toggle-details').on('click', function(event) {
        event.preventDefault();
        $('.sec-details').toggleClass('active');
    });

    //=================================
    //  Menu Dropdown
    //=================================
/*
    $(".navbar-nav > li > a").each(function(){
        if($(this).next().is("ul.sub-menu")){
            if ($(window).width() < 768) {
                $(this).on("click", function() {
                    $(this).next("ul").slideToggle();
                });
            }
            return false
        }
    });*/
    /*=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
        Banner carousel
    -=-=-=-=-=-=-=-=-=--=-=-=-=-=-*/
    $(".index-slider").owlCarousel({
        items: 1,
        loop: true,
        nav: true,
        autoplay: false,
        mouseDrag: false,
        smartSpeed: 900,
        animateOut: 'fadeOut',
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
    });

    $(".index-slider3").owlCarousel({
        items: 1,
        loop: true,
        nav: true,
        autoplay: false,
        mouseDrag: false,
        smartSpeed: 900,
        animateOut: 'fadeOut',
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
    });

    $(".home-slider").owlCarousel({
        items: 1,
        loop: true,
        nav: true,
        autoplay: false,
        mouseDrag: false,
        dots: false,
        smartSpeed: 900,
        animateOut: 'fadeOut',
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
    });
    
    $(".home-slider2").owlCarousel({
        items: 1,
        loop: true,
        nav: true,
        autoplay: false,
        mouseDrag: false,
        dots: false,
        smartSpeed: 900,
        animateOut: 'fadeOut',
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
    });
    
    $(".home-slider3").owlCarousel({
        items: 1,
        loop: true,
        nav: true,
        autoplay: false,
        mouseDrag: false,
        dots: false,
        smartSpeed: 900,
        animateOut: 'fadeOut',
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
    });
    
    $(".home-slider4").owlCarousel({
        items: 1,
        loop: true,
        nav: true,
        autoplay: false,
        mouseDrag: false,
        dots: false,
        smartSpeed: 900,
        animateOut: 'fadeOut',
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
    });
    
    $(".home-slider5").owlCarousel({
        items: 1,
        loop: true,
        nav: true,
        autoplay: false,
        mouseDrag: false,
        dots: false,
        smartSpeed: 900,
        animateOut: 'fadeOut',
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
    });
    
    //home-creative-2
    $(".home-slider6").owlCarousel({
        items: 1,
        loop: true,
        nav: true,
        autoplay: false,
        mouseDrag: false,
        dots: false,
        smartSpeed: 900,
        animateOut: 'fadeOut',
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
    });
    
    //home-slider7
    $(".home-slider7").owlCarousel({
        items: 1,
        loop: true,
        nav: true,
        autoplay: false,
        mouseDrag: false,
        dots: false,
        smartSpeed: 900,
        animateOut: 'fadeOut',
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
    });
    
    // home-business
    $(".feature-carousel").owlCarousel({
        items: 1,
        loop: true,
        nav: true,
        autoplay: false,
        mouseDrag: false,
        dots: false,
        smartSpeed: 900,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
    });
    
    // home-business2
    $(".about-slider").owlCarousel({
        items: 1,
        loop: true,
        nav: true,
        autoHeight:true,
        autoplay: false,
        mouseDrag: false,
        dots: false,
        smartSpeed: 900,
        animateOut: 'fadeOut',
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
    });
    
    // team-carousel
    $(".team-carousel").owlCarousel({
        items: 1,
        loop: true,
        nav: true,
        autoplay: false,
        mouseDrag: false,
        dots: false,
        smartSpeed: 900,
        animateOut: 'fadeOut',
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
    });
    
    // team-carousel2
    $(".team-carousel2").owlCarousel({
        loop: true,
        nav: false,
        center: true,
        autoplay: false,
        mouseDrag: false,
        margin: 50,
        dots: false,
        smartSpeed: 900,
        responsive : {
            // breakpoint from 0 up
            0 : {
                items: 1
            },
            // breakpoint from 768 up
            768 : {
                items: 3
            }
        }
    });

    $(".control .owl-prev").on("click",function(){
        $(".team-carousel2").trigger('prev.owl.carousel');
        console.log("click prev")
    });

    $(".control .owl-next").on("click",function(){
        $(".team-carousel2").trigger('next.owl.carousel');
        console.log("click next")
    });

    // logo carousel
    $(".logo-carousel").owlCarousel({
        loop: true,
        autoplay: true,
        smartSpeed: 800,
        margin: 30,
        dots: false,
        responsive : {
            // breakpoint from 0 up
            0 : {
                items: 2
            },
            // breakpoint from 768 up
            768 : {
                items: 3
            },
            // breakpoint from 1024 up
            1024 : {
                items: 4
            },
        }
    });

    // logo carousel
    $(".testimonial-carousel").owlCarousel({
        loop: true,
        autoplay: false,
        mouseDrag: false,
        nav: false,
        dots: true,
        smartSpeed: 700,
        dotsEach: true,
        responsive : {
            // breakpoint from 0 up
            0 : {
                items: 1
            },
            // breakpoint from 768 up
            768 : {
                items: 3
            }
        }
    });

    // testimonial2 carousel
    $(".testimonial2").owlCarousel({
        loop: true,
        items: 1,
        autoplay: false,
        mouseDrag: false,
        nav: false,
        smartSpeed: 700,
        dots: true
    });

    // testimonial3 carousel
    $(".testimonial3").owlCarousel({
        loop: true,
        items: 1,
        autoplay: false,
        mouseDrag: false,
        dots: false,
        nav: true,
        smartSpeed: 700,
        animateOut: 'fadeOut',
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
    });

    // testimonial4 carousel
    $(".testimonial4").owlCarousel({
        loop: true,
        items: 1,
        autoplay: false,
        mouseDrag: false,
        dots: false,
        nav: false,
        animateOut: 'slideOutDown',
        animateIn: 'flipInX'
    });

    $(".control .next").on("click",function(){
        $(".testimonial4").trigger('next.owl.carousel');
        console.log("click next")
    });

    $(".control .prev").on("click",function(){
        $(".testimonial4").trigger('prev.owl.carousel');
        console.log("click prev")
    });

    // testimonial5 carousel
    $(".testimonial5").owlCarousel({
        loop: true,
        items: 1,
        autoplay: false,
        mouseDrag: false,
        dots: false,
        nav: false,
        animateOut: 'bounceOut',
    });

    $(".owl-nav .owl-next").on("click",function(){
        $(".testimonial5").trigger('next.owl.carousel');
        console.log("click next")
    });

    $(".owl-nav .owl-prev").on("click",function(){
        $(".testimonial5").trigger('prev.owl.carousel');
        console.log("click prev")
    });

    // testimonial6 carousel
    $(".testimonial6").owlCarousel({
        loop: true,
        items: 1,
        autoplay: false,
        mouseDrag: false,
        smartSpeed: 600
    });

    /*=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
        Dropdown Widgets
    -=-=-=-=-=-=-=-=-=--=-=-=-=-=-*/

    $(".widget.style2 li > a").on("click", function() {
        if ($(this).next().is("ul")) {
            $(this).next("ul").slideToggle();
            return false;
        }else {

        }
    })

    /*=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
        post-carousel
    -=-=-=-=-=-=-=-=-=--=-=-=-=-=-*/
    $(".post-carousel").owlCarousel({
        items: 1,
        loop: true,
        nav: true,
        mouseDrag: false,
        dots: false,
        smartSpeed: 900,
        animateOut: 'fadeOut',
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
    });
    /*=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
        flicker gallery
    -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-*/
    $(".flickr-stream").jflickrfeed({
        limit: 9,
        qstrings: {
            id: "8352571@N04"
        },
        itemTemplate:
        '<li>' +
            '<a href="{{image_b}}" data-effect="mfp-zoom-in" title="{{title}}" class="flickr-popup">' +
                '<img src="{{image_m}}" alt="">' +
            '</a>' +
        '</li>'
    }, function () {
        $(".flickr-popup").magnificPopup({
            type: "image",
            removalDelay: 500, //delay removal by X to allow out-animation
            image: {
                cursor: null
            },
            gallery: {
                enabled: true // set to false to disable gallery
            },
            callbacks: {
                beforeOpen: function() {
                    // just a hack that adds mfp-anim class to markup 
                    this.st.image.markup = this.st.image.markup.replace("mfp-figure", "mfp-figure mfp-with-anim");
                    this.st.mainClass = this.st.el.attr("data-effect");
                }
            },
            closeOnContentClick: true,
            midClick: true
        });
    });
    /*=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
        dribbble widget
    -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-*/
    // NOTE: Don't use this token, replace it with your own client access token.
    $.jribbble.setToken("f688ac519289f19ce5cebc1383c15ad5c02bd58205cd83c86cbb0ce09170c1b4");
    $.jribbble.users("op45").likes({per_page: 9}).then(function(likes) {
        var html = [];

        likes.forEach(function(like) {
            html.push('<li class="shots-single">');
            html.push('<a href="' + like.shot.html_url + '" target="_blank">');
            html.push('<img alt="" src="' + like.shot.images.normal + '">');
            html.push('</a></li>');
        });

        $(".dribble-shots").html(html.join(''));
    });
    /*=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
        Client Carousel
    -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-*/
    $(".carousel-4item").owlCarousel({
        items: 4,
        loop: true,
        autoplay: true,
        smartSpeed: 800,
        margin: 30
    });
    /*=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
        Contact Form Validation
    -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-*/
    $(".contact-form").validate({
        rules: {
            name: {
                required: true
            },
            fname: {
                required: true
            },
            lname: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            website: {
                required: false
            },
            message: {
                required: true
            }
        },
        messages: {
            name: {
                required: "Write your name here"
            },
            fname: {
                required: "Write your first name here"
            },
            lname: {
                required: "Write your last name here"
            },
            email: {
                required: "No email, no support"
            },
            message: {
                required: "You have to write something to send this form"
            }
        },
        submitHandler: function(form) {
            $(form).ajaxSubmit({
                type: "POST",
                data: $(form).serialize(),
                url : "mail.php",
                success: function() {
                    $(".contact-form").fadeTo( "slow", 1, function() {
                        $(".contact-form .msg-success").slideDown();
                    });
                    $(".contact-form").resetForm();
                },
                error: function() {
                    $(".contact-form").fadeTo( "slow", 1, function() {
                        $(".contact-form .msg-failed").slideDown();
                    });
                }
            });
        },
        errorPlacement: function(error, element) {
            element.after(error);
            error.hide().slideDown();
        }
    });
    /*=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
        Responsive iFrame Embed
    -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-*/
    $(".post-media:not(.soundcloud)").each(function() {
        if ($(this).children().is("iframe")) {
            $(this).children("iframe").addClass("embed-responsive-item");
            $(this).children("iframe").wrap('<div class="embed-responsive embed-responsive-16by9"></div>');
        }
    });
    /*=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
        Back to top
    -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-*/
    $(window).scroll(function () {
        if ($(window).scrollTop() > 900) {
            $(".go-top").fadeIn(900)
        } else {
            $(".go-top").fadeOut(800)
        }
    });
    $(".go-top").on("click", function () {
        $("html, body").stop().animate({
            scrollTop: 0
        }, 1500, "easeInOutExpo")
    });
    /*=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
        Accordion
    -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-*/
    //at least open one group allways
    $(".panel-heading a").on("click",function(e){
        e.preventDefault();

        if($(this).closest('.panel-group').hasClass('toggle')){
            $(this).parent().parent().toggleClass('active');
        }else{
            if($(this).parents(".panel").children(".panel-collapse").hasClass("in")){
                e.stopPropagation();
            }
            $(this).closest(".panel-group").find(".panel-heading").removeClass("active");
            $(this).parent().parent().addClass("active");
        }
        
    });

    //animated progress bar
    $(".progress .progress-bar").appear(function () {
        $(".progress .progress-bar").progressbar();
    });
    /*=================================================================
        Shop
    =================================================================*/
    
    $(".shop-sidebar").on("click", function(event) {
        event.preventDefault();
        $(".hc-sidebar-wrapper").toggleClass("active");
        $(".hc-sidebar-wrapper .wrapper-one").show();
        $(".hc-sidebar-wrapper .wrapper-two").hide();
    });
    
    $(".header-cart .cart-button").on("click", function(event) {
        event.preventDefault();
        $(".hc-sidebar-wrapper").toggleClass("active");
        $(".hc-sidebar-wrapper .wrapper-one").hide();
        $(".hc-sidebar-wrapper .wrapper-two").show();
    });

    $(document).on("click", ".search-toggle", function(event) {
        event.preventDefault();
        $("body").addClass("search-active");
        $(".search-wrapper").fadeIn();
    });


    $(".close-search").on("click", function(event) {
        event.preventDefault();
        $(".search-wrapper").fadeOut();
        $("body").removeClass("search-active");
    });

    $(".close-sidebar").on("click", function(event) {
        event.preventDefault();
        $(this).parent(".hc-sidebar-wrapper").removeClass("active");
    });

    $(".add-cart").on("click", function(event) {
        event.preventDefault();
        $(".confirmation-wrapper").fadeIn("slow");
        $("body").addClass("overflow-hidden");
    });

    $(".confirmation .mfp-close, .confirmation .cnshopping").on("click", function(event) {
        event.preventDefault();
        $("body").removeClass("overflow-hidden");
        $(".confirmation-wrapper").fadeOut();
    });

    // product carousel / shop
    $(".product-carousel").owlCarousel({
        loop: true,
        autoplay: false,
        smartSpeed: 800,
        margin: 30,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        responsive : {
            // breakpoint from 0 up
            0 : {
                items: 1
            },
            // breakpoint from 768 up
            768 : {
                items: 2
            },
            // breakpoint from 1024 up
            1024 : {
                items: 3
            },
            // breakpoint from 768 up
            1366 : {
                items: 4
            }
        }
    });

    // product carousel / shop
    $(".shop-slider1").owlCarousel({
        items: 1,
        loop: true,
        autoplay: false,
        mouseDrag: false,
        smartSpeed: 800,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
    });

    // product carousel / shop
    $(".shop-slider2").owlCarousel({
        items: 1,
        loop: true,
        autoplay: false,
        mouseDrag: false,
        smartSpeed: 800,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
    });

    // product carousel / shop2
    $(".shop-slider3").owlCarousel({
        items: 1,
        loop: true,
        autoplay: false,
        mouseDrag: false,
        smartSpeed: 800,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
    });

    // widget product carousel / shop
    $(".wp-carousel").owlCarousel({
        items: 1,
        loop: true,
        autoplay: false,
        mouseDrag: false,
        smartSpeed: 800,
        nav: false,
        dots: true
    });

    // widget product carousel / shop
    $(".pp-carousel").owlCarousel({
        items: 1,
        loop: true,
        autoplay: false,
        mouseDrag: false,
        smartSpeed: 800,
        nav: false,
        dots: true
    });

    // on sale product carousel / shop
    $(".osp-carousel").owlCarousel({
        items: 1,
        loop: true,
        autoplay: false,
        mouseDrag: false,
        smartSpeed: 800,
        nav: false,
        dots: true
    });

    $(".category-list li a").each(function() {
        if ($(this).next().is("ul")) {
            $(this).addClass("sub-cat")
        }
    });

    $(".product-description .sizes a").on("click", function() {
        $(".sizes a").removeClass("active");
        $(this).addClass("active")
    });

    $(".product-description .color a").on("click", function() {
        $(".color a").removeClass("active");
        $(this).addClass("active")
    });

    $(".product-description .color a").each(function() {
        var product_color = $(this).attr("data-color");
        $(this).children("span").css("background-color", product_color);
    });

    $(".category-list li a").on("click", function() {
        if ($(this).next().is("ul")) {
            $(this).next("ul").slideToggle();
        }
        return false;
    }); 

    $('#ship-check input[name="ship1"]').on("click", function(event) {
        if($(this).val() == 'ship2'){
            $(".shipping-info").slideDown();
        }else{
            $(".shipping-info").slideUp();
        }
    });

    $(".methodbox-label label").on("click", function(event) {
        $(this).closest(".methodselector").find(".methodbox-input input").removeAttr("checked");
        $(this).closest(".methodselector").find(".methodbox-label").removeClass("active");
        $(this).parent(".methodbox-label").addClass("active");
        $(this).closest(".method-box").find(".methodbox-input input").attr("checked");
    });

    $("#step1").on("click", function() {
        $("#loginwrapper").slideDown();
        $("#cart").slideUp();
        return false;
    });

    $(".step2").on("click", function() {
        $("#loginwrapper").slideUp();
        $("#billing-info").slideDown();
        return false;
    });

    $("#step3").on("click", function() {
        $("#billing-info").slideUp();
        $("#shipping-method").slideDown();
        return false;
    });

    $("#step4").on("click", function() {
        $("#payment-method").slideDown();
        $("#shipping-method").slideUp();
        return false;
    });

    $("#step5").on("click", function() {
        $("#order-receipt").slideDown();
        $("#payment-method").slideUp();
        return false;
    });

    $("#step6").on("click", function() {
        $("#confirmation").slideDown();
        $("#order-receipt").slideUp();
        return false;
    });    

    $(".hide-scrollbar").niceScroll({
        cursorwidth: 0,
        cursorborder: 0
    });

    /*=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
        Preview Pannel
    -=-=-=-=-=-=-=-=-=--=-=-=-=-=-*/
    function previewPannel() {
        $(".switcher-trigger").on("click", function() {
            $(".preview-wrapper").toggleClass("extend");
            return false;
        });
        if ($(window).width() < 768 ) {            
            //$(".preview-wrapper").removeClass("extend");            
        }
        $(".color-options li").on("click", function(){
            if ($("body").hasClass("back-step")) {
                $("#color-changer").attr({
                    "href":"../css/colors/"+$(this).attr("data-color")+".css"
                });
            }else {
                $("#color-changer").attr({
                    "href":"css/colors/"+$(this).attr("data-color")+".css"
                });
            }
            return false;
        });
        $(".pattern-options li").on("click", function(){
            if ($("body").hasClass("back-step")) {
                $("body").css('background', 'url("../img/patterns/'+$(this).attr("data-pattern-name")+'.png")');
            }else {
                $("body").css('background', 'url("img/patterns/'+$(this).attr("data-pattern-name")+'.png")');
            }
            return false;
        });
        $("body").wrapInner('<main id="main" class="site-main"></main>');

        var layout_class = "\
            boxed\
            wide";

        $("#tmpl_layout").on("change", function(event) {
            var layoutStyle = $(this).val();
            $("body").removeClass(layout_class).addClass(layoutStyle);
            $(".pf-isotope").isotope("layout");
            $(".pf-masonry").isotope("layout");
        });

        var hover_class = "\
            nav-hover-one\
            nav-hover-2\
            nav-hover-3\
            nav-hover-4\
            nav-hover-5\
            nav-hover-6\
            nav-hover-7\
            nav-hover-8\
            nav-hover-9\
            nav-hover-10\
            nav-hover-11\
            nav-hover-12\
            nav-hover-13\
            nav-hover-14";

        $("#menu_hover").on("change", function(event) {
            var hoverStyle = $(this).val();
            $(".navbar-nav").removeClass(hover_class).addClass(hoverStyle);
        });

        var submenu_style_class = "\
            style2\
            style3";

        $("#submenu_style").on("change", function(event) {
            var submenu_style = $(this).val();
            $(".navbar-nav .sub-menu").removeClass(submenu_style_class).addClass(submenu_style);
        });

        // Change header selected item
        $("#header_switch").on('change',function(ev){
            var url = "http://192.168.1.18/sparrow-multi/"
            var header = $(this).val();
            var headerTypes = [
                                "header1",
                                "header2",
                                "header3",
                                "header4",
                                "header5",
                                "header6",
                                "header7",
                                "header8",
                                "header9",
                                "header10"
                            ];
            //alert(headerTypes.indexOf(header));
            if(headerTypes.indexOf(header)>=0) {
                $("#header_canvas").load(header+".php",function() {
                    
                });
            }else{
                $("#header_canvas").load(header+".php",function() {

                });
            }
            ev.preventDefault();
        });

        // Change footer selected item
        $("#footer_switch").on('change',function(){
            var url = window.location.href+'?footer='
            var footer = $(this).val();
            var footerTypes = [
                                'footer-w-1',
                                'footer-w-2',
                                'footer-w-3'
                            ];
            //alert(footerTypes.indexOf(footer));
            if(footerTypes.indexOf(footer)>=0) {
                $("#footer_canvas").load(footer+".php",function() {



                    $(".flickr-stream").jflickrfeed({
                        limit: 9,
                        qstrings: {
                            id: "8352571@N04"
                        },
                        itemTemplate:
                        '<li>' +
                            '<a href="{{image_b}}" data-effect="mfp-zoom-in" title="{{title}}" class="flickr-popup">' +
                                '<img src="{{image_m}}" alt="">' +
                            '</a>' +
                        '</li>'
                    }, function () {
                        $(".flickr-popup").magnificPopup({
                            type: "image",
                            removalDelay: 500, //delay removal by X to allow out-animation
                            image: {
                                cursor: null
                            },
                            gallery: {
                                enabled: true // set to false to disable gallery
                            },
                            callbacks: {
                                beforeOpen: function() {
                                    // just a hack that adds mfp-anim class to markup 
                                    this.st.image.markup = this.st.image.markup.replace("mfp-figure", "mfp-figure mfp-with-anim");
                                    this.st.mainClass = this.st.el.attr("data-effect");
                                }
                            },
                            closeOnContentClick: true,
                            midClick: true
                        });
                    });

                });
            }else{
                $("#footer_canvas").load(footer+".php",function() {

                });
            }
        });
    }
    previewPannel();
})(jQuery);

// Double Menu for shop/shop3.html
function top_menu_height() {
    var top_nav_height = $(".header-inner").height();
    var bottom_menu_logo_width = $(".bottom-menu .navbar-header").width();
    $(window).scroll(function() {
        if ($(window).width() >= 768) {
            if ($(window).scrollTop() >= top_nav_height) {
                $(".bottom-nav-wrapper").addClass("active navbar-fixed-top");
                $(".bottom-nav").css("margin-left", bottom_menu_logo_width+30);
            }else {
                $(".bottom-nav-wrapper").removeClass("active navbar-fixed-top");
                $(".bottom-nav").css("margin-left", 0);
            }
        }else {
            if ($(window).scrollTop() >= top_nav_height) {
                $(".bottom-nav-wrapper").addClass("active navbar-fixed-top");
            }else {
                $(".bottom-nav-wrapper").removeClass("active navbar-fixed-top");
            }
        }
    });
}


/*=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
    Intro
-=-=-=-=-=-=-=-=-=--=-=-=-=-=-*/
function introContentHeight() {
    $(".intro-wrapper .intro-text").each(function() {
        var introHeight = $(this).outerHeight();
        $(this).prev(".intro-thumb").css("height", introHeight);
        $(this).next(".intro-thumb").css("height", introHeight);
    });
}
/*=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
    Parallax
-=-=-=-=-=-=-=-=-=--=-=-=-=-=-*/
function parallaxInit() {
    "use strict";
    $(".parallax1").parallax("50%", 0.3);
    $(".parallax2").parallax("50%", 0.3);
    $(".parallax3").parallax("50%", 0.3);
    $(".parallax4").parallax("50%", 0.3);
    $(".parallax5").parallax("50%", 0.3);
    $(".parallax6").parallax("50%", 0.3);
}
