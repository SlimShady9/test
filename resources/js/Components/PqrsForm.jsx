import React, { useEffect, useState } from "react";
import { Head } from "@inertiajs/inertia-react";
import Label from "@/Components/FormUtils/Label";
import Button from "./FormUtils/Button";
import { sendEmail, sendEmailNoAuth } from "@/Utils/FetchEmail";
import { toStringTipoDeUsuariosEnum2 } from "@/Constants/TipoDeUsuariosEnum";
import { toStringEstadoServiciosEnum2 } from "@/Constants/EstadoServiciosEnum";
import { getService } from "@/Utils/FetchService";
import { toast } from "react-toastify";
import Input from "./FormUtils/Input";
import ReactLoading from "react-loading";

function PqrsForm({ auth, serviceId, isMainPage = false }) {
    const [service, setService] = useState(null);
    const [message, setMessage] = useState(
        isMainPage
            ? "Escribe tu comentario"
            : "Escribe tu comentario acerca del servicio"
    );
    const [isLoading, setIsLoading] = useState(false);
    const [dataInput, setDataInput] = useState(auth ? auth.user.email : "");
    useEffect(() => {
        if (isMainPage) {
            return;
        }
        getService(serviceId).then((res) => {
            setService(res[0]);
        });
    }, []);
    const submitForm = (e) => {
        e.preventDefault();
        setIsLoading(true);
        if (isMainPage) {
            sendEmailNoAuth({
                comentario: e.target.descripcion.value,
                contacto: dataInput,
            }).then(({ data, error }) => {
                setIsLoading(false);
                if (error) {
                    toast.warning(
                        "Error al enviar el correo, por favor intenta más tarde"
                    );
                    return;
                }
                toast.success(data);
                if (auth) {
                    window.location.href = "/dashboard";
                    return;
                }
                window.location.href = "/";
            });
        } else {
            sendEmail({
                servicio: serviceId,
                comentario: e.target.descripcion.value,
                usuario: auth.user.email,
                tUsuario: toStringTipoDeUsuariosEnum2(auth.user.id_t_user),
                stateService: toStringEstadoServiciosEnum2(
                    service.id_state_service
                ),
            }).then(() => {
                setIsLoading(false);
                toast.success("Correo enviado");
            });
        }
    };

    const handleChangeInput = (event) => {
        setDataInput(event.target.value);
    };

    return (
        <>
            <Head title="Datos del servicio" />
            <h1 className="text-xl font-bold text-left mb-3">{message}</h1>
            <form className="gap-4" onSubmit={submitForm}>
                <div className="flex flex-col w-full gap-4">
                    {isMainPage && (
                        <>
                            <div>
                                <Label>Ingresa un medio de contacto</Label>
                            </div>
                            <Input
                                name="contact"
                                defaultValue={dataInput}
                                required
                                handleChange={handleChangeInput}
                                disabled={!!auth}
                            />
                        </>
                    )}
                    <div className="mt-3">
                        <Label>Descripción / Recomendaciones</Label>
                    </div>
                    <textarea
                        className="m-1 rounded-md font-sans tracking-widest"
                        name="descripcion"
                        id=""
                        cols="30"
                        rows="4"
                        required
                    ></textarea>

                    <div className="my-3 m-auto">
                        <Button type="submit" processing={isLoading}>
                            {isLoading && (
                                <ReactLoading
                                    type="spin"
                                    height={40}
                                    width={40}
                                    color="#808080"
                                />
                            )}
                            {!isLoading && "Enviar comentario"}
                        </Button>
                    </div>
                </div>
            </form>
        </>
    );
}

export default PqrsForm;
