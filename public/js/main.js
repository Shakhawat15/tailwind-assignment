/*========================= 
******* JavaScript *******
=========================*/

/************************************* 
 * Dark Theme *
 ************************************/
function toggleMode() {
    const theme = localStorage.getItem('theme');

    if (typeof theme === 'string' && theme === 'dark') {
        localStorage.removeItem('theme');
        document.documentElement.classList.remove('dark')
    } else {
        localStorage.setItem('theme', 'dark');
        document.documentElement.classList.add('dark')
    }
}

/************************************* 
 * Show And Hide Password *
 ************************************/

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

/************************************* 
 * Sidebar Drop Down Menu *
 ************************************/
let arrow = document.querySelectorAll('.arrow');
for (let i = 0; i < arrow.length; i++) {
    arrow[i].addEventListener('click', (e) => {
        let arrowParent = e.target.parentElement.parentElement;
        arrowParent.classList.toggle('showMenu');
    });
}

let sidebar = document.querySelector('.sidebar');
let sidebarBtn = document.querySelector('.sidebar-menu');
console.log(sidebarBtn);
sidebarBtn.addEventListener('click', () => {
    sidebar.classList.toggle('close');
});

/************************************* 
 * Projection Chart *
 ************************************/
var options = {
    series: [{
        data: [21, 22, 10, 28, 16, 21, 13, 30, 20, 13, 28, 16]
    }],
    chart: {
        type: 'bar',
        height: 250
    },
    plotOptions: {
        bar: {
            horizontal: false,
            columnWidth: '20%',
            endingShape: 'rounded'
        },
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        show: true,
        width: 2,
        colors: ['transparent']
    },
    xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    },
    fill: {
        opacity: 1
    },
    tooltip: {
        y: {
            formatter: function (val) {
                return "$ " + val + " thousands"
            }
        }
    }
};

var chart = new ApexCharts(document.querySelector("#projection-chart"), options);
chart.render();


/************************************* 
 * Revenue Chart *
 ************************************/

var options = {
    series: [{
            name: "Current Week",
            data: [20, 50, 35, 55, 45, 60, 45]
        },
        {
            name: "Previous Week",
            data: [0, 44, 25, 65, 35, 70, 55]
        }
    ],
    chart: {
        height: 365,
        type: 'line',
        dropShadow: {
            enabled: true,
            color: '#000',
            top: 18,
            left: 7,
            blur: 10,
            opacity: 0.2
        }
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        curve: 'smooth'
    },
    grid: {
        row: {
            colors: ['transparent', 'transparent'], // takes an array which will be repeated on columns
            opacity: 0.5
        },
    },
    xaxis: {
        categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    }
};

var chart = new ApexCharts(document.querySelector("#revenue-chart"), options);
chart.render();


/*========================= 
******* jQuery *******
=========================*/


