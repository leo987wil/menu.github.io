// =======================
// DATOS DE PRODUCTOS
// =======================
const menuData = [
  { group: 'main', category: 'Pastas', title: 'PENNE AL VODKA', desc: 'Delicioso plato típico, preparado con ingredientes de calidad.', price: '$14.6', img: 'https://images.unsplash.com/photo-1516684669134-de6f27e8b44b?auto=format&fit=facearea&w=256&q=81' },
  { group: 'main', category: 'Pastas', title: 'ESPAGUETIS CON CAMARONES', desc: 'Plato con camarones preparados al gusto de la casa.', price: '$18.75', img: 'https://images.unsplash.com/photo-1516684669134-de6f27e8b44b?auto=format&fit=facearea&w=256&q=81' },
  { group: 'kids', category: '', title: 'SALCHIPAPAS', desc: 'Delicioso plato típico, preparado con ingredientes de calidad.', price: '$14.6', img: 'https://images.unsplash.com/photo-1516684669134-de6f27e8b44b?auto=format&fit=facearea&w=256&q=82' },
  { group: 'kids', category: '', title: 'CHICKEN NUGGETS', desc: 'Delicioso plato típico, preparado con ingredientes de calidad.', price: '$13', img: 'https://images.unsplash.com/photo-1516684669134-de6f27e8b44b?auto=format&fit=facearea&w=256&q=83' },
  { group: 'kids', category: '', title: 'ALITAS DE POLLO', desc: 'Preparación especial de pollo acompañada de guarniciones al gusto.', price: '$12.5', img: 'https://images.unsplash.com/photo-1516684669134-de6f27e8b44b?auto=format&fit=facearea&w=256&q=84' },
  { group: 'kids', category: '', title: 'DEDITOS DE POLLO', desc: 'Preparación especial de pollo acompañada de guarniciones al gusto.', price: '$10.4', img: 'https://images.unsplash.com/photo-1516684669134-de6f27e8b44b?auto=format&fit=facearea&w=256&q=85' },
  { group: 'sides', category: '', title: 'PAPA CRIOLLA', desc: 'Delicioso plato típico, preparado con ingredientes de calidad.', price: '$10.4', img: 'https://images.unsplash.com/photo-1516684669134-de6f27e8b44b?auto=format&fit=facearea&w=256&q=86' },
  { group: 'sides', category: '', title: 'MOTE LIMPIO', desc: 'Delicioso plato típico, preparado con ingredientes de calidad.', price: '$8.35', img: 'https://images.unsplash.com/photo-1516684669134-de6f27e8b44b?auto=format&fit=facearea&w=256&q=87' },
  { group: 'sides', category: '', title: 'GUACAMOLE', desc: 'Delicioso plato típico, preparado con ingredientes de calidad.', price: '$8.35', img: 'https://images.unsplash.com/photo-1516684669134-de6f27e8b44b?auto=format&fit=facearea&w=256&q=88' },
  { group: 'drinks', category: 'Cocteles', title: 'MOJITO', desc: 'Cóctel clásico preparado con los mejores licores y sabores frutales.', price: '$nan', img: 'https://images.unsplash.com/photo-1516684669134-de6f27e8b44b?auto=format&fit=facearea&w=256&q=334' },
  { group: 'drinks', category: 'Cocteles', title: 'SUPER MOJITO', desc: 'Cóctel clásico preparado con los mejores licores y sabores frutales.', price: '$nan', img: 'https://images.unsplash.com/photo-1516684669134-de6f27e8b44b?auto=format&fit=facearea&w=256&q=335' },
  { group: 'drinks', category: 'Cocteles', title: 'GRAND MARGARITA', desc: 'Cóctel clásico preparado con los mejores licores y sabores frutales.', price: '$nan', img: 'https://images.unsplash.com/photo-1516684669134-de6f27e8b44b?auto=format&fit=facearea&w=256&q=336' },
  { group: 'drinks', category: 'Wiskey', title: 'JACK DANIELS', desc: 'Deliciosa bebida servida con los más altos estándares de calidad.', price: '$nan', img: 'https://images.unsplash.com/photo-1516684669134-de6f27e8b44b?auto=format&fit=facearea&w=256&q=338' },
  { group: 'drinks', category: 'Wiskey', title: 'JAMESON 750ML', desc: 'Deliciosa bebida servida con los más altos estándares de calidad.', price: '$nan', img: 'https://images.unsplash.com/photo-1516684669134-de6f27e8b44b?auto=format&fit=facearea&w=256&q=338' },
  { group: 'drinks', category: 'Wiskey', title: 'JAMESON L', desc: 'Deliciosa bebida servida con los más altos estándares de calidad.', price: '$nan', img: 'https://images.unsplash.com/photo-1516684669134-de6f27e8b44b?auto=format&fit=facearea&w=256&q=339' },
  { group: 'drinks', category: 'Wiskey', title: 'JOHNNIE WALKER BLACK', desc: 'Whisky de alta calidad, perfecto para los conocedores.', price: '$nan', img: 'https://images.unsplash.com/photo-1516684669134-de6f27e8b44b?auto=format&fit=facearea&w=256&q=340' },
  { group: 'drinks', category: 'Wiskey', title: 'JOHNNIE WALKER 18', desc: 'Whisky de alta calidad, perfecto para los conocedores.', price: '$nan', img: 'https://images.unsplash.com/photo-1516684669134-de6f27e8b44b?auto=format&fit=facearea&w=256&q=341' },
  { group: 'drinks', category: 'Wiskey', title: 'JOHNNIE WALKER BLUE', desc: 'Whisky de alta calidad, perfecto para los conocedores.', price: '$nan', img: 'https://images.unsplash.com/photo-1516684669134-de6f27e8b44b?auto=format&fit=facearea&w=256&q=342' },
  { group: 'drinks', category: 'Wiskey', title: 'JOHNNIE WALKER GOLD', desc: 'Whisky de alta calidad, perfecto para los conocedores.', price: '$nan', img: 'https://images.unsplash.com/photo-1516684669134-de6f27e8b44b?auto=format&fit=facearea&w=256&q=343' },
  { group: 'drinks', category: 'Wiskey', title: 'THE MACALLAN 18 YR', desc: 'Deliciosa bebida servida con los más altos estándares de calidad.', price: '$nan', img: 'https://images.unsplash.com/photo-1516684669134-de6f27e8b44b?auto=format&fit=facearea&w=256&q=344' },
  { group: 'drinks', category: 'Wiskey', title: 'THE MACALLAN 15YR', desc: 'Deliciosa bebida servida con los más altos estándares de calidad.', price: '$nan', img: 'https://images.unsplash.com/photo-1516684669134-de6f27e8b44b?auto=format&fit=facearea&w=256&q=345' },
  { group: 'drinks', category: 'Wiskey', title: 'THE MACALLAN 12YR', desc: 'Deliciosa bebida servida con los más altos estándares de calidad.', price: '$nan', img: 'https://images.unsplash.com/photo-1516684669134-de6f27e8b44b?auto=format&fit=facearea&w=256&q=346' },
  { group: 'drinks', category: 'Wiskey', title: 'OLD PARR', desc: 'Deliciosa bebida servida con los más altos estándares de calidad.', price: '$nan', img: 'https://images.unsplash.com/photo-1516684669134-de6f27e8b44b?auto=format&fit=facearea&w=256&q=347' },
  { group: 'drinks', category: 'Bebidas frias y jugos', title: 'CORONA NON ALCOHOLIC', desc: 'Deliciosa bebida servida con los más altos estándares de calidad.', price: '$nan', img: 'https://images.unsplash.com/photo-1516684669134-de6f27e8b44b?auto=format&fit=facearea&w=256&q=348' },
];

