import React, { useEffect, useState } from "react";
import { Head } from "@inertiajs/inertia-react";
import Fetch from "@/Components/FormUtils/Input";
import Label from "@/Components/FormUtils/Label";
import Button from "./FormUtils/Button";
import { sendEmail } from "@/Utils/FetchEmail";
import { toStringTipoDeUsuariosEnum2 } from "@/Constants/TipoDeUsuariosEnum";
import { toStringEstadoServiciosEnum2 } from "@/Constants/EstadoServiciosEnum";
import {
    getService,
} from "@/Utils/FetchService";
function Pqrs({auth,serviceId}) {
    const [service, setService] = useState(null);
    useEffect(() => {
        getService(serviceId).then((res) => {
            setService(res[0]);
        });
    }, []);
    const submitForm = (e) => {
        e.preventDefault();
        console.log(auth);
        console.log(serviceId);
        sendEmail({
            servicio: serviceId,
            comentario: e.target.Descripcion.value,
            usuario: auth.user.email,
            tUsuario: toStringTipoDeUsuariosEnum2(auth.user.id_t_user),
            stateService: toStringEstadoServiciosEnum2(service.id_state_service),
        });

    };

    return (
        <>
            <Head title="Datos del servicio" />
            <h1 className="text-xl font-bold text-left mb-3">
                Escribe tu comentario acerca del servicio
            </h1>
            <form className="gap-4" onSubmit={submitForm}>
                <div className="flex flex-col w-full gap-4">
                    <div className="mt-3">
                        <Label>Descripción / Recomendaciones</Label>
                    </div>
                    <textarea
                        className="m-1 rounded-md font-sans tracking-widest"
                        name="Descripcion"
                        id=""
                        cols="30"
                        rows="4"
                    ></textarea>
                    <div className="my-3 m-auto">
                        <Button className="" type="submit">
                            Enviar
                        </Button>
                    </div>
                </div>
            </form>
        </>
    );
}

export default Pqrs;
