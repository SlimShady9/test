import React, { useEffect, useState } from "react";
import Authenticated from "@/Layouts/Authenticated";
import DataForm from "@/Components/DataForm";
import axios from "axios";

export default function Envios(props) {
    //Arreglo de envíos
    const [envios, setEnvios] = useState([]);
    //res llama los valores de los campos con método post
    const submitEnvio = async (e) => {
        e.preventDefault();
        const form = e.target;
        const res = await axios.post("/api/envios", {
            estado: form.estado.value,
            nombre: form.nombre.value,
        });
        setEnvios([...envios, res.data]);
    };
    //Antes de que cargue la vista corgamos los datos
    useEffect(() => {
        //Llamamos a la ruta para obtener datos de los envíos
        axios.get("/api/envios").then((res) => {
            //Cargamos arreglo de envíos existentes en bd.
            setEnvios(res.data);
        });
    }, []);

    return (
        <>
            <Authenticated {...props}>
                <div className="flex justify-center gap-4 m-4"></div>
            </Authenticated>
        </>
    );
}
