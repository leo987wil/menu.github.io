// Datos de ejemplo para los productos
const menuData = [
  // ... (tu array original de productos)
];

// Subcategorías por grupo (adapta según tus grupos actuales)
const groupSubcategories = {
  // ... (tu objeto original)
};

let currentGroup = 'main';
let currentCategory = groupSubcategories['main'][0].key;

// --- SNIPPET NUEVO: wishlist GLOBAL Y FUNCIONES DE SINCRONIZACIÓN ---
window.wishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');
function setWishlist(newWishlist) {
  window.wishlist = newWishlist;
  localStorage.setItem('wishlist', JSON.stringify(newWishlist));
  updateWishlistBadge();
}

// Renderiza las subcategorías en la barra horizontal
function renderCategories(group) {
  const catList = document.getElementById("menu-categories-list");
  catList.innerHTML = '';
  const subcats = groupSubcategories[group] || [];
  subcats.forEach((subcat, idx) => {
    const li = document.createElement('li');
    li.setAttribute('data-category', subcat.key);
    li.innerHTML = subcat.label;
    if (idx === 0) li.classList.add('active');
    catList.appendChild(li);
  });
}

// Renderiza la lista de productos filtrados
function renderMenu(group = 'main', category) {
  const menuList = document.getElementById("menu-list");
  if (!menuList) return;
  const filtered = menuData.filter(item => item.group === group && (!category || item.category === category));
  let col1 = [], col2 = [];
  filtered.forEach((item, idx) => (idx % 2 === 0 ? col1 : col2).push(item));
  const isMobile = window.innerWidth <= 650;
  let html = "";
  if (isMobile) {
    filtered.forEach(item => {
      html += menuItemHTML(item);
    });
  } else {
    html += `
      <div class="menu-list-col">
        ${col1.map(menuItemHTML).join("")}
      </div>
      <div class="menu-list-col">
        ${col2.map(menuItemHTML).join("")}
      </div>
    `;
  }
  menuList.innerHTML = html;
}

// MODIFICADO: Muestra precios cash y tarjeta
function menuItemHTML(item) {
  let cash = parseFloat(item.price.replace('$', ''));
  let isValid = !isNaN(cash);
  let card = isValid ? (cash * 1.04).toFixed(2) : null;

  function priceFormat(num) {
    let [entero, decimal] = num.split('.');
    return `${entero}<span class="decimal">.${decimal || '00'}</span>`;
  }

  return `
    <div class="menu-item">
      <img class="menu-item-img" src="${item.img}" alt="${item.title}">
      <div class="menu-item-info">
        <div class="menu-item-title">${item.title}</div>
        <div class="menu-item-desc">${item.desc}</div>
      </div>
      <div class="menu-item-price-row">
        ${
          isValid
            ? `<div class="price-block">
                  <span class="icon-cash"><i class="fas fa-money-bill-wave"></i></span>
                  <span class="price-cash">$${priceFormat(cash.toFixed(2))}</span>
               </div>
               <div class="price-block">
                  <span class="icon-card"><i class="fas fa-credit-card"></i></span>
                  <span class="price-card">$${priceFormat(card)}</span>
               </div>`
            : `<span class="price-consult">Consultar</span>`
        }
      </div>
    </div>
  `;
}

// Maneja la selección de categorías horizontales
function setupMenuFilters() {
  const catList = document.getElementById("menu-categories-list");
  catList.addEventListener("click", e => {
    const li = e.target.closest("li[data-category]");
    if (!li) return;
    catList.querySelectorAll("li").forEach(el => el.classList.remove("active"));
    li.classList.add("active");
    currentCategory = li.getAttribute("data-category");
    renderMenu(currentGroup, currentCategory);
  });
}

// ========== MODAL Y DESEOS ==========

// Función para actualizar el badge del corazón
function updateWishlistBadge() {
  const badge = document.getElementById('wishlist-badge');
  if (window.wishlist.length > 0) {
    badge.style.display = 'flex';
    badge.textContent = window.wishlist.length;
  } else {
    badge.style.display = 'none';
  }
}

