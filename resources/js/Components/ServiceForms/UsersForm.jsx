import EstadoServiciosEnum from "@/Constants/EstadoServiciosEnum";
import AsyncSelect from "react-select/async";
import React from "react";

function UsersForm({ currentStep, setNextStep }) {
    const id = EstadoServiciosEnum.SERVICIO_USUARIOS_ASIGNADOS;

    if (currentStep !== id) {
        return <></>;
    }
    return (
        <form>
            <h1 className="text-xl font-bold text-left mb-3">
                Asigna los usuarios al servicio
            </h1>
        </form>
    );
}

export default UsersForm;