// =======================
// SUBCATEGORÍAS POR GRUPO
// =======================
const groupSubcategories = {
  main: [
    { key: 'Pastas', label: 'Pastas' },
    { key: 'Tipicos Ecuatorianos', label: 'Típicos Ecuatorianos' },
    { key: 'Tipicos Colombianos', label: 'Típicos Colombianos' },
    { key: '', label: 'Otros' }
  ],
  kids: [
    { key: '', label: 'Menú Infantil' }
  ],
  sides: [
    { key: '', label: 'Acompañamientos' }
  ],
  soups: [
    { key: '', label: 'Sopas' }
  ],
  appetizers: [
    { key: '', label: 'Entradas' }
  ],
  salads: [
    { key: '', label: 'Ensaladas' },
  ],
  dessert: [
    { key: '', label: 'Postres' }
  ],
  breakfast: [
    { key: 'Desayuno americano', label: 'Desayuno Americano' },
    { key: 'Desayuno colombiano', label: 'Desayuno Colombiano' },
    { key: 'Desayuno ecuatoriano', label: 'Desayuno Ecuatoriano' }
  ],
  drinks: [
    { key: 'cocteles', label: 'cocteles' },
    { key: 'Vinos y Sangrias', label: 'Vinos y Sangrias' },
    { key: 'Cognac', label: 'Cognac' },
    { key: 'Wiskey', label: 'Wiskey' },
    { key: 'Ron', label: 'Ron' },
    { key: 'Sangria', label: 'Sangria' },
    { key: 'Gin', label: 'Gin' },
    { key: 'Champan', label: 'Champan' },
    { key: 'Tequila', label: 'Tequila' },
    { key: 'Cerveza', label: 'Cerveza' },
    { key: 'Vodka', label: 'Vodka' },
    { key: 'Bebidas frias y jugos', label: 'Frias y Jugos' },
    { key: 'Cerveza', label: 'Cerveza' }
  ]
};

