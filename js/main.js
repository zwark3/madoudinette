const openNavMobile = document.querySelector('header .hamburger-menu');
const closeNavMobile = document.querySelector('header .close-menu');
const navMenu = document.querySelector('header .navigation-mobile');
const langForm = document.querySelector('.lang-form');
const currentPage = window.location.pathname.slice(1, window.location.pathname.indexOf('.'));

// Responsive Design 
openNavMobile.addEventListener('click', () => {
    navMenu.style.width = '220px';
});

closeNavMobile.addEventListener('click', () => {
    navMenu.style.width = '0';
});

const footerDropdownTitles = document.querySelector('.wrap-footer');
footerDropdownTitles.querySelectorAll('.footer-section h3').forEach(footerDropDown => {
    footerDropDown.addEventListener('click', function() {
        this.parentNode.nextElementSibling.querySelector('ul').classList.toggle('f-visible-mobile');
        this.parentNode.querySelector('svg').classList.toggle('f-transit-mobile');
    });
});

if (currentPage == 'contactez-nous') {
    // Transitions Contactez-nous
    // Survol des logos à côté du form
    const brandIcons = document.querySelectorAll('.inquiries-link a');
    brandIcons.forEach(link => {
        link.addEventListener('mouseover', function() {
            icon = link.querySelector('svg');
            if (icon.classList.contains('instagram')) {
                icon.classList.add('instagram-logo-col');
                link.classList.add('instagram-hover');
            }
            else if (icon.classList.contains('tiktok')) {
                icon.classList.add('tiktok-logo-col');
                link.classList.add('tiktok-hover');
            }
            else {
                icon.classList.add('linkedin-logo-col');
                link.classList.add('linkedin-hover');
            }
        })

        link.addEventListener('mouseout', function() {
            link.classList.remove('instagram-hover', 'tiktok-hover', 'linkedin-hover');
            icon.classList.remove('instagram-logo-col', 'tiktok-logo-col', 'linkedin-logo-col');
        })
    })

}

