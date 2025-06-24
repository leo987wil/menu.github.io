// main.js

// Elementos del menú lateral y overlay
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay');
const menuIcon = document.querySelector('.menu-icon');
const closeBtn = document.querySelector('.close-btn');

// Mostrar el sidebar
function openSidebar() {
  sidebar.classList.add('active');
  if (overlay) overlay.style.display = 'block';
}

// Ocultar el sidebar
function closeSidebar() {
  sidebar.classList.remove('active');
  if (overlay) overlay.style.display = 'none';
}

// Manejadores de eventos
if (menuIcon) {
  menuIcon.addEventListener('click', openSidebar);
}
if (closeBtn) {
  closeBtn.addEventListener('click', closeSidebar);
}
if (overlay) {
  overlay.addEventListener('click', closeSidebar);
}

// Opcional: Cerrar sidebar con la tecla Esc
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeSidebar();
});

// --- MODAL DE WISHLIST ---

// Abre el modal de la wishlist al hacer clic en el corazón
document.getElementById('heart-icon').addEventListener('click', function() {
  renderWishlistModal();
  document.getElementById('wishlist-modal').classList.add('active');
});

// Cerrar wishlist modal
document.getElementById('wishlist-modal-close-btn').onclick = function() {
  document.getElementById('wishlist-modal').classList.remove('active');
};
// Cerrar modal al hacer click fuera del contenido
document.getElementById('wishlist-modal').onclick = function(e) {
  if (e.target === this) this.classList.remove('active');
};

// Renderiza la lista de deseos en el modal
function renderWishlistModal() {
  // Toma la variable global window.wishlist, o del localStorage como respaldo
  let wishlist = window.wishlist || JSON.parse(localStorage.getItem('wishlist') || '[]');
  const listDiv = document.getElementById('wishlist-list');
  const emptyDiv = document.getElementById('wishlist-modal-empty');
  listDiv.innerHTML = '';
  if (wishlist.length === 0) {
    emptyDiv.style.display = '';
    return;
  } else {
    emptyDiv.style.display = 'none';
  }
  // menuData debe estar definido globalmente (asegúrate de que menu-section.js carga antes)
  if (typeof menuData === 'undefined') {
    listDiv.innerHTML = '<p style="color:#fff">No se encontró menuData</p>';
    return;
  }
  wishlist.forEach(title => {
    const product = menuData.find(p => p.title === title);
    if (!product) return;
    const itemDiv = document.createElement('div');
    itemDiv.className = 'wishlist-item';
    itemDiv.innerHTML = `
      <img class="wishlist-item-img" src="${product.img}" alt="${product.title}">
      <div class="wishlist-item-info">
        <div class="wishlist-item-title">${product.title}</div>
        <div class="wishlist-item-desc">${product.desc}</div>
      </div>
      <button class="wishlist-remove-btn" title="Quitar de deseos"><i class="fas fa-trash"></i></button>
    `;
    // Quitar de wishlist al hacer click en el botón
    itemDiv.querySelector('.wishlist-remove-btn').onclick = function() {
      // Elimina el producto de la global window.wishlist y actualiza localStorage
      const newWishlist = wishlist.filter(t => t !== product.title);
      if (typeof setWishlist === 'function') setWishlist(newWishlist);
      else {
        window.wishlist = newWishlist;
        localStorage.setItem('wishlist', JSON.stringify(newWishlist));
        if (typeof updateWishlistBadge === 'function') updateWishlistBadge();
      }
      renderWishlistModal();
      // Si estás en el modal de producto, refresca el botón de wishlist
      if (
        document.getElementById('modal-title') &&
        document.getElementById('modal-title').textContent === product.title
      ) {
        document.getElementById('modal-wishlist-btn').classList.remove('added');
        document.getElementById('wishlist-btn-text').textContent = 'Agregar a deseos';
      }
    };
    listDiv.appendChild(itemDiv);
  });
}

// Selector de idioma
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
      if (selected === 'en') {
        currentLang.textContent = 'EN';
      } else {
        currentLang.textContent = 'ES';
      }
      langDropdown.classList.remove('open');
    }
  });
}
document.addEventListener('click', () => {
  langDropdown.classList.remove('open');
});
