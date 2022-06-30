import React from "react";
import Authenticated from "@/Layouts/Authenticated";
import axios from "axios";

export default function Envios(props) {
    const [envios, setEnvios] = React.useState([]);

    const submitEnvio = async (e) => {
        e.preventDefault();
        const form = e.target;
        const res = await axios.post("/api/envios", {
            estado: form.estado.value,
            nombre: form.nombre.value,
        });
        setEnvios([...envios, res.data]);
    };

    React.useEffect(() => {
        axios.get("/api/envios").then((res) => {
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
