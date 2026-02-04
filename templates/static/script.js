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