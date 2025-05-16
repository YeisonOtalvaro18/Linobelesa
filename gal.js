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




    document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("modal");
    const modalImg = document.getElementById("modal-img");
    const modalText = document.getElementById("modal-text");
    const closeBtn = document.querySelector(".close");

    document.querySelectorAll(".info").forEach(button => {
        button.addEventListener("click", function () {
            const parent = this.closest(".img-gali");
            const imgSrc = parent.querySelector("img").src;
            const infoText = parent.getAttribute("data-info");

            modalImg.src = imgSrc;
            modalText.textContent = infoText;
            modal.style.display = "flex";
        });
    });

    closeBtn.addEventListener("click", () => {
        modal.style.display = "none";
    });

    window.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });
});
