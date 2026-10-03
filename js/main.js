/* ==========================================================
   NOMBRES QUE USA ESTE JS (Sebastián: usar estos en el HTML/CSS)
   - Botón de tema:  id="btn-tema"
   - Tema oscuro:    clase "modo-oscuro" en <body>  (estilos: body.modo-oscuro)
      - Botones de filtro:  class="btn-filtro" y data-filtro="todos|web|diseno|datos"
   - Tarjetas proyecto:  class="proyecto" y data-categoria="web|diseno|datos"
   ========================================================== */

// ===== Modo claro/oscuro =====
const botonTema = document.getElementById("btn-tema");

function aplicarTema(tema) {
  document.body.classList.toggle("modo-oscuro", tema === "oscuro");
}

if (botonTema) {
  // Al cargar, usa el tema guardado (o "claro" si no hay ninguno)
  aplicarTema(localStorage.getItem("tema") || "claro");

  botonTema.addEventListener("click", () => {
    const esOscuro = document.body.classList.contains("modo-oscuro");
    const nuevoTema = esOscuro ? "claro" : "oscuro";
    aplicarTema(nuevoTema);
    localStorage.setItem("tema", nuevoTema);
  });
}

// ===== Filtro de proyectos por categoría =====
const botonesFiltro = document.querySelectorAll(".btn-filtro");
const proyectos = document.querySelectorAll(".proyecto");

function filtrarProyectos(categoria) {
  proyectos.forEach((proyecto) => {
    const coincide = categoria === "todos" || proyecto.dataset.categoria === categoria;
    proyecto.style.display = coincide ? "" : "none";
  });
}

botonesFiltro.forEach((boton) => {
  boton.addEventListener("click", () => {
    // Marca visualmente el botón activo
    botonesFiltro.forEach((b) => {
      b.classList.remove("activo");
      b.setAttribute("aria-pressed", "false");
    });
    boton.classList.add("activo");
    boton.setAttribute("aria-pressed", "true");

    filtrarProyectos(boton.dataset.filtro);
  });
});