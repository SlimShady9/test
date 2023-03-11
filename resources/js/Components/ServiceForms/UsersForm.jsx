import React, { useEffect, useState, useContext } from "react";
import ServiceContext from "./useServiceContext";

import { EstadoServiciosEnum } from "@/Constants/EstadoServiciosEnum";
import {
    TipoDeUsuariosEnum,
    toStringTipoDeUsuariosEnum,
} from "@/Constants/TipoDeUsuariosEnum";
import { Head } from "@inertiajs/inertia-react";
import Label from "../FormUtils/Label";
import { getUsers, loadImageUser } from "@/Utils/FetchUsers";
import Button from "../FormUtils/Button";
import SelectInput from "../FormUtils/SelectInput";
import { createOrders, findOrders, deleteOrder } from "@/Utils/FetchOrder";
import { toast } from "react-toastify";

function UsersForm({ currentStep, setNextStep }) {
    const id = EstadoServiciosEnum.SERVICIO_USUARIOS_ASIGNADOS;
    const { serviceDTO, setServiceDTO } = useContext(ServiceContext);
    // As cached data fetched
    const [visitedUsers, setVisitedUsers] = useState([]);
    const [usersFiltered, setUsersFiltered] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null);
    const [usuariosSeleccionados, setUsuariosSeleccionados] = useState([]);

    useEffect(() => {
        if (serviceDTO.orders.length > 0) {
            serviceDTO.orders.forEach((order) => {
                getUsers({ id: order.id_user }).then((res) => {
                    setUsuariosSeleccionados((prev) => [...prev, res.data[0]]);
                });
            });
        }
    }, []);

    const tipoUsuarios = Object.keys(TipoDeUsuariosEnum).map((key) => {
        return {
            value: TipoDeUsuariosEnum[key],
            label: toStringTipoDeUsuariosEnum(TipoDeUsuariosEnum[key]),
        };
    });

    const onTypeUserChange = (e) => {
        const { value } = e;
        getUsers({ id_t_user: value }).then((res) => {
            setUsersFiltered(
                res.data.map((user) => {
                    if (
                        visitedUsers.find((u) => u.id == user.id) === undefined
                    ) {
                        setVisitedUsers((prev) => [
                            ...prev,
                            { id: user.id, data: user },
                        ]);
                    }
                    return {
                        value: user.id,
                        label: `${user.email}`,
                    };
                })
            );
        });
        setSelectedUser(null);
    };

    const onUserSelected = (e) => {
        const { value } = e;
        setUsuariosSeleccionados((prev) => {
            let user = visitedUsers.find((u) => u.id === value);
            // If user already in prev, return prev
            if (prev.find((u) => u.id === user.id) !== undefined) {
                return prev;
            }
            return [...prev, user.data];
        });
        setSelectedUser(e);
    };

    const removeFromSelectedList = (user) => {
        setUsuariosSeleccionados((prev) => {
            return prev.filter((u) => u.id !== user.id);
        });
        findOrders({
            id_user: user.id,
            id_service: serviceDTO.service.id,
        }).then((res) => {
            deleteOrder(res[0][0].id).then((res) => {});
        });
    };

    const submitForm = (e) => {
        e.preventDefault();

        createOrders({
            orders: usuariosSeleccionados.map((user) => ({
                id_user: user.id,
                id_service: serviceDTO.service.id,
            })),
        }).then((res) => {
            if (res.error) {
                alert(res.data);
                return;
            }
            alert("Usuarios agregados");
            setServiceDTO((prev) => ({ ...prev, orders: res.data }));
            setNextStep(EstadoServiciosEnum.SERVICIO_CON_CONTENIDO);
        });
    };

    return (
        <>
            <Head title="Datos del servicio" />
            <form className="flex flex-col gap-4" onSubmit={submitForm}>
                <h1 className="text-xl font-bold text-left mb-3">
                    Asignar Usuarios
                </h1>
                <div className="md:flex flex-row gap-4">
                    <div className="md:w-1/2">
                        <Label>Selecciona el tipo de usuario a agregar</Label>
                        <SelectInput
                            options={tipoUsuarios}
                            onChange={onTypeUserChange}
                        />
                    </div>
                    <div className="md:w-1/2">
                        <Label>Selecciona el usuario a agregar</Label>
                        <SelectInput
                            options={usersFiltered}
                            value={selectedUser}
                            onChange={onUserSelected}
                        />
                    </div>
                </div>
                <div className="w-full">
                    {usuariosSeleccionados.length > 0 && (
                        <div className="mb-4">
                            <Label>Usuarios con acceso</Label>
                        </div>
                    )}
                    {usuariosSeleccionados.map((user, key) => (
                        <div className="grid gap-3" key={key}>
                            <div
                                className={
                                    "grid hover:shadow-lg grid-cols-6  bg-gradient-to-t from-white to-gray-servi rounded-xl"
                                }
                            >
                                <div
                                    className={
                                        "flex overflow-hidden col-span-1 my-auto mx-auto w-8 h-8 shadow-xl shadow-gray-dark bg-gradient-to-t from-gray-servi to-gray-dark rounded-full hover:opacity-30"
                                    }
                                >
                                    <img src={loadImageUser(user.id)} />
                                </div>
                                <div className="justify-center mx-auto text-center grid col-span-3 mt-2 aling-center">
                                    <Label className="text-lg font-bold text-left mb-3 overflow-hidden">
                                        {user.name}
                                    </Label>
                                    <div className="text-xs mb-3 overflow-hidden">
                                        {user.email}
                                    </div>
                                </div>
                                <Label className="bg-white text-center shadow-lg rounded-full justify_left col-span-1 aling-center my-auto overflow-hidden">
                                    {toStringTipoDeUsuariosEnum(user.id)}
                                </Label>
                                <Button
                                    className="col-span-1 ml-auto mr-0"
                                    onClick={() => removeFromSelectedList(user)}
                                >
                                    X
                                </Button>
                            </div>
                        </div>
                    ))}
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
