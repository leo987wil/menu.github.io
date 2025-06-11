// Datos de ejemplo para los productos
const menuData = [
  { group: 'main', category: 'Pastas', title: 'PENNE AL VODKA', desc: 'Delicioso plato típico, preparado con ingredientes de calidad.', price: '$14.6', img: 'https://images.unsplash.com/photo-1516684669134-de6f27e8b44b?auto=format&fit=facearea&w=256&q=80' },
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

// Subcategorías por grupo (adapta según tus grupos actuales)
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
  // Extraer valor numérico del precio
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
      <div class="menu-item-price">
        ${
          isValid
            ? `<span class="price-cash">$${cash.toFixed(2)} <small>Cash</small></span>
               <span class="price-card">$${card} <small>Tarjeta</small></span>`
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
