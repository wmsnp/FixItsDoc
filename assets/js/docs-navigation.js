document.addEventListener('DOMContentLoaded', function() {
  const menuButton = document.querySelector('.docs-mobile-menu-button');
  const menuOverlay = document.querySelector('.docs-mobile-menu-overlay');
  const closeButton = document.querySelector('.docs-mobile-menu-close');

  menuButton.addEventListener('click', function() {
    menuOverlay.classList.add('active');
  });

  closeButton.addEventListener('click', function() {
    menuOverlay.classList.remove('active');
  });

  menuOverlay.addEventListener('click', function(e) {
    if (e.target === menuOverlay) {
      menuOverlay.classList.remove('active');
    }
  });
});
