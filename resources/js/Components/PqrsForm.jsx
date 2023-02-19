import React, { useEffect, useState } from "react";
import { Head } from "@inertiajs/inertia-react";
import Input from "@/Components/FormUtils/Input";
import Label from "@/Components/FormUtils/Label";
import Button from "@/Components/Button";
function Pqrs({ currentStep, setNextStep }) {
    const [services, setServices] = useState([]);

    const submitForm = (e) => {
        e.preventDefault();
        setNextStep(EstadoServiciosEnum.SERVICIO_MENSAJERIA);
    };
    const getService =  (data) => {
        console.log(data);
        try {
            const res =  axios.get("api/service/"+data+"/serviceByUser");
            setServices(res.data);
            console.log(res);
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        getService();
    }, []);

    return (
        <>
            <Head title="Datos del servicio" />
            <h1 className="text-xl font-bold text-left mb-3">
                Datos iniciales
            </h1>
            <form className="gap-4" onSubmit={submitForm}>
            <div className="col-span-1">
                                <Label className="">
                                    Servicio
                                </Label>
                                <SelectInput options={services} />
                            </div>
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