let currentGroup = 'main';
let currentCategory = groupSubcategories['main'][0].key;

// =======================
// RENDERIZADO DE CATEGORÍAS
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
// RENDERIZADO DE MENÚ DE PLATOS
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

// =======================
// FORMATEO DE PRECIOS
// =======================
function priceFormat(num) {
  let [entero, decimal] = num.split('.');
  return `${entero}<span class="decimal">.${decimal || '00'}</span>`;
}

// =======================
// RENDER DE UN PRODUCTO
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

// =======================
// FILTRO DE MENÚ POR CATEGORÍAS
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
// FILTRO DE MENÚ POR GRUPO EN SIDEBAR
// =======================
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

// =======================
// RESPONSIVE: VUELVE A RENDERIZAR EN CAMBIO DE TAMAÑO
// =======================
window.addEventListener("resize", () => {
  renderMenu(currentGroup, currentCategory);
});

// =======================
// INICIALIZACIÓN
// =======================
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

// =======================
// MODAL DE PRODUCTO
// =======================

// Utilidad para formatear el precio con decimal pequeño
function modalPriceFormat(num) {
  let [entero, decimal] = num.split('.');
  return `${entero}<span class="decimal">.${decimal || '00'}</span>`;
}

// Lista de deseos (puedes hacerlo persistente con localStorage si quieres)
let wishList = [];

// Delegado: abrir modal al hacer click en un producto
document.addEventListener('click', function(e) {
  const target = e.target.closest('.menu-item');
  if (!target) return;

  // Busca el producto por el título (puedes usar otro identificador si tienes uno)
  const title = target.querySelector('.menu-item-title').textContent;
  const product = menuData.find(p => p.title === title);
  if (!product) return;

  // Llena los datos del modal
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
         <span class="price-cash">$${modalPriceFormat(cash.toFixed(2))}</span>
       </div>
       <div class="price-block">
         <span class="icon-card"><i class="fas fa-credit-card"></i></span>
         <span class="price-card">$${modalPriceFormat(card)}</span>
       </div>`
    : `<span class="price-consult">Consultar</span>`;
  modal.querySelector('.modal-price-row').innerHTML = priceHTML;

  // Estado corazón
  const heartBtn = modal.querySelector('.modal-heart-btn');
  if (wishList.includes(product.title)) {
    heartBtn.classList.add('added');
    heartBtn.innerHTML = '<i class="fas fa-heart"></i> En deseos';
  } else {
    heartBtn.classList.remove('added');
    heartBtn.innerHTML = '<i class="fas fa-heart"></i> Añadir a deseos';
  }

  // Abrir modal
  modal.classList.add('active');

  // Guardar el producto actual en el botón para referencia
  heartBtn.dataset.productTitle = product.title;
});

// Cerrar modal al hacer click en la X
document.querySelector('#product-modal .modal-close').onclick = function() {
  document.getElementById('product-modal').classList.remove('active');
};

// Cerrar modal al click en fondo oscuro
document.getElementById('product-modal').onclick = function(e) {
  if (e.target === this) this.classList.remove('active');
};

// Añadir/quitar de deseos al hacer click en el corazón
document.querySelector('#product-modal .modal-heart-btn').onclick = function() {
  const productTitle = this.dataset.productTitle;
  if (!productTitle) return;
  if (wishList.includes(productTitle)) {
    wishList = wishList.filter(title => title !== productTitle);
    this.classList.remove('added');
    this.innerHTML = '<i class="fas fa-heart"></i> Añadir a deseos';
  } else {
    wishList.push(productTitle);
    this.classList.add('added');
    this.innerHTML = '<i class="fas fa-heart"></i> En deseos';
  }
  // Aquí puedes actualizar el ícono global del corazón si quieres mostrar cuántos productos hay en deseos
};
