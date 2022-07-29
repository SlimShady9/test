import React from "react";
import Authenticated from "@/Layouts/Authenticated";
import axios from "axios";

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
        console.log(envios);
    }, []);

    return (
        <>
            <Authenticated {...props}>
                <div>{envios.Envios}</div>
                <form onSubmit={submitEnvio}>
                    <input type="text" name="estado" />
                    <input type="text" name="nombre" />
                    <input type="submit" />
                </form>
                <table>
                    <thead>
                        <th>ID</th>
                        <th>Estado</th>
                        <th>Nombre</th>
                    </thead>
                    <tbody>
                        {/*Funciona como un forEach para llamar a los envíos existentes*/}
                        {envios.map((envio) => (
                            <tr key={envio.id}>
                                <td>{envio.id}</td>
                                <td>{envio.estado}</td>
                                <td>{envio.nombre}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </Authenticated>
        </>
    );
}
