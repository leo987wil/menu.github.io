// =======================
// DATOS DE PRODUCTOS DE MENÚ (puedes agregar más)
// =======================
const menuData = [
  { group: 'main', category: 'Pastas', title: 'PENNE AL VODKA', desc: 'Delicioso plato típico preparado con ingredientes de calidad.', price: '$14.60', img: 'https://images.unsplash.com/photo-1516684669134-de6f27e8b44b?auto=format&fit=facearea&w=256&q=81' },
  { group: 'main', category: 'Pastas', title: 'ESPAGUETIS CON CAMARONES', desc: 'Plato con camarones preparados al gusto de la casa.', price: '$18.75', img: 'https://images.unsplash.com/photo-1516684669134-de6f27e8b44b?auto=format&fit=facearea&w=256&q=81' },
  { group: 'main', category: 'Pastas', title: 'FETTUCCINE ALFREDO', desc: 'Pasta cremosa con salsa Alfredo tradicional.', price: '$16.20', img: 'https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=facearea&w=256&q=82' },
  { group: 'main', category: 'Pastas', title: 'RAVIOLI DE QUESO', desc: 'Raviolis rellenos de queso, en salsa de tomate.', price: '$15.00', img: 'https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=facearea&w=256&q=83' },
];

// =======================
// CATEGORÍAS POR GRUPO
// =======================
const groupSubcategories = {
  main: [
    { key: 'Pastas', label: 'Pastas' },
    // Puedes agregar más categorías aquí si tienes más variedad
  ]
};

let currentGroup = 'main';
let currentCategory = groupSubcategories['main'][0].key;

// =======================
// RENDER DE CATEGORÍAS
// =======================
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

// =======================
// RENDER DEL MENÚ DE PLATOS
// =======================
function renderMenu(group = 'main', category) {
  const menuList = document.getElementById("menu-list");
  if (!menuList) return;
  const filtered = menuData.filter(item => item.group === group && (!category || item.category === category));
  let col1 = [], col2 = [];
  filtered.forEach((item, idx) => (idx % 2 === 0 ? col1 : col2).push(item));
  const isMobile = window.innerWidth <= 650;
  let html = "";
  if (isMobile) {
    filtered.forEach(item => { html += menuItemHTML(item); });
  } else {
    html += `
      <div class="menu-list-col">${col1.map(menuItemHTML).join("")}</div>
      <div class="menu-list-col">${col2.map(menuItemHTML).join("")}</div>
    `;
  }
  menuList.innerHTML = html;
}

// =======================
// FORMATEO DE PRECIOS
// =======================
function priceFormat(num) {
  let [entero, decimal] = num.split('.');
  return `${entero}<span class="decimal">.${decimal || '00'}</span>`;
}

// =======================
// HTML DE UN PRODUCTO INDIVIDUAL
// =======================
function menuItemHTML(item) {
  let cash = parseFloat(item.price.replace('$', ''));
  let isValid = !isNaN(cash);
  let card = isValid ? (cash * 1.04).toFixed(2) : null;
  return `
    <div class="menu-item">
      <img class="menu-item-img" src="${item.img}" alt="${item.title}">
      <div class="menu-item-info">
        <div class="menu-item-title">${item.title}</div>
        <div class="menu-item-desc">${item.desc}</div>
      </div>
      <div class="menu-item-price-row">
        ${isValid ?
          `<div class="price-block">
            <span class="icon-cash"><i class="fas fa-money-bill-wave"></i></span>
            <span class="price-cash">$${priceFormat(cash.toFixed(2))}</span>
          </div>
          <div class="price-block">
            <span class="icon-card"><i class="fas fa-credit-card"></i></span>
            <span class="price-card">$${priceFormat(card)}</span>
          </div>` :
          `<span class="price-consult">Consultar</span>`
        }
      </div>
    </div>
  `;
}

// =======================
// EVENTOS PARA FILTRADO DE CATEGORÍAS
// =======================
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

// =======================
// RESPONSIVE: RENDERIZA AL REDIMENSIONAR
// =======================
window.addEventListener("resize", () => {
  renderMenu(currentGroup, currentCategory);
});

// =======================
// INICIALIZACIÓN
// =======================
document.addEventListener("DOMContentLoaded", () => {
  renderCategories(currentGroup);
  renderMenu(currentGroup, currentCategory);
  setupMenuFilters();

  // MODAL: Cerrar al click en la X
  document.querySelector('#product-modal .modal-close').onclick = function() {
    document.getElementById('product-modal').classList.remove('active');
  };
  // MODAL: Cerrar al hacer click fuera del contenido
  document.getElementById('product-modal').onclick = function(e) {
    if (e.target === this) this.classList.remove('active');
  };
  // MODAL: Botón corazón (opcional, puedes expandir funcionalidad)
  document.querySelector('#product-modal .modal-heart-btn').onclick = function() {
    this.classList.toggle('added');
  };
});

// =======================
// MODAL DE PRODUCTO: ABRIR AL HACER CLICK EN ITEM
// =======================
document.addEventListener('click', function(e) {
  const target = e.target.closest('.menu-item');
  if (!target) return;
  // Obtener datos del producto
  const title = target.querySelector('.menu-item-title').textContent;
  const product = menuData.find(p => p.title === title);
  if (!product) return;
  // Llenar modal
  const modal = document.getElementById('product-modal');
  modal.querySelector('.modal-img').src = product.img;
  modal.querySelector('.modal-img').alt = product.title;
  modal.querySelector('.modal-title').textContent = product.title;
  modal.querySelector('.modal-desc').textContent = product.desc;
  // Precios
  let cash = parseFloat(product.price.replace('$', ''));
  let isValid = !isNaN(cash);
  let card = isValid ? (cash * 1.04).toFixed(2) : null;
  let priceHTML = isValid
    ? `<div class="price-block">
         <span class="icon-cash"><i class="fas fa-money-bill-wave"></i></span>
         <span class="price-cash">$${priceFormat(cash.toFixed(2))}</span>
       </div>
       <div class="price-block">
         <span class="icon-card"><i class="fas fa-credit-card"></i></span>
         <span class="price-card">$${priceFormat(card)}</span>
       </div>`
    : `<span class="price-consult">Consultar</span>`;
  modal.querySelector('.modal-price-row').innerHTML = priceHTML;
  // Abre modal
  modal.classList.add('active');
});
