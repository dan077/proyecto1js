class Conexion {
    constructor(artista, cancion) {
        this.cancion = cancion;
        this.artista = artista;
        this.url = "https://api.lyrics.ovh/v1"; // ejemplo: Frank Sinatra/fly
    }

    GenerarConsulta() {
        const consulta = fetch(
            `${this.url}/${encodeURI(this.artista)}/${encodeURI(this.cancion)}`
        )
            .then((datos) => datos.json())
            .catch((err) => {
                return { err: "Ha ocurrido un error con la conexion" };
            });
        return consulta;
    }
}

export { Conexion };
