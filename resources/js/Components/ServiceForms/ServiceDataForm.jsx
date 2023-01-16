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

    const showDetail = true;

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
            <h1 className="text-xl font-bold text-left mb-3">
                Datos iniciales
            </h1>
            <form className="gap-4" onSubmit={submitForm}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="col-span-1">
                        <Label>Nombre</Label>
                        <Input></Input>
                    </div>
                    <div className="col-span-1">
                        <Label className="">Tipo de servicio</Label>
                        <SelectInput options={optionsTypeService} />
                    </div>
                    {showDetail && (
                        <>
                            <div className="col-span-1">
                                <Label className="">Transportadora Asociada</Label>
                                <SelectInput options={optionsTypeService} />
                            </div>
                            <div className="col-span-1">
                                <Label>Número de Seguimiento</Label>
                                <Input></Input>
                            </div>
                        </>
                    )}

                    <div className="col-span-1">
                        <Label>Nombre</Label>
                        <Input></Input>
                    </div>
                    <div className="col-span-1">
                        <Label>Fecha inicio</Label>
                        <Input type="date"></Input>
                    </div>
                    <div className="col-span-1">
                        <Label>Costo ($COP)</Label>
                        <CurrencyFormInput />
                    </div>
                    <div className="col-span-1">
                        <Label>Precio  ($COP)</Label>
                        <CurrencyFormInput />
                    </div>
                </div>
                <div className="flex flex-col w-full gap-4">
                    <div className="mt-3">
                        <Label>Descripción</Label>
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
                            Guardar y continuar
                        </Button>
                    </div>
                </div>
            </form>
        </>
    );
}

export default ServiceDataForm;
