import React from "react";
import CurrencyInput from "react-currency-input-field";
import StateServiceEnum from "@/Constants/StateServiceEnum";
import { Head } from "@inertiajs/inertia-react";
import Input from "../FormUtils/Input";
import Label from "../Label";

function ServiceDataForm({ currentStep, setNextStep }) {
    const id = StateServiceEnum.SERVICE_STARTED;

    if (currentStep !== id) {
        return <></>;
    }
    return (
        <>
            <Head title="Datos del servicio" />
            <form className="flex flex-col">
                <h1 className="text-xl font-bold text-left mb-3">
                    Datos iniciales
                </h1>
                <div className="gap-4 flex">
                    <div className="w-1/2">
                        <Label>Nombre</Label>
                        <Input></Input>
                    </div>
                    <div className="w-1/2">
                        <Label>Precio</Label>
                        <CurrencyInput></CurrencyInput>
                    </div>
                </div>
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
                        className="m-1 rounded-md"
                        name="Descripcion"
                        id=""
                        cols="30"
                        rows="10"
                    ></textarea>
                </div>
            </form>
        </>
    );
}

export default ServiceDataForm;
