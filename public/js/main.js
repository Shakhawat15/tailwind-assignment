// JavaScript

// Show And Hide Password

var state = false;

function toggle() {
    var x = document.getElementById('password');
    var y = document.getElementById('hide1');
    var z = document.getElementById('hide2');

    if (state) {
        x.setAttribute('type', 'password');
        y.style.display = 'none';
        z.style.display = 'block';
        state = false;
    } else {
        x.setAttribute('type', 'text');
        y.style.display = 'block';
        z.style.display = 'none';
        state = true;
    }
}

// jQuery

$(document).ready(function () {
    /************************************* 
     * Add smooth scrolling to all links *
     ************************************/
    $("a").on('click', function (event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });

    /************************************* 
     * Setting Navbar *
     ************************************/
    $('.setting-navbar').removeClass('hidden');
    $('.setting-navbar').hide();
    $('.navbar-toggle').on('click', function () {
        $('.setting-navbar').toggle('slide');
        $('.language-navbar').slideUp('slow');
        $('.notification-navbar').slideUp('slow');
        $('.social-navbar').slideUp('slow');
        $('.user-navbar').slideUp('slow');
    });

    $(window).click(function () {
        $('.setting-navbar').hide('slide');
    });

    $('.navbar-toggle').on('click', function (event) {
        event.stopPropagation();
    });

    $('.setting-navbar').on('click', function (event) {
        event.stopPropagation();
    });

    /************************************* 
     * Notification Navbar *
     ************************************/
    $('.notification-navbar').removeClass('hidden');
    $('.notification-navbar').hide();
    $('.notification').on('click', function () {
        $('.notification-navbar').slideToggle('slow');
        $('.language-navbar').slideUp('slow');
        $('.setting-navbar').hide('slide');
        $('.social-navbar').slideUp('slow');
        $('.user-navbar').slideUp('slow');
    });

    $(window).click(function () {
        $('.notification-navbar').slideUp('slow');
    });

    $('.notification').on('click', function (event) {
        event.stopPropagation();
    });

    $('.notification-navbar').on('click', function (event) {
        event.stopPropagation();
    });

    /************************************* 
     * Language Navbar *
     ************************************/
    $('.language-navbar').removeClass('hidden');
    $('.language-navbar').hide();
    $('.language').on('click', function () {
        $('.language-navbar').slideToggle('slow');
        $('.notification-navbar').slideUp('slow');
        $('.social-navbar').slideUp('slow');
        $('.setting-navbar').hide('slide');
        $('.user-navbar').slideUp('slow');
    });

    $(window).click(function () {
        $('.language-navbar').slideUp('slow');
    });

    $('.language').on('click', function (event) {
        event.stopPropagation();
    });

    $('.language-navbar').on('click', function (event) {
        event.stopPropagation();
    });

    /************************************* 
     * Social Icon Navbar *
     ************************************/
    $('.social-navbar').removeClass('hidden');
    $('.social-navbar').hide();
    $('.social').on('click', function () {
        $('.social-navbar').slideToggle('slow');
        $('.notification-navbar').slideUp('slow');
        $('.setting-navbar').hide('slide');
        $('.language-navbar').slideUp('slow');
        $('.user-navbar').slideUp('slow');
    });

    $(window).click(function () {
        $('.social-navbar').slideUp('slow');
    });

    $('.social').on('click', function (event) {
        event.stopPropagation();
    });

    $('.social-navbar').on('click', function (event) {
        event.stopPropagation();
    });

    /************************************* 
     * User Navbar *
     ************************************/
    $('.user-navbar').removeClass('hidden');
    $('.user-navbar').hide();
    $('.user').on('click', function () {
        $('.user-navbar').slideToggle('slow');
        $('.notification-navbar').slideUp('slow');
        $('.setting-navbar').hide('slide');
        $('.language-navbar').slideUp('slow');
        $('.social-navbar').slideUp('slow');
    });

    $(window).click(function () {
        $('.user-navbar').slideUp('slow');
    });

    $('.user').on('click', function (event) {
        event.stopPropagation();
    });

    $('.user-navbar').on('click', function (event) {
        event.stopPropagation();
    });
});