// Back to Top Button Functionality
// This script handles the visibility and click behavior of the back-to-top button

// Get the back-to-top button element
const backToTopButton = document.getElementById('back-to-top');

// Add scroll event listener to show/hide button with animation
window.addEventListener('scroll', () => {
    // Check if scrolled more than 300px
    if (window.scrollY > 300) {
        // Animate in the button
        backToTopButton.style.opacity = '1';
        backToTopButton.style.transform = 'scale(1)';
    } else {
        // Animate out the button
        backToTopButton.style.opacity = '0';
        backToTopButton.style.transform = 'scale(0)';
    }
});

// Add click event listener to scroll to top smoothly
backToTopButton.addEventListener('click', () => {
    // Scroll to top with smooth behavior
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Mobile dropdown toggle
if (window.innerWidth <= 768) {
    const dropdownLinks = document.querySelectorAll('nav ul li a.nav-link');

    dropdownLinks.forEach(link => {
        const dropdown = link.nextElementSibling;
        if (dropdown && (dropdown.classList.contains('about_drop_down') || dropdown.classList.contains('life_kis_drop_down'))) {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                // Close other dropdowns
                document.querySelectorAll('.about_drop_down, .life_kis_drop_down').forEach(d => {
                    if (d !== dropdown) d.style.display = 'none';
                });
                // Toggle this dropdown
                dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
            });
        }
    });
}

// Login/Signup toggle functions
function showSignup() {
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('signup-form').style.display = 'block';
}

function showLogin() {
    document.getElementById('signup-form').style.display = 'none';
    document.getElementById('login-form').style.display = 'block';
}

// Carousel functionality
let currentSlide = 0;
let slidesToShow = window.innerWidth <= 768 ? 1 : 3;
const totalSlides = 9;

function moveSlide(direction) {
    const slider = document.querySelector('.news-slider');
    const maxSlide = totalSlides - slidesToShow;
    currentSlide += direction;
    if (currentSlide < 0) currentSlide = 0;
    if (currentSlide > maxSlide) currentSlide = maxSlide;
    const slideWidth = window.innerWidth <= 768 ? 280 + 20 : 300 + 20;
    slider.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
}

// Update slidesToShow on resize
window.addEventListener('resize', () => {
    slidesToShow = window.innerWidth <= 768 ? 1 : 3;
    currentSlide = 0;
    moveSlide(0);
});