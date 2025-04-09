$(document).ready(function () {
    
    // Auto-update copyright year
    document.getElementById('creative-year').textContent = new Date().getFullYear();


    // Toggle mobile menu
    $('.menu-toggle').click(function() {
        $('.mobile-menu').addClass('active');
        $(this).addClass('active');
    });

    $('.close-menu').click(function() {
        $('.mobile-menu').removeClass('active');
        $('.menu-toggle').removeClass('active');
    });

    $(window).scroll(function() {
        if ($(this).scrollTop() > 50) {
            $('.floating-navbar').addClass('scrolled');
        } else {
            $('.floating-navbar').removeClass('scrolled');
        }
    });

    // $(document).on('click', function (e) {
    //   if (!$(e.target).closest('.mobile-menu, .mobile-menu-icon').length) {
    //     mobileMenu.removeClass('show');
    //   }
    // });



    /*---------------*/







    // Initialize Slick Slider
    $('#slickSlider').slick({
        dots: true,
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        autoplay: true, // Autoplay enabled
        autoplaySpeed: 4000, // 4 seconds per slide
        pauseOnHover: false,
        fade: true, // Smooth fade transition
        prevArrow: '<button type="button" class="slick-prev"><i class="fa-solid fa-arrow-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="fa-solid fa-arrow-right"></i></button>',
        arrows: false
    });


    // Testimonial Slider
    $('.testimonial-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        autoplay: true,
        autoplaySpeed: 5000,
        dots: true,
        prevArrow: '<button class="slick-prev"><i class="fas fa-chevron-left"></i></button>',
        nextArrow: '<button class="slick-next"><i class="fas fa-chevron-right"></i></button>',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: true,
                    dots: true,
                    autoplay: true
                }
            }
        ],
        customPaging: function(slider, i) {
            return '<button class="slick-dot">' + (i + 1) + '</button>';
        },
        cssEase: 'cubic-bezier(0.645, 0.045, 0.355, 1)', // Smooth transition
        speed: 1000, // Animation speed
        easing: 'easeInOutQuint', // Custom easing function
        draggable: true,
        swipe: true,
        touchThreshold: 10
    });
    
    // Add smooth scroll animation to dots
    $('.slick-dots').on('click', 'li', function() {
        $('.testimonial-slider').slick('slickGoTo', $(this).index(), true);
    });
    
    // Add smooth scroll animation to arrows
    $('.slick-prev, .slick-next').on('click', function() {
        $('.testimonial-slider').slick('slickNext');
    });

    /*--------*/

    // Initialize AOS
    AOS.init({
        once: true, // Animation triggers only once
        offset: 100 // Trigger animation 100px before element is in view
    });

    //testimonial 

    

    
   







});