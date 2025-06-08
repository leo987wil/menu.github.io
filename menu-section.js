// Datos de ejemplo para los productos
const menuData = [
  // Desayunos
  {
    group: 'breakfast', category: 'eggs', title: 'Huevos al gusto', desc: 'Huevos preparados como prefieras.', price: '$5', img: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=facearea&w=256&q=80'
  },
  {
    group: 'breakfast', category: 'sandwich', title: 'Sandwich especial', desc: 'Sandwich de jamón, queso y vegetales.', price: '$6', img: 'https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?auto=format&fit=facearea&w=256&q=80'
  },
  // Platos Fuertes
  {
    group: 'main', category: 'meat', title: "Soft shell crab", desc: "Seasoned with an herb crust, served with au jus and handcarved to order.", price: "$29", img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=facearea&w=256&q=80"
  },
  {
    group: 'main', category: 'chicken', title: "Miso chicken", desc: "Our tender, juicy filet paired with a steamed lobster tail. Served with your choice of signature potato and one freshly made side.", price: "$19", img: "https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?auto=format&fit=facearea&w=256&q=80"
  },
  {
    group: 'main', category: 'fish', title: "Fish pie", desc: "Integer nec lacinia arcu, vel rhoncus leo aliquet.", price: "$12", img: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=facearea&w=256&q=80"
  },
  {
    group: 'main', category: 'salad', title: "Garden salad", desc: "Pellentesque eros mi, faucibus tempor scelerisque nec, efficitur nec nunc.", price: "$9", img: "https://images.unsplash.com/photo-1516684669134-de6f27e8b44b?auto=format&fit=facearea&w=256&q=80"
  },
  {
    group: 'main', category: 'meat', title: "Victoria's Filet Mignon", desc: "Usce tempus tempus maximus volutpat", price: "$49", img: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=facearea&w=256&q=80"
  },
  {
    group: 'main', category: 'fish', title: "Salmon Riverland", desc: "Fusce a tellus tellus. Praesent neque arcu, efficitur sit amet.", price: "$105", img: "https://images.unsplash.com/photo-1452195100486-9cc8059871e9?auto=format&fit=facearea&w=256&q=80"
  },
  {
    group: 'main', category: 'meat', title: "Prime Cuts of Beef123abc", desc: "Pellentesque eros mi, faucibus tempor scelerisque nec, efficitur nec nunc.", price: "$34", img: "https://images.unsplash.com/photo-1506084868230-bb9d95c24759?auto=format&fit=facearea&w=256&q=80"
  },
  {
    group: 'main', category: 'meat', title: "Slow-Roasted Prime Rib", desc: "Fusce a tellus tellus. Praesent neque arcu, efficitur sit amet.", price: "$52", img: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=facearea&w=256&q=80"
  },
  // Postres
  {
    group: 'dessert', category: 'cake', title: "Chocolate Lava Cake", desc: "Warm chocolate cake with molten center.", price: "$14", img: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=facearea&w=256&q=80"
  },
  {
    group: 'dessert', category: 'cake', title: "Cheesecake", desc: "Classic New York style cheesecake.", price: "$13", img: "https://images.unsplash.com/photo-1516684669134-de6f27e8b44b?auto=format&fit=facearea&w=256&q=80"
  },
  // Bebidas
  {
    group: 'drinks', category: 'alcohol', title: "Classic Mojito", desc: "Rum, lime juice, mint, sugar, and soda.", price: "$8", img: "https://images.unsplash.com/photo-1506084868230-bb9d95c24759?auto=format&fit=facearea&w=256&q=80"
  },
  {
    group: 'drinks', category: 'non-alcohol', title: "Sparkling Water", desc: "Chilled sparkling mineral water.", price: "$4", img: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=facearea&w=256&q=80"
  },
  // Combos
  {
    group: 'combos', category: 'family', title: "Combo Familiar", desc: "Incluye pollo, papas y ensalada para 4 personas.", price: "$30", img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=facearea&w=256&q=80"
  },
  {
    group: 'combos', category: 'kids', title: "Combo Infantil", desc: "Hamburguesa pequeña, papas y jugo.", price: "$10", img: "https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?auto=format&fit=facearea&w=256&q=80"
  },
  // Promociones
  {
    group: 'promo', category: '2x1', title: "Pizza 2x1", desc: "Llévate dos pizzas por el precio de una.", price: "$15", img: "https://images.unsplash.com/photo-1516684669134-de6f27e8b44b?auto=format&fit=facearea&w=256&q=80"
  }
];

// Subcategorías por grupo
const groupSubcategories = {
  breakfast: [
    { key: 'eggs', label: '01. Huevos' },
    { key: 'sandwich', label: '02. Sandwiches' }
  ],
  main: [
    { key: 'meat', label: '01. Carnes' },
    { key: 'chicken', label: '02. Pollo' },
    { key: 'fish', label: '03. Pescado' },
    { key: 'salad', label: '04. Ensaladas' }
  ],
  dessert: [
    { key: 'cake', label: '01. Tortas' }
  ],
  drinks: [
    { key: 'alcohol', label: '01. Con Alcohol' },
    { key: 'non-alcohol', label: '02. Sin Alcohol' }
  ],
  combos: [
    { key: 'family', label: '01. Familiar' },
    { key: 'kids', label: '02. Infantil' }
  ],
  promo: [
    { key: '2x1', label: '01. 2x1' }
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
function menuItemHTML(item) {
  return `
    <div class="menu-item">
      <img class="menu-item-img" src="${item.img}" alt="${item.title}">
      <div class="menu-item-info">
        <div class="menu-item-title">${item.title}</div>
        <div class="menu-item-desc">${item.desc}</div>
      </div>
      <div class="menu-item-price">${item.price}</div>
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