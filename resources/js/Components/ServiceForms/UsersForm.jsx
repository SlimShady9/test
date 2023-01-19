import React, { useEffect, useState } from "react";
import EstadoServiciosEnum from "@/Constants/EstadoServiciosEnum";
import { Head } from "@inertiajs/inertia-react";
import Input from "../FormUtils/Input";
import Label from "../FormUtils/Label";
import { getUsers } from "@/Utils/FetchUsers";
import Button from "../Button";
import SelectInput from "../FormUtils/SelectInput";

function UsersForm({ currentStep, setNextStep }) {
    const [userParams, setUserParams] = useState([]);

    const id_t_user = "4";
    const name = "Admin";
    let Users = [];
    getUsers({id_t_user , name}).then(res =>  Users = res.data);

    console.log(Users);

    const id = EstadoServiciosEnum.SERVICIO_USUARIOS_ASIGNADOS;

    const options = [
        { value: "1", label: "Cliente" },
        { value: "2", label: "Mensajero" },
        { value: "3", label: "Coordinador" },
        { value: "4", label: "Administrador" },
        { value: "4", label: "Quitar permisos" },
    ];

    if (currentStep !== id) {
        return <></>;
    }

    const submitForm = (e) => {
        e.preventDefault();
        setNextStep(EstadoServiciosEnum.SERVICIO_CON_DETALLE);
    };

    return (
        <>
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
                    {Users.map((user) => (
                        <div>{user}</div>
                        ))}
                        <div
                            className={
                                "grid hover:shadow-lg grid-cols-6  bg-gradient-to-t from-white to-gray-servi rounded-xl"
                            }
                        >
                            <div
                                className={
                                    "flex col-span-1 my-auto mx-auto w-8 h-8 shadow-xl shadow-gray-dark bg-gradient-to-t from-gray-servi to-gray-dark rounded-full hover:opacity-30"
                                }
                            >
                                <img
                                    className="sm:scale-150 scale-125"
                                    src=""
                                />
                            </div>
                            <div className="justify-center mx-auto text-center grid col-span-3 mt-2 aling-center">
                                <Label className="text-lg font-bold text-left mb-3 overflow-hidden">
                                    
                                </Label>
                                <div className="text-xs mb-3 overflow-hidden">
                                    noaamusuario@gmail.com
                                </div>
                            </div>
                            <Label className='bg-white text-center shadow-lg rounded-full justify_left col-span-1 aling-center my-auto overflow-hidden'>
                                Administrador
                            </Label>
                            <Button className="col-span-1 ml-auto mr-0">X</Button>
                        </div>
                    
                    </div>
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

export default UsersForm;
