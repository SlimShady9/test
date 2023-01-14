import React, { useEffect, useState } from "react";
import EstadoServiciosEnum from "@/Constants/EstadoServiciosEnum";
("@/Constants/EstadoServiciosEnum");
import { Head } from "@inertiajs/inertia-react";
import Input from "../FormUtils/Input";
import Label from "../FormUtils/Label";
import CurrencyFormInput from "../FormUtils/CurrencyFormInput";
import { getOptionsTypeService } from "@/Utils/FetchApi";
import Button from "../Button";
import SelectInput from "../FormUtils/SelectInput";

function ServiceDataForm({ currentStep, setNextStep }) {
    const id = EstadoServiciosEnum.SERVICIOS_INCIADO;

    const showPrice = true;

    const [optionsTypeService, setOptionsTypeService] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const options = await getOptionsTypeService();
        setOptionsTypeService(options);
    };

    const submitForm = (e) => {
        e.preventDefault();
        setNextStep(EstadoServiciosEnum.SERVICIO_DIRECCION_CONFIRMADA);
    };

    if (currentStep !== id) {
        return <></>;
    }
    return (
        <>
            <Head title="Datos del servicio" />
            <form className="flex flex-col" onSubmit={submitForm}>
                <h1 className="text-xl font-bold text-left mb-3">
                    Datos iniciales
                </h1>
                <div className="gap-4 flex">
                    <div className="w-full">
                        <Label className="text-center">Tipo de servicio</Label>
                        <SelectInput options={optionsTypeService} />
                    </div>
                </div>
                {showPrice && (
                    <div className="gap-4 flex">
                        <div className="w-1/2">
                            <Label>Precio</Label>
                            <CurrencyFormInput />
                        </div>
                    </div>
                )}
                <div className="gap-4 flex">
                    <div className="w-1/2">
                        <Label>Nombre</Label>
                        <Input></Input>
                    </div>
                    <div className="w-1/2">
                        <Label>Fecha inicio</Label>
                        <Input type="date"></Input>
                    </div>
                </div>

                <div className="flex flex-col">
                    <Label>Descripcion</Label>
                    <textarea
                        className="m-1 rounded-md font-sans tracking-widest"
                        name="Descripcion"
                        id=""
                        cols="30"
                        rows="10"
                    ></textarea>
                </div>
                <div className="my-3 m-auto">
                    <Button className="" type="submit">
                        Guardar y continuar
                    </Button>
                </div>
            </form>
        </>
    );
}

export default ServiceDataForm;
