document.addEventListener('DOMContentLoaded', () => {
  const menuOverlay = document.querySelector('.docs-mobile-menu-overlay');
  menuOverlay.addEventListener('click', () => menuOverlay.classList.remove('active'));
  document.querySelector('.docs-mobile-menu-button').addEventListener('click', () => menuOverlay.classList.add('active'));
  document.querySelector('.docs-mobile-menu-content').addEventListener('click', e => e.stopPropagation());
  document.querySelector('.docs-mobile-menu-close').addEventListener('click', () => menuOverlay.classList.remove('active'));
});