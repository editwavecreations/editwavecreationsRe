
//
// Scripts
// 
// script.js
document.addEventListener('DOMContentLoaded', () => {
    const leftDiv = document.querySelector('.left');
    const rightDiv = document.querySelector('.right');

    leftDiv.addEventListener('wheel', (event) => {
        event.preventDefault();
        leftDiv.scrollBy({
            left: event.deltaY,

        });
    });

    rightDiv.addEventListener('wheel', (event) => {
        event.preventDefault();
        rightDiv.scrollBy({
            left: event.deltaY,

        });
    });
});

// script.js
document.addEventListener('DOMContentLoaded', () => {
    const shortVidDivContainer = document.querySelector('.col-xl-8.col-lg-7');

    function handleScroll(event) {
        event.preventDefault(); // Prevent default scroll behavior
        event.currentTarget.scrollLeft += event.deltaY; // Horizontal scroll based on vertical scroll input
    }

    shortVidDivContainer.addEventListener('wheel', handleScroll); // Listen for wheel event on shortVidDiv container
});


window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});
