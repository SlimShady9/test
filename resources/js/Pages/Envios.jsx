import React from "react";
import Authenticated from "@/Layouts/Authenticated";
import DataForm from "@/Components/DataForm";
import axios from "axios";

let datosEjemplo = [
    {
        label: "Opciones de compra",
        name: "opcionesCompra",
        value: "opcionesCompra",
        type: "select",
        items: [
            { label: "Contra Entrega", value: "Contra Entrega" },
            {
                label: "Transferencia bancaria",
                value: "Transferencia bancaria",
            },
            { label: "Tarjeta de Credito", value: "Tarjeta de Credito" },
        ],
        required: true,
    },
    {
        label: "Nombre",
        name: "nombre",
        value: "nombre",
        type: "text",
        required: true,
    },
    {
        label: "Costo",
        name: "costo",
        value: "costo",
        type: "number",
        required: true,
    },
    {
        label: "telefono",
        name: "telefono",
        value: "telefono",
        type: "number",
        required: false,
    },
];

export default function Envios(props) {
    //Arreglo de envíos
    const [envios, setEnvios] = React.useState([]);
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
    React.useEffect(() => {
        //Llamamos a la ruta para obtener datos de los envíos
        axios.get("/api/envios").then((res) => {
            //Cargamos arreglo de envíos existentes en bd.
            setEnvios(res.data);
        });
    }, []);

    return (
        <>
            <Authenticated {...props}>
                <div className="flex justify-center gap-4 m-4">
                <DataForm 
                titleForm={"Envíos"}
                httpMethod={"POST"} 
                dataF={datosEjemplo} 
                cols = {2}
                buttonText={"Solicitar Envío"}
                />
                </div>
            </Authenticated>
        </>
    );
}
