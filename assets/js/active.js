// main.js
const currentPath = window.location.pathname;
const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

navLinks.forEach(link => {
  if (link.getAttribute('href') === currentPath || 
      (currentPath === '/' && link.getAttribute('href') === '/index.html')) {
    link.classList.add('active');
  }
});