$(document).ready(function () {

    /************************************* 
     * World Map *
     ************************************/
    $('#map').vectorMap({
        map: 'world_mill',
        backgroundColor: 'transparent',
        zoomOnScroll: false,
        regionStyle: {
            initial: {
                fill: '#E8EEF2',
                "fill-opacity": 1,
                stroke: 'none',
                "stroke-width": 0,
                "stroke-opacity": 1
            }
        },
        markerStyle: {
            initial: {
                fill: '#8A93F6',
                stroke: '#BCC1F7'
            }
        },
        markers: [{
                latLng: [40.712776, -74.005974],
                name: 'New York'
            },
            {
                latLng: [37.774929, -122.419418],
                name: 'San Francisco'
            },
            {
                latLng: [-33.868820, 151.209290],
                name: 'Sydney'
            },
            {
                latLng: [1.352083, 103.819839],
                name: 'Singapore'
            },
        ]


    });
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
        $('.projection-navbar').fadeOut('slow');
        $('.search-navbar').slideUp('slow');
        $('.revenue-navbar').fadeOut('slow');
        $('.revenue2-navbar').fadeOut('slow');
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
        $('.projection-navbar').fadeOut('slow');
        $('.search-navbar').slideUp('slow');
        $('.revenue-navbar').fadeOut('slow');
        $('.revenue2-navbar').fadeOut('slow');
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
        $('.projection-navbar').fadeOut('slow');
        $('.search-navbar').slideUp('slow');
        $('.revenue-navbar').fadeOut('slow');
        $('.revenue2-navbar').fadeOut('slow');
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
        $('.projection-navbar').fadeOut('slow');
        $('.search-navbar').slideUp('slow');
        $('.revenue-navbar').fadeOut('slow');
        $('.revenue2-navbar').fadeOut('slow');
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
        $('.projection-navbar').fadeOut('slow');
        $('.search-navbar').slideUp('slow');
        $('.revenue-navbar').fadeOut('slow');
        $('.revenue2-navbar').fadeOut('slow');
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

    /************************************* 
     * Search Navbar *
     ************************************/
    $('.search-navbar').removeClass('hidden');
    $('.search-navbar').hide();
    $('.search').on('click', function () {
        $('.search-navbar').slideToggle('slow');
        $('.notification-navbar').slideUp('slow');
        $('.setting-navbar').hide('slide');
        $('.language-navbar').slideUp('slow');
        $('.social-navbar').slideUp('slow');
        $('.user-navbar').slideUp('slow');
        $('.projection-navbar').fadeOut('slow');
        $('.revenue-navbar').fadeOut('slow');
        $('.revenue2-navbar').fadeOut('slow');
    });

    $(window).click(function () {
        $('.search-navbar').slideUp('slow');
    });

    $('.search').on('click', function (event) {
        event.stopPropagation();
    });

    $('.search-navbar').on('click', function (event) {
        event.stopPropagation();
    });

    /************************************* 
     * Projection Navbar *
     ************************************/
    $('.projection-navbar').removeClass('hidden');
    $('.projection-navbar').hide();
    $('.projection-menu').on('click', function () {
        $('.projection-navbar').fadeToggle('slow');
        $('.notification-navbar').slideUp('slow');
        $('.setting-navbar').hide('slide');
        $('.language-navbar').slideUp('slow');
        $('.social-navbar').slideUp('slow');
        $('.user-navbar').slideUp('slow');
        $('.revenue-navbar').fadeOut('slow');
        $('.revenue2-navbar').fadeOut('slow');
    });

    $(window).click(function () {
        $('.projection-navbar').fadeOut('slow');
    });

    $('.projection').on('click', function (event) {
        event.stopPropagation();
    });

    $('.projection-navbar').on('click', function (event) {
        event.stopPropagation();
    });

    /************************************* 
     * Revenue Navbar *
     ************************************/
    $('.revenue-navbar').removeClass('hidden');
    $('.revenue-navbar').hide();
    $('.revenue').on('click', function () {
        $('.revenue-navbar').fadeToggle('slow');
        $('.notification-navbar').slideUp('slow');
        $('.setting-navbar').hide('slide');
        $('.language-navbar').slideUp('slow');
        $('.social-navbar').slideUp('slow');
        $('.user-navbar').slideUp('slow');
        $('.revenue2-navbar').fadeOut('slow');
    });

    $(window).click(function () {
        $('.revenue-navbar').fadeOut('slow');
    });

    $('.revenue').on('click', function (event) {
        event.stopPropagation();
    });

    $('.revenue-navbar').on('click', function (event) {
        event.stopPropagation();
    });

    /************************************* 
     * Revenue Location Navbar *
     ************************************/
    $('.revenue2-navbar').removeClass('hidden');
    $('.revenue2-navbar').hide();
    $('.revenue2').on('click', function () {
        $('.revenue2-navbar').fadeToggle('slow');
        $('.notification-navbar').slideUp('slow');
        $('.setting-navbar').hide('slide');
        $('.language-navbar').slideUp('slow');
        $('.social-navbar').slideUp('slow');
        $('.user-navbar').slideUp('slow');
    });

    $(window).click(function () {
        $('.revenue2-navbar').fadeOut('slow');
    });

    $('.revenue2').on('click', function (event) {
        event.stopPropagation();
    });

    $('.revenue2-navbar').on('click', function (event) {
        event.stopPropagation();
    });

    /************************************* 
     * Dropify *
     ************************************/

    // Basic
    $('.dropify').dropify();

    // Translated
    $('.dropify-fr').dropify({
        messages: {
            default: 'Glissez-d??posez un fichier ici ou cliquez',
            replace: 'Glissez-d??posez un fichier ou cliquez pour remplacer',
            remove: 'Supprimer',
            error: 'D??sol??, le fichier trop volumineux'
        }
    });

    // Used events
    var drEvent = $('#input-file-events').dropify();

    drEvent.on('dropify.beforeClear', function (event, element) {
        return confirm("Do you really want to delete \"" + element.file.name + "\" ?");
    });

    drEvent.on('dropify.afterClear', function (event, element) {
        alert('File deleted');
    });

    drEvent.on('dropify.errors', function (event, element) {
        console.log('Has Errors');
    });

    var drDestroy = $('#input-file-to-destroy').dropify();
    drDestroy = drDestroy.data('dropify')
    $('#toggleDropify').on('click', function (e) {
        e.preventDefault();
        if (drDestroy.isDropified()) {
            drDestroy.destroy();
        } else {
            drDestroy.init();
        }
    })

    /************************************* 
     * Data Table *
     ************************************/

    $('#table_id').DataTable();

});