// Abre el modal de producto
function openProductModal(product) {
  document.getElementById('modal-img').src = product.img;
  document.getElementById('modal-img').alt = product.title;
  document.getElementById('modal-title').textContent = product.title;
  document.getElementById('modal-desc').textContent = product.desc;

  // Precios
  let cash = parseFloat(product.price.replace('$', ''));
  let isValid = !isNaN(cash);
  let card = isValid ? (cash * 1.04).toFixed(2) : null;
  function priceFormat(num) {
    let [entero, decimal] = num.split('.');
    return `${entero}<span class="decimal">.${decimal || '00'}</span>`;
  }
  document.getElementById('modal-price-row').innerHTML = isValid
    ? `<div class="price-block">
         <span class="icon-cash"><i class="fas fa-money-bill-wave"></i></span>
         <span class="price-cash">$${priceFormat(cash.toFixed(2))}</span>
       </div>
       <div class="price-block">
         <span class="icon-card"><i class="fas fa-credit-card"></i></span>
         <span class="price-card">$${priceFormat(card)}</span>
       </div>`
    : `<span class="price-consult">Consultar</span>`;

  // Botón de deseos
  const btn = document.getElementById('modal-wishlist-btn');
  const btnText = document.getElementById('wishlist-btn-text');
  if (window.wishlist.includes(product.title)) {
    btn.classList.add('added');
    btnText.textContent = 'Agregado a deseos';
  } else {
    btn.classList.remove('added');
    btnText.textContent = 'Agregar a deseos';
  }
  btn.onclick = function () {
    let newWishlist;
    if (window.wishlist.includes(product.title)) {
      newWishlist = window.wishlist.filter(item => item !== product.title);
      btn.classList.remove('added');
      btnText.textContent = 'Agregar a deseos';
    } else {
      newWishlist = [...window.wishlist, product.title];
      btn.classList.add('added');
      btnText.textContent = 'Agregado a deseos';
    }
    setWishlist(newWishlist);
  };

  // Mostrar el modal
  document.getElementById('product-modal').classList.add('active');
}

// Cerrar modal
document.getElementById('modal-close-btn').onclick = function() {
  document.getElementById('product-modal').classList.remove('active');
};
// Cerrar modal al hacer click fuera del contenido
document.getElementById('product-modal').onclick = function(e) {
  if (e.target === this) this.classList.remove('active');
};

// ========== ABRIR MODAL AL CLIC EN PRODUCTO ==========

document.addEventListener('click', function(e) {
  const item = e.target.closest('.menu-item');
  if (!item) return;
  const title = item.querySelector('.menu-item-title').textContent;
  const product = menuData.find(p => p.title === title);
  if (!product) return;
  openProductModal(product);
});

// ========== INICIALIZACIÓN ==========

document.addEventListener("DOMContentLoaded", () => {
  updateWishlistBadge();
});

// Maneja la selección de familias en el sidebar
function setupSidebarFilters() {
  const sidebarCats = document.getElementById("sidebar-categories");
  sidebarCats.addEventListener("click", e => {
    const li = e.target.closest("li[data-group]");
    if (!li) return;
    sidebarCats.querySelectorAll("li").forEach(el => el.classList.remove("active"));
    li.classList.add("active");
    currentGroup = li.getAttribute("data-group");
    // Selecciona la primera subcategoría de ese grupo
    const subcats = groupSubcategories[currentGroup];
    currentCategory = subcats && subcats.length ? subcats[0].key : null;
    renderCategories(currentGroup);
    renderMenu(currentGroup, currentCategory);
    setupMenuFilters(); // Vuelve a enlazar eventos
    closeSidebar();
  });
}

// Responsive: vuelve a renderizar cuando cambia el tamaño (para columnas)
window.addEventListener("resize", () => {
  renderMenu(currentGroup, currentCategory);
});

// Inicialización
document.addEventListener("DOMContentLoaded", () => {
  // Marca activo el grupo inicial (main)
  const sidebarCats = document.getElementById("sidebar-categories");
  sidebarCats.querySelectorAll("li").forEach(el => el.classList.remove("active"));
  sidebarCats.querySelector('li[data-group="main"]').classList.add("active");
  // Renderiza subcategorías y menú
  renderCategories(currentGroup);
  renderMenu(currentGroup, currentCategory);
  setupMenuFilters();
  setupSidebarFilters();
});
