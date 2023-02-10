import React, { useEffect, useState } from "react";
import { EstadoServiciosEnum } from "@/Constants/EstadoServiciosEnum";
("@/Constants/EstadoServiciosEnum");
import { Head } from "@inertiajs/inertia-react";
import Input from "../FormUtils/Input";
import Label from "../FormUtils/Label";
import CurrencyFormInput from "../FormUtils/CurrencyFormInput";
import { getOptionsTypeService } from "@/Utils/FetchApi";
import Button from "../FormUtils/Button";
import SelectInput from "../FormUtils/SelectInput";

function ServiceDataForm({ currentStep, setNextStep }) {
    const id = EstadoServiciosEnum.SERVICIO_PENDIENTE;

    const [showDetail, setShowDetail] = useState(false);

    const addPermisson = (e) => {
        setShowDetail(!showDetail);
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
        setNextStep(EstadoServiciosEnum.SERVICIO_CON_DETALLE);
    };

    const submitForm = (e) => {
        e.preventDefault();
        setNextStep(EstadoServiciosEnum.SERVICIO_APROBADO);
    };

    if (currentStep !== id) {
        return <></>;
    }
    return (
        <>
            <Head title="Datos del servicio" />
            <h1 className="text-xl font-bold text-left mb-3">
                Agregar Contenido
            </h1>
            <form className="gap-4" onSubmit={submitForm}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="col-span-1">
                        <Label>Contenido Declarado</Label>
                        <Input></Input>
                    </div>
                    <div className="col-span-1">
                        <Label>Tipo de Carga</Label>
                        <SelectInput />
                    </div>
                    <div className="col-span-1">
                        <Label className="">Unidades Declaradas</Label>
                        <Input></Input>
                    </div>
                    <div className="col-span-1">
                        <Label>Peso Unitario (Kg)</Label>
                        <Input type="number"></Input>
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 col-span-1 gap-4 my-3">
                    <div className="col-span-1">
                        <Label>Largo (m)</Label>
                        <Input type="number"></Input>
                    </div>
                    <div className="col-span-1">
                        <Label>Ancho (m)</Label>
                        <Input type="number"></Input>
                    </div>
                    <div className="col-span-1">
                        <Label>Alto (m)</Label>
                        <Input type="number"></Input>
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="col-span-1">
                        <Label>
                            Valor Comercial del Contenido (Por Unidad)
                        </Label>
                        <CurrencyFormInput />
                    </div>
                    <div className="col-span-1">
                        <Label>Excepciones (condiciones especiales)</Label>
                        <SelectInput isMulti={true} />
                    </div>
                </div>
                <div className="flex flex-col w-full gap-4">
                    <div className="flex gap-4 my-5 mx-auto">
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
