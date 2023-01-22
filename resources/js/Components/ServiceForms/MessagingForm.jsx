import React, { useEffect, useState } from "react";
import { EstadoServiciosEnum } from "@/Constants/EstadoServiciosEnum";
("@/Constants/EstadoServiciosEnum");
import { Head } from "@inertiajs/inertia-react";
import Input from "../FormUtils/Input";
import Label from "../FormUtils/Label";
import CurrencyFormInput from "../FormUtils/CurrencyFormInput";
import { getOptionsTypeService } from "@/Utils/FetchApi";
import Button from "../Button";
import SelectInput from "../FormUtils/SelectInput";

function MessagingForm({ currentStep, setNextStep }) {
    const id = EstadoServiciosEnum.SERVICIO_MENSAJERIA;

    const showDetail = true;

    const addPermisson = (e) => {
        showDetail = !showDetail;
    };

    const [optionsTypeService, setOptionsTypeService] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const options = await getOptionsTypeService();
        setOptionsTypeService(options);
    };

    const previous = (e) => {
        e.preventDefault();
        setNextStep(EstadoServiciosEnum.SERVICIO_INCIADO);
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
                Información de Origen y Seguimiento
            </h1>
            <form className="gap-4" onSubmit={submitForm}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="col-span-1">
                        <Label>Nombre Remitente</Label>
                        <Input></Input>
                    </div>
                    <div className="col-span-1">
                        <Label>Empresa / Entidad Asociada</Label>
                        <Input></Input>
                    </div>
                    <div className="col-span-1">
                        <Label className="">Cargo del Remitente</Label>
                        <Input></Input>
                    </div>
                    <div className="col-span-1">
                        <Label>Centro de Costos</Label>
                        <Input></Input>
                    </div>
                    <div className="col-span-1">
                        <Label>Dependencia</Label>
                        <Input></Input>
                    </div>
                    <div className="col-span-1">
                        <Label>Orden interna</Label>
                        <Input></Input>
                    </div>

                    {showDetail && (
                        <>
                            <div className="col-span-1">
                                <Label className="">
                                    Transportadora Asociada
                                </Label>
                                <SelectInput options={optionsTypeService} />
                            </div>
                            <div className="col-span-1">
                                <Label>Número de Seguimiento</Label>
                                <Input></Input>
                            </div>
                        </>
                    )}
                </div>
                <div className="flex flex-col w-full gap-4">
                    <div className="flex gap-4 my-5 mx-auto">
                        <Button className="" type="Button" onClick={previous}>
                            Volver
                        </Button>
                        <Button className="" type="submit">
                            Guardar y continuar
                        </Button>
                    </div>
                </div>
            </form>
        </>
    );
}

export default MessagingForm;
