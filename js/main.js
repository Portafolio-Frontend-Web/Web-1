/* ==========================================================
   NOMBRES QUE USA ESTE JS (Sebastián: usar estos en el HTML/CSS)
   - Botón de tema:  id="btn-tema"
   - Tema oscuro:    clase "modo-oscuro" en <body>  (estilos: body.modo-oscuro)
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