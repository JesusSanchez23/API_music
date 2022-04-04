import * as UI from "./interfaz.js";

class API {
  constructor(artista, cancion) {
    this.artista = artista;
    this.cancion = cancion;
  }

  consultarAPI() {
    const url = `https://api.lyrics.ovh/v1/${this.artista}/${this.cancion}`;

    console.log(url);

    fetch(url)
      .then((respuesta) => respuesta.json())
      .then((data) => this.mostrarCancion(data))
      .catch((err) => console.log(err));
  }

  mostrarCancion({ lyrics }) {
    console.log(lyrics);

    if (lyrics) {
      UI.divResultado.textContent = lyrics;
      UI.headingResultado.textContent = `Letra de la canción: ${this.cancion} de ${this.artista}`;
    } else {
      UI.divMensajes.textContent = "La canción no existe, prueba nuevamente";
      UI.divMensajes.classList.add("error");

      setTimeout(() => {
        UI.divMensajes.textContent = "";
        UI.divMensajes.classList.remove("error");
      }, 2000);
      return;
    }
  }
}

export default API;
