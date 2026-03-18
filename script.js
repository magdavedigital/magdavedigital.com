// Sticky navbar
window.addEventListener('scroll', function() {
  const navbar = document.getElementById('navbar');
  if(window.scrollY > 50) { navbar.classList.add('scrolled'); }
  else { navbar.classList.remove('scrolled'); }
});

// Hamburger menu toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});