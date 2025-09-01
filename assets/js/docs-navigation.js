document.addEventListener('DOMContentLoaded', function() {
  const menuOverlay = document.querySelector('.docs-mobile-menu-overlay');
  document.querySelector('.docs-mobile-menu-button').addEventListener('click', function() {
    menuOverlay.classList.add('active');
  });

  document.querySelector('.docs-mobile-menu-overlay').addEventListener('click', function() {
    menuOverlay.classList.remove('active');
  });

  document.querySelector('.docs-mobile-menu-close').addEventListener('click', function(e) {
    if (e.target === menuOverlay) menuOverlay.classList.remove('active');
  });
});
