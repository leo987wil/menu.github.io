// ===========================
// MAIN.JS: Sidebar y selector de idioma
// ===========================

// Sidebar: abrir/cerrar menú lateral
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay');
const menuIcon = document.querySelector('.menu-icon');
const closeBtn = document.querySelector('.close-btn');

function openSidebar() {
  if (sidebar) sidebar.classList.add('active');
  if (overlay) overlay.style.display = 'block';
}
function closeSidebar() {
  if (sidebar) sidebar.classList.remove('active');
  if (overlay) overlay.style.display = 'none';
}
// Abrir/cerrar sidebar con iconos o overlay
if (menuIcon) menuIcon.addEventListener('click', openSidebar);
if (closeBtn) closeBtn.addEventListener('click', closeSidebar);
if (overlay) overlay.addEventListener('click', closeSidebar);
// Cerrar sidebar con ESC
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeSidebar(); });

// Selector de idioma (opcional)
const langDropdown = document.querySelector('.language-dropdown');
const langBtn = document.querySelector('.lang-btn');
const langMenu = document.querySelector('.lang-menu');
const currentLang = document.getElementById('current-lang');

if (langBtn) {
  langBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    langDropdown.classList.toggle('open');
  });
}
if (langMenu) {
  langMenu.addEventListener('click', (e) => {
    if (e.target.tagName === 'LI') {
      const selected = e.target.getAttribute('data-lang');
      if (selected === 'en') currentLang.textContent = 'EN';
      else currentLang.textContent = 'ES';
      langDropdown.classList.remove('open');
    }
  });
}
document.addEventListener('click', () => {
  if (langDropdown) langDropdown.classList.remove('open');
});
