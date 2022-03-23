import { Conexion } from "./Conexion.js";
import * as UI from "./UI.js";

UI.form_buscar.addEventListener("submit", function (e) {
    e.preventDefault();
    
    const artista = UI.input_artista.value;
    const cancion = UI.input_cancion.value;

    if (artista !== "".trim() && cancion !== "".trim()) {
        let obj = new Conexion(artista, cancion);

        const letra = obj.GenerarConsulta().then((datos) => {
            if (datos.error || datos.err) {
                let msg = datos.error? "No se pudo encontrar la cancion": datos.err;
                Error(UI.errorMsg, "block", msg);
                titleSong.innerHTML = "";
                lyrics.innerHTML = "";
                return;
            }
            UI.titleSong.innerHTML = obj.cancion;
            UI.lyrics.innerHTML = datos.lyrics;
        });
    } else {
        Error(UI.errorMsg,"block","Hay campos vacios");
    }
});

const Error = (element,display,mensaje = "")=>{
    element.style.display = display;
    element.innerHTML =
        '<i class="bi bi-exclamation-octagon"></i>  ' +
        mensaje +
        ' <i class="bi bi-exclamation-octagon"></i>';
    setTimeout(function(){
        element.style.display = "none";
        element.innerHTML = "";
    },2000)
    
}
