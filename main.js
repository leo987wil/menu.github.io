// ===========================
// MAIN.JS: Sidebar y overlay (opcional)
// ===========================

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
if (menuIcon) menuIcon.addEventListener('click', openSidebar);
if (closeBtn) closeBtn.addEventListener('click', closeSidebar);
if (overlay) overlay.addEventListener('click', closeSidebar);
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeSidebar(); });
