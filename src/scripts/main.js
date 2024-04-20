// Test para navegador
console.log("Hola Mundo!");
// Modo oscuro & Claro
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-theme');
});
