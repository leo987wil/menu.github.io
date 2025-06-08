// Seleccionamos los elementos
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

// Agregamos el evento de clic
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.style.display = navMenu.style.display === 'block' ? 'none' : 'block';
});
// JavaScript Document