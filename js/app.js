import * as UI from "./interfaz.js";
import API from "./api.JS";

UI.formulario.addEventListener("submit", BuscarCancion);

function BuscarCancion(e) {
  e.preventDefault();

  const artista = document.querySelector("#artista").value;
  const cancion = document.querySelector("#cancion").value;

  if (artista === "" || cancion === "") {
    // el usuario dejo campo vacio
    UI.divMensajes.textContent = "Error... Todos los campos son obligatorios";
    UI.divMensajes.classList.add("error");

    setTimeout(() => {
      UI.divMensajes.textContent = "";
      UI.divMensajes.classList.remove("error");
    }, 2000);
    return;
  }

  // consultar API
  const busqueda = new API(artista, cancion);
  busqueda.consultarAPI();
}
