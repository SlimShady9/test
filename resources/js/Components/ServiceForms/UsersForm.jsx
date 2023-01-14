import React, { useEffect, useState } from "react";
import StateServiceEnum from "@/Constants/StateServiceEnum";
import { Head } from "@inertiajs/inertia-react";
import Input from "../FormUtils/Input";
import Select from "react-select";
import Label from "../FormUtils/Label";
import CurrencyFormInput from "../FormUtils/CurrencyFormInput";
import { getOptionsTypeService } from "@/Utils/FetchApi";
import Button from "../Button";
import SelectInput from "../FormUtils/SelectInput";

function UsersForm({ currentStep, setNextStep }) {

    const [userParams, setUserParams] = useState([]);

    console.log(userParams);

    const id = StateServiceEnum.SERVICE_USERS_ASSIGNED;

    const options = [
        { value: "1", label: "Cliente" },
        { value: "2", label: "Mensajero" },
        { value: "3", label: "Coordinador" },
        { value: "4", label: "Administrador" },
        { value: "4", label: "Quitar permisos" }
    ];

    if (currentStep !== id) {
        return <></>;
    }

    const submitForm = (e) => {
        e.preventDefault();
        setNextStep(StateServiceEnum.SERVICE_DETAIL);
    };

    return (<>
        <Head title="Datos del servicio" />
        <form className="flex flex-col gap-4" onSubmit={submitForm}>
            <h1 className="text-xl font-bold text-left mb-3">
                Asignar Usuarios
            </h1>
            <div className="flex gap-4">
                <div className="w-full">
                    <Label>Selecciona el usuario a agregar</Label>
                    <SelectInput />
                </div>
            </div>
            <div className="w-full">
                <div className="mb-4">
                    <Label>Usuarios con acceso</Label>
                </div>
                <div className="grid gap-3 ">
                    <div className={"flex hover:shadow-lg lg:grid lg:grid-cols-7  bg-gradient-to-t from-white to-gray-servi rounded-xl"}>
                        <div className={"flex my-auto mx-auto w-8 h-8 shadow-xl shadow-gray-dark bg-gradient-to-t from-gray-servi to-gray-dark rounded-full hover:opacity-30"}>
                            <img className="sm:scale-150 scale-125"
                                src="" />
                        </div>
                        <div className="justify-center text-center grid col-span-2 mt-2 aling-center">
                            <Label className="text-lg font-bold text-left mb-3">nomusuario</Label>
                            <div className="text-xs mb-3">noaamusuario@gmail.com</div>
                        </div>
                        <div className="flex justify_left col-span-3 my-auto mx-auto aling-center">
                            <SelectInput options={options} />
                        </div>
                    </div>
                    <div className={"flex hover:shadow-lg lg:grid lg:grid-cols-7  bg-gradient-to-t from-white to-gray-servi rounded-xl"}>
                        <div className={"flex my-auto mx-auto w-8 h-8 shadow-xl shadow-gray-dark bg-gradient-to-t from-gray-servi to-gray-dark rounded-full hover:opacity-30"}>
                            <img className="sm:scale-150 scale-125"
                                src="" />
                        </div>
                        <div className="justify-center text-center grid col-span-2 mt-2 aling-center">
                            <Label className="text-lg font-bold text-left mb-3">nomusuario</Label>
                            <div className="text-xs mb-3">noaamusuario@gmail.com</div>
                        </div>
                        <div className="flex justify_left col-span-3 my-auto mx-auto aling-center">
                            <SelectInput options={options} />
                        </div>
                    </div>
                    <div className={"flex hover:shadow-lg lg:grid lg:grid-cols-7  bg-gradient-to-t from-white to-gray-servi rounded-xl"}>
                        <div className={"flex my-auto mx-auto w-8 h-8 shadow-xl shadow-gray-dark bg-gradient-to-t from-gray-servi to-gray-dark rounded-full hover:opacity-30"}>
                            <img className="sm:scale-150 scale-125"
                                src="" />
                        </div>
                        <div className="justify-center text-center grid col-span-2 mt-2 aling-center">
                            <Label className="text-lg font-bold text-left mb-3">nomusuario</Label>
                            <div className="text-xs mb-3">noaamusuario@gmail.com</div>
                        </div>
                        <div className="flex justify_left col-span-3 my-auto mx-auto aling-center">
                            <SelectInput options={options} />
                        </div>
                    </div>
                </div>
            </div>


            <div className="my-3 m-auto">
                <Button className="" type="submit">
                    Guardar y continuar
                </Button>
            </div>
        </form>
    </>);
}

export default UsersForm;
