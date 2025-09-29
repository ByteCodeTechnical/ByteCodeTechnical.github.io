/* Custom JavaScript for ByteCodeTechnical website */

// Function to display current year in footer
function displayCurrentYear() {
    const year = new Date().getFullYear();
    const displayDateElement = document.getElementById('displayDate');
    if (displayDateElement) {
        displayDateElement.textContent = year;
    }
}

// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    displayCurrentYear();

    const navLinks = document.querySelectorAll('a.nav-link[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70, // offset for fixed header
                    behavior: 'smooth'
                });
            }
        });
    });

    // Contact form submission handling
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // Simple validation
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();
            if (!name || !email || !message) {
                alert('Please fill in all fields.');
                return;
            }
            // Here you can add AJAX to send form data to server or email service
            alert('Thank you for your message, ' + name + '! We will get back to you soon.');
            contactForm.reset();
        });
    }
});
