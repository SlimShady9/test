import axios from "axios";

const storeTiempo = async (tiempo) => {
    try {
        const req = await axios.post("/api/tiempoLog", tiempo);
        if (req.status === 200 || req.status === 201 || req.status === 202) {
            return { data: req.data, error: null };
        }
        return { data: null, error: "Error al guardar el contenido" };
    } catch (error) {
        return { data: null, error: error };
    }
};

const updateTiempo = async (tiempo) => {

    try {
        const id = await axios.get(`/tiempoLog/lastTime`);
        const req = (await axios.put(`/api/tiempoLog/${id}`, tiempo))
            .data;
        return [req, null];
    } catch (error) {
        return [null, error];
    }
};



export { storeTiempo, updateTiempo };
