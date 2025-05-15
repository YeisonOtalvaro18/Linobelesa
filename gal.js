let indice = 0;
const imagenes = document.getElementById('imagenes');
const total = imagenes.children.length;

function actualizarCarrusel() {
  const anchoImagen = imagenes.children[0].clientWidth;
  imagenes.style.transform = `translateX(-${indice * anchoImagen}px)`;
}

function siguiente() {
  indice = (indice + 1) % total;
  actualizarCarrusel();
}

function anterior() {
  indice = (indice - 1 + total) % total;
  actualizarCarrusel();
}

window.addEventListener('resize', actualizarCarrusel);
window.addEventListener('load', actualizarCarrusel);
