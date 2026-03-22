// Shared nav toggle
function initNav() {
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobile-menu');
  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => mobileMenu.classList.toggle('open'));
  }
  // Mark active nav link
  const links = document.querySelectorAll('.nav-links a, .mobile-menu a');
  links.forEach(link => {
    if (link.href === window.location.href) link.classList.add('active');
  });
}
document.addEventListener('DOMContentLoaded', initNav);
