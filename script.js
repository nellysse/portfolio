const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

// ## Theme Toggle Functionality
const themeToggle = document.querySelector('#theme-toggle');
const body = document.body;

// Check for saved theme preference on page load
const currentTheme = localStorage.getItem('theme');
if (currentTheme === 'light') {
    body.classList.add('light-mode');
    // Change icon to sun if starting in light mode
    themeToggle.classList.replace('bx-moon', 'bx-sun'); 
}

themeToggle.onclick = () => {
    body.classList.toggle('light-mode');
    
    // Update icon and save preference to local storage
    if (body.classList.contains('light-mode')) {
        themeToggle.classList.replace('bx-moon', 'bx-sun');
        localStorage.setItem('theme', 'light');
    } else {
        themeToggle.classList.replace('bx-sun', 'bx-moon');
        localStorage.setItem('theme', 'dark');
    }
};

// ## Scroll to Top Button Functionality
const scrollTopBtn = document.querySelector('#scroll-top');

window.onscroll = () => {
    // Show/hide scroll to top button
    // The button appears when the user scrolls down more than 100 pixels
    if (window.scrollY > 100) {
        scrollTopBtn.classList.add('active');
    } else {
        scrollTopBtn.classList.remove('active');
    }
    
    // Close mobile menu on scroll (existing logic)
    navbar.classList.remove('active');
    menuIcon.classList.remove('bx-x');
};

scrollTopBtn.onclick = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Smooth scrolling animation
    });
};