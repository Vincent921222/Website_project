// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Button click handler
document.querySelector('.btn').addEventListener('click', function() {
    console.log('Get Started button clicked');
    alert('Welcome! Let\'s get started.');
});

// Log when page loads
window.addEventListener('load', function() {
    console.log('Website loaded successfully');
});

// Add scroll event listener for animations
window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;
    console.log('Scroll position:', scrollPosition);
});
