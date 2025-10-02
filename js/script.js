// Selecciona los elementos del menú y el contenido
const menuItems = document.querySelectorAll('.tab');
const tabContents = document.querySelectorAll('.tab-content');

menuItems.forEach(item => {
  item.addEventListener('click', () => {
    // Quitar 'active' de todos los elementos del menú
    menuItems.forEach(i => i.classList.remove('active'));
    // Agregar 'active' al item clickeado
    item.classList.add('active');

    // Ocultar todas las secciones
    tabContents.forEach(content => content.classList.remove('active'));

    // Mostrar solo la sección que corresponde al tab clickeado
    const target = item.getAttribute('data-tab');
    document.getElementById(target).classList.add('active');
  });
});